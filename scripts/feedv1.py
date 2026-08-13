"""
Morning Admin Brief
===================

Collects public Microsoft administrator updates for:

- Microsoft Entra
- Microsoft Intune
- Microsoft Purview
- Microsoft Defender

Output:
    updates.json

Designed to run automatically through GitHub Actions.

No API keys.
No authentication.
Official Microsoft sources only.
"""

from __future__ import annotations

import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import urljoin

import feedparser
import requests
from bs4 import BeautifulSoup


# ============================================================
# CONFIGURATION
# ============================================================

ROOT = Path(__file__).resolve().parent.parent

OUTPUT_FILE = ROOT / "updates.json"

TIMEOUT = 30

MAX_ITEMS_PER_SOURCE = 40

USER_AGENT = (
    "MorningAdminBrief/1.0 "
    "(GitHub Pages personal Microsoft administration news reader)"
)


HEADERS = {
    "User-Agent": USER_AGENT,
    "Accept": (
        "text/html,"
        "application/xhtml+xml,"
        "application/xml;q=0.9,"
        "*/*;q=0.8"
    ),
}


# ============================================================
# OFFICIAL MICROSOFT SOURCES
# ============================================================

SOURCES = [
    {
        "name": "Microsoft Entra",
        "product": "Entra",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "entra/fundamentals/whats-new"
        ),
    },
    {
        "name": "Microsoft Intune - What's new",
        "product": "Intune",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "intune/intune-service/fundamentals/whats-new"
        ),
    },
    {
        "name": "Microsoft Intune - In development",
        "product": "Intune",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "intune/whats-new/in-development"
        ),
    },
    {
        "name": "Microsoft Purview",
        "product": "Purview",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "purview/whats-new"
        ),
    },
    {
        "name": "Microsoft Defender XDR",
        "product": "Defender",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "defender-xdr/whats-new"
        ),
    },
    {
        "name": "Microsoft Defender for Endpoint",
        "product": "Defender",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "defender-endpoint/whats-new-in-microsoft-defender-endpoint"
        ),
    },
    {
        "name": "Microsoft Defender for Cloud",
        "product": "Defender",
        "type": "learn",
        "url": (
            "https://learn.microsoft.com/en-us/"
            "azure/defender-for-cloud/release-notes"
        ),
    },
]


# ============================================================
# OFFICIAL MICROSOFT RSS SOURCES
# ============================================================

RSS_SOURCES = [
    {
        "name": "Microsoft Entra Release Notes RSS",
        "product": "Entra",
        "url": (
            "https://learn.microsoft.com/api/search/rss?"
            "search=%22Release%20notes%20-%20Azure%20Active%20Directory%22"
            "&locale=en-us"
        ),
    },
    {
        "name": "Microsoft Intune What's New RSS",
        "product": "Intune",
        "url": (
            "https://learn.microsoft.com/api/search/rss?"
            "search=%22What%27s%20new%20in%20Microsoft%20Intune%22"
            "&locale=en-us"
        ),
    },
    {
        "name": "Microsoft Intune In Development RSS",
        "product": "Intune",
        "url": (
            "https://learn.microsoft.com/api/search/rss?"
            "search=%22In%20development%20for%20Microsoft%20Intune%22"
            "&locale=en-us"
        ),
    },
    {
        "name": "Microsoft Purview What's New RSS",
        "product": "Purview",
        "url": (
            "https://learn.microsoft.com/api/search/rss?"
            "search=%22What%27s%20new%20in%20Microsoft%20Purview%22"
            "&locale=en-us"
        ),
    },
    {
        "name": "Microsoft Defender What's New RSS",
        "product": "Defender",
        "url": (
            "https://learn.microsoft.com/api/search/rss?"
            "search=%22Microsoft%20Defender%22%20%22what%27s%20new%22"
            "&locale=en-us"
        ),
    },
]


# ============================================================
# DATE HELPERS
# ============================================================

MONTHS = {
    "january": 1,
    "february": 2,
    "march": 3,
    "april": 4,
    "may": 5,
    "june": 6,
    "july": 7,
    "august": 8,
    "september": 9,
    "october": 10,
    "november": 11,
    "december": 12,
}


def now_utc() -> datetime:
    return datetime.now(timezone.utc)


def iso_now() -> str:
    return now_utc().replace(microsecond=0).isoformat().replace(
        "+00:00",
        "Z",
    )


def normalise_date(value: str | None) -> str | None:
    """
    Convert a date into YYYY-MM-DD where possible.
    """

    if not value:
        return None

    value = value.strip()

    formats = [
        "%Y-%m-%d",
        "%B %d, %Y",
        "%b %d, %Y",
        "%d %B %Y",
        "%d %b %Y",
    ]

    for date_format in formats:
        try:
            parsed = datetime.strptime(
                value,
                date_format,
            )

            return parsed.strftime("%Y-%m-%d")

        except ValueError:
            continue

    return None


def month_heading_to_date(
    heading: str,
) -> str | None:
    """
    Convert headings such as:

        July 2026
        June 2026

    into a sortable date.
    """

    match = re.search(
        r"\b("
        + "|".join(MONTHS.keys())
        + r")\s+(20\d{2})\b",
        heading.lower(),
    )

    if not match:
        return None

    month = MONTHS[match.group(1)]
    year = int(match.group(2))

    return f"{year:04d}-{month:02d}-01"


# ============================================================
# TEXT HELPERS
# ============================================================

def clean_text(value: str) -> str:
    """
    Collapse whitespace and clean text extracted from HTML.
    """

    value = re.sub(
        r"\s+",
        " ",
        value or "",
    )

    return value.strip()


def truncate(
    value: str,
    length: int = 420,
) -> str:
    value = clean_text(value)

    if len(value) <= length:
        return value

    shortened = value[:length].rsplit(
        " ",
        1,
    )[0]

    return shortened + "…"


def make_id(
    product: str,
    title: str,
    url: str,
) -> str:
    raw = (
        f"{product}|{title}|{url}"
    ).lower()

    return hashlib.sha256(
        raw.encode("utf-8")
    ).hexdigest()[:20]


# ============================================================
# CLASSIFICATION
# ============================================================

def detect_action_required(
    title: str,
    body: str,
) -> bool:
    text = f"{title} {body}".lower()

    phrases = [
        "action required",
        "customer action required",
        "admin action required",
        "administrator action required",
        "you need to",
        "must update",
        "must migrate",
        "must transition",
        "prepare for",
        "plan for change",
        "retirement",
        "deprecated",
        "deprecation",
        "end of support",
    ]

    return any(
        phrase in text
        for phrase in phrases
    )


def detect_release_status(
    title: str,
    body: str,
) -> str | None:
    text = f"{title} {body}".lower()

    if (
        "general availability" in text
        or re.search(r"\bga\b", text)
    ):
        return "General availability"

    if (
        "public preview" in text
        or "in preview" in text
        or "preview" in text
    ):
        return "Preview"

    if (
        "in development" in text
        or "coming soon" in text
    ):
        return "In development"

    return None


def detect_change_type(
    title: str,
    body: str,
) -> str:
    text = f"{title} {body}".lower()

    if (
        "retire" in text
        or "retirement" in text
        or "deprecated" in text
        or "deprecation" in text
        or "end of support" in text
    ):
        return "Retirement"

    if (
        "plan for change" in text
        or "upcoming change" in text
    ):
        return "Upcoming change"

    if (
        "security" in text
        or "vulnerability" in text
    ):
        return "Security"

    if (
        "new feature" in text
        or "general availability" in text
        or "public preview" in text
    ):
        return "New feature"

    return "Update"


def why_it_matters(
    product: str,
    title: str,
    body: str,
    action_required: bool,
) -> str:
    """
    Rule-based explanation.

    We deliberately do not use AI here.
    """

    text = f"{title} {body}".lower()

    if "retire" in text or "deprecated" in text:
        return (
            "An existing feature or workflow is being removed or "
            "replaced, so check whether your environment still uses it."
        )

    if "end of support" in text:
        return (
            "Support is ending for part of the service. Check your "
            "current configuration and affected devices or workloads."
        )

    if action_required:
        return (
            "Microsoft indicates that administrators may need to "
            "prepare for this change or review their existing configuration."
        )

    if "conditional access" in text:
        return (
            "This could affect how access policies are configured "
            "or enforced across users, devices and applications."
        )

    if "mfa" in text or "authentication" in text:
        return (
            "Authentication changes can affect sign-in behaviour, "
            "Conditional Access and user access."
        )

    if "compliance" in text:
        return (
            "This may affect device compliance policies, reporting "
            "or how access decisions are made."
        )

    if "autopilot" in text or "enrollment" in text:
        return (
            "This may affect device provisioning or enrollment workflows "
            "managed through Intune."
        )

    if "data loss prevention" in text or "dlp" in text:
        return (
            "This could affect how sensitive information is detected, "
            "protected or prevented from leaving the organisation."
        )

    if "defender" in text or product == "Defender":
        return (
            "This may change security capabilities, detections, "
            "recommendations or investigation workflows."
        )

    if product == "Entra":
        return (
            "This is an identity or access-management change worth "
            "reviewing against your Entra configuration."
        )

    if product == "Intune":
        return (
            "This may affect endpoint-management capabilities, "
            "policies, applications or managed devices."
        )

    if product == "Purview":
        return (
            "This may affect compliance, information protection, "
            "governance or data-security workflows."
        )

    return (
        "This changes an administrator-facing Microsoft cloud capability."
    )


# ============================================================
# HTTP
# ============================================================

def fetch_page(
    url: str,
) -> str:
    response = requests.get(
        url,
        headers=HEADERS,
        timeout=TIMEOUT,
    )

    response.raise_for_status()

    return response.text


# ============================================================
# RSS
# ============================================================

def check_rss_source(
    source: dict[str, str],
) -> dict[str, Any]:
    """
    RSS is primarily being used as a source-health/change signal.

    Detailed individual features are collected from the Learn pages.
    """

    result = {
        "name": source["name"],
        "type": "RSS",
        "url": source["url"],
        "status": "failed",
        "entries": 0,
    }

    try:
        response = requests.get(
            source["url"],
            headers=HEADERS,
            timeout=TIMEOUT,
        )

        response.raise_for_status()

        feed = feedparser.parse(
            response.content
        )

        result["entries"] = len(
            feed.entries
        )

        result["status"] = "ok"

    except Exception as error:
        result["error"] = str(error)

    return result


# ============================================================
# MICROSOFT LEARN PARSER
# ============================================================

def get_main_content(
    soup: BeautifulSoup,
):
    """
    Microsoft Learn normally places article content inside <main>.
    """

    main = soup.find("main")

    if main:
        return main

    article = soup.find("article")

    if article:
        return article

    return soup


def determine_heading_date(
    heading,
) -> str | None:
    """
    Walk backwards through headings until we find a month/year.
    """

    current = heading

    while current:
        current = current.find_previous(
            ["h2", "h3"]
        )

        if current is None:
            break

        date = month_heading_to_date(
            clean_text(
                current.get_text(" ", strip=True)
            )
        )

        if date:
            return date

    return None


def extract_section_body(
    heading,
) -> str:
    """
    Get content underneath a feature heading until the next
    heading of the same or higher level.
    """

    level = int(
        heading.name[1]
    )

    content = []

    for sibling in heading.next_siblings:

        sibling_name = getattr(
            sibling,
            "name",
            None,
        )

        if sibling_name in {
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
        }:
            sibling_level = int(
                sibling_name[1]
            )

            if sibling_level <= level:
                break

        if hasattr(
            sibling,
            "get_text",
        ):
            text = clean_text(
                sibling.get_text(
                    " ",
                    strip=True,
                )
            )

            if text:
                content.append(text)

        if len(
            " ".join(content)
        ) > 1000:
            break

    return truncate(
        " ".join(content),
        650,
    )


def find_best_link(
    heading,
    source_url: str,
) -> str:
    """
    Prefer a link contained inside the heading.
    Otherwise link back to the Microsoft Learn source page.
    """

    link = heading.find(
        "a",
        href=True,
    )

    if link:
        href = link.get("href")

        if href:
            return urljoin(
                source_url,
                href,
            )

    heading_id = heading.get(
        "id"
    )

    if heading_id:
        return (
            f"{source_url}#{heading_id}"
        )

    return source_url


def should_ignore_heading(
    title: str,
) -> bool:
    text = title.lower().strip()

    ignored = {
        "in this article",
        "related content",
        "see also",
        "additional resources",
        "feedback",
        "next steps",
        "overview",
        "notices",
    }

    if text in ignored:
        return True

    if re.fullmatch(
        r"(january|february|march|april|may|june|"
        r"july|august|september|october|november|december)"
        r"\s+20\d{2}",
        text,
    ):
        return True

    return False


def parse_learn_source(
    source: dict[str, str],
) -> tuple[
    list[dict[str, Any]],
    dict[str, Any],
]:
    updates = []

    health = {
        "name": source["name"],
        "type": "Microsoft Learn",
        "url": source["url"],
        "status": "failed",
        "entries": 0,
    }

    try:
        html = fetch_page(
            source["url"]
        )

        soup = BeautifulSoup(
            html,
            "lxml",
        )

        main = get_main_content(
            soup
        )

        headings = main.find_all(
            ["h3", "h4"]
        )

        for heading in headings:

            title = clean_text(
                heading.get_text(
                    " ",
                    strip=True,
                )
            )

            if not title:
                continue

            if should_ignore_heading(
                title
            ):
                continue

            body = extract_section_body(
                heading
            )

            if len(title) < 8:
                continue

            if len(body) < 20:
                continue

            published_date = determine_heading_date(
                heading
            )

            if not published_date:
                published_date = now_utc().strftime(
                    "%Y-%m-%d"
                )

            url = find_best_link(
                heading,
                source["url"],
            )

            action_required = detect_action_required(
                title,
                body,
            )

            release_status = detect_release_status(
                title,
                body,
            )

            change_type = detect_change_type(
                title,
                body,
            )

            item = {
                "id": make_id(
                    source["product"],
                    title,
                    url,
                ),
                "product": source["product"],
                "title": title,
                "summary": truncate(
                    body,
                    360,
                ),
                "whyItMatters": why_it_matters(
                    source["product"],
                    title,
                    body,
                    action_required,
                ),
                "publishedDate": published_date,
                "releaseStatus": release_status,
                "changeType": change_type,
                "actionRequired": action_required,
                "sourceUrl": url,
                "sourceName": source["name"],
                "sourceType": "Microsoft Learn",
            }

            updates.append(
                item
            )

            if len(updates) >= MAX_ITEMS_PER_SOURCE:
                break

        health["entries"] = len(
            updates
        )

        health["status"] = "ok"

    except Exception as error:

        print(
            f"[ERROR] {source['name']}: {error}",
            file=sys.stderr,
        )

        health["error"] = str(
            error
        )

    return updates, health


# ============================================================
# DEDUPLICATION
# ============================================================

def deduplicate(
    updates: list[dict[str, Any]],
) -> list[dict[str, Any]]:

    seen = set()

    result = []

    for item in updates:

        identity = (
            item["product"].lower(),
            re.sub(
                r"\W+",
                "",
                item["title"].lower(),
            ),
        )

        if identity in seen:
            continue

        seen.add(
            identity
        )

        result.append(
            item
        )

    return result


# ============================================================
# SORTING
# ============================================================

def sort_updates(
    updates: list[dict[str, Any]],
) -> list[dict[str, Any]]:

    return sorted(
        updates,
        key=lambda item: (
            item.get(
                "publishedDate"
            )
            or "0000-00-00"
        ),
        reverse=True,
    )


# ============================================================
# EXISTING FEED FALLBACK
# ============================================================

def load_existing_feed() -> dict[str, Any] | None:

    if not OUTPUT_FILE.exists():
        return None

    try:
        with OUTPUT_FILE.open(
            "r",
            encoding="utf-8",
        ) as file:
            return json.load(
                file
            )

    except Exception:
        return None


# ============================================================
# SAVE
# ============================================================

def save_feed(
    updates: list[dict[str, Any]],
    source_health: list[dict[str, Any]],
) -> None:

    payload = {
        "generatedAt": iso_now(),
        "updateCount": len(
            updates
        ),
        "products": [
            "Entra",
            "Intune",
            "Purview",
            "Defender",
        ],
        "sourceHealth": source_health,
        "updates": updates,
    }

    with OUTPUT_FILE.open(
        "w",
        encoding="utf-8",
    ) as file:

        json.dump(
            payload,
            file,
            indent=2,
            ensure_ascii=False,
        )

        file.write(
            "\n"
        )


# ============================================================
# MAIN
# ============================================================

def main() -> None:

    print(
        "Morning Admin Brief"
    )

    print(
        "Collecting Microsoft updates..."
    )

    source_health = []

    all_updates = []

    # --------------------------------------------------------
    # Check official RSS sources
    # --------------------------------------------------------

    print(
        "\nChecking RSS sources..."
    )

    for source in RSS_SOURCES:

        print(
            f"  RSS: {source['name']}"
        )

        result = check_rss_source(
            source
        )

        source_health.append(
            result
        )

        print(
            f"       {result['status']} "
            f"({result['entries']} entries)"
        )

    # --------------------------------------------------------
    # Parse Microsoft Learn sources
    # --------------------------------------------------------

    print(
        "\nReading Microsoft Learn..."
    )

    for source in SOURCES:

        print(
            f"  Learn: {source['name']}"
        )

        updates, health = parse_learn_source(
            source
        )

        source_health.append(
            health
        )

        all_updates.extend(
            updates
        )

        print(
            f"         {health['status']} "
            f"({health['entries']} updates)"
        )

    # --------------------------------------------------------
    # Deduplicate
    # --------------------------------------------------------

    all_updates = deduplicate(
        all_updates
    )

    # --------------------------------------------------------
    # Sort
    # --------------------------------------------------------

    all_updates = sort_updates(
        all_updates
    )

    # --------------------------------------------------------
    # Safety fallback
    # --------------------------------------------------------

    if not all_updates:

        existing = load_existing_feed()

        if (
            existing
            and existing.get("updates")
        ):

            print(
                "\nWARNING:"
            )

            print(
                "All Microsoft sources failed."
            )

            print(
                "Keeping the previous updates.json."
            )

            sys.exit(
                0
            )

        print(
            "\nERROR:"
        )

        print(
            "No updates were collected and "
            "there is no previous feed."
        )

        sys.exit(
            1
        )

    # --------------------------------------------------------
    # Save
    # --------------------------------------------------------

    save_feed(
        all_updates,
        source_health,
    )

    print(
        "\nComplete."
    )

    print(
        f"{len(all_updates)} updates written to:"
    )

    print(
        OUTPUT_FILE
    )


if __name__ == "__main__":
    main()
