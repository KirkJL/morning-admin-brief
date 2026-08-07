const FEED_URL = "updates.json";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  const feedElement = document.getElementById("feed");
  const summaryElement = document.getElementById("summaryText");

  if (!feedElement || !summaryElement) {
    return;
  }

  try {
    const response = await fetch(`${FEED_URL}?v=${Date.now()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Feed request failed with status ${response.status}`);
    }

    const data = await response.json();

    const updates = Array.isArray(data.updates) ? data.updates : [];

    renderSummary(summaryElement, data, updates);
    renderFeed(feedElement, updates);
  } catch (error) {
    console.error("Failed to load Morning Admin Brief:", error);

    summaryElement.textContent = "Unable to load the latest brief.";

    feedElement.innerHTML = `
      <div class="error-state">
        The update feed could not be loaded. Try refreshing the page later.
      </div>
    `;
  }
}

function renderSummary(summaryElement, data, updates) {
  const totalUpdates = updates.length;

  const actionRequiredCount = updates.filter(
    update => update.actionRequired === true
  ).length;

  const unreadCount = updates.filter(
    update => !isRead(update.id)
  ).length;

  const generatedText = formatGeneratedDate(data.generatedAt);

  const estimatedMinutes = Math.max(
    1,
    Math.ceil(totalUpdates * 0.5)
  );

  const parts = [];

  parts.push(
    `${totalUpdates} update${totalUpdates === 1 ? "" : "s"}`
  );

  parts.push(
    `${unreadCount} unread`
  );

  if (actionRequiredCount > 0) {
    parts.push(
      `${actionRequiredCount} may require action`
    );
  }

  parts.push(
    `about ${estimatedMinutes} minute${estimatedMinutes === 1 ? "" : "s"} to read`
  );

  summaryElement.textContent =
    `${parts.join(" • ")}${generatedText ? ` • Updated ${generatedText}` : ""}`;
}

function renderFeed(feedElement, updates) {
  feedElement.innerHTML = "";

  if (updates.length === 0) {
    feedElement.innerHTML = `
      <div class="empty-state">
        No Microsoft admin updates are currently available.
      </div>
    `;

    return;
  }

  const sortedUpdates = [...updates].sort((a, b) => {
    const dateA = new Date(a.publishedDate || 0);
    const dateB = new Date(b.publishedDate || 0);

    return dateB - dateA;
  });

  for (const update of sortedUpdates) {
    const card = createUpdateCard(update);
    feedElement.appendChild(card);
  }
}

function createUpdateCard(update) {
  const article = document.createElement("article");

  article.className = "update-card";

  if (isRead(update.id)) {
    article.style.opacity = "0.72";
  }

  const meta = document.createElement("div");
  meta.className = "update-meta";

  meta.appendChild(
    createBadge(
      update.product || "Microsoft",
      getProductClass(update.product)
    )
  );

  if (update.changeType) {
    meta.appendChild(
      createBadge(update.changeType)
    );
  }

  if (update.releaseStatus) {
    meta.appendChild(
      createBadge(
        update.releaseStatus,
        update.releaseStatus.toLowerCase() === "preview"
          ? "preview"
          : ""
      )
    );
  }

  if (update.actionRequired === true) {
    meta.appendChild(
      createBadge(
        "Action required",
        "action-required"
      )
    );
  }

  const title = document.createElement("h2");
  title.className = "update-title";
  title.textContent = update.title || "Untitled Microsoft update";

  const summary = document.createElement("p");
  summary.className = "update-summary";
  summary.textContent =
    update.summary ||
    "No summary is available for this update.";

  article.appendChild(meta);
  article.appendChild(title);
  article.appendChild(summary);

  if (update.whyItMatters) {
    const why = document.createElement("div");
    why.className = "update-why";

    const strong = document.createElement("strong");
    strong.textContent = "Why it matters: ";

    const text = document.createElement("span");
    text.textContent = update.whyItMatters;

    why.appendChild(strong);
    why.appendChild(text);

    article.appendChild(why);
  }

  const footer = document.createElement("div");
  footer.className = "update-footer";

  const date = document.createElement("span");
  date.textContent = formatUpdateDate(update.publishedDate);

  footer.appendChild(date);

  if (update.sourceUrl) {
    const link = document.createElement("a");

    link.href = update.sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Read Microsoft source →";

    link.addEventListener("click", () => {
      markAsRead(update.id);
      article.style.opacity = "0.72";
      refreshSummary();
    });

    footer.appendChild(link);
  }

  article.appendChild(footer);

  return article;
}

function createBadge(text, extraClass = "") {
  const badge = document.createElement("span");

  badge.className = `badge${extraClass ? ` ${extraClass}` : ""}`;
  badge.textContent = text;

  return badge;
}

function getProductClass(product) {
  const value = String(product || "").toLowerCase();

  if (value.includes("intune")) {
    return "intune";
  }

  if (value.includes("entra")) {
    return "entra";
  }

  if (value.includes("purview")) {
    return "purview";
  }

  if (value.includes("defender")) {
    return "defender";
  }

  return "";
}

function formatUpdateDate(dateValue) {
  if (!dateValue) {
    return "Date unavailable";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function formatGeneratedDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getReadStorageKey(id) {
  return `morning-admin-brief-read-${id}`;
}

function isRead(id) {
  if (!id) {
    return false;
  }

  try {
    return localStorage.getItem(
      getReadStorageKey(id)
    ) === "true";
  } catch {
    return false;
  }
}

function markAsRead(id) {
  if (!id) {
    return;
  }

  try {
    localStorage.setItem(
      getReadStorageKey(id),
      "true"
    );
  } catch {
    // Local storage may be unavailable.
  }
}

async function refreshSummary() {
  const summaryElement = document.getElementById("summaryText");

  if (!summaryElement) {
    return;
  }

  try {
    const response = await fetch(`${FEED_URL}?v=${Date.now()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    const updates = Array.isArray(data.updates) ? data.updates : [];

    renderSummary(summaryElement, data, updates);
  } catch {
    // Summary refresh is non-critical.
  }
}
