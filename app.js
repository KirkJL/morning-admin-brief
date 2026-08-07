const FEED_URL = "updates.json";

let currentUpdates = [];
let currentProduct = "all";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  const feedElement = document.getElementById("feed");
  const summaryElement = document.getElementById("summaryText");

  if (!feedElement || !summaryElement) {
    console.error("Required page elements are missing.");
    return;
  }

  bindFilters();

  try {
    const data = await loadFeed();

    currentUpdates = Array.isArray(data.updates)
      ? data.updates
      : [];

    updateHeaderTimestamp(data.generatedAt);

    renderCurrentView();
  } catch (error) {
    console.error("Failed to load Morning Admin Brief:", error);

    summaryElement.textContent =
      "Unable to load the latest brief.";

    feedElement.innerHTML = `
      <div class="error-state">
        The update feed could not be loaded. Try refreshing the page later.
      </div>
    `;
  }
}

async function loadFeed() {
  const response = await fetch(
    `${FEED_URL}?v=${Date.now()}`,
    {
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error(
      `Feed request failed with status ${response.status}`
    );
  }

  return response.json();
}


/* =========================================================
   CURRENT VIEW
   ========================================================= */

function renderCurrentView() {
  const visibleUpdates = getFilteredUpdates();

  renderSummary(visibleUpdates);
  renderFeed(visibleUpdates);
}


/* =========================================================
   FILTERS
   ========================================================= */

function bindFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  const select = document.getElementById("productFilter");

  console.log(
    `Morning Admin Brief: found ${tabs.length} filter tabs`
  );

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const product =
        tab.getAttribute("data-product") || "all";

      currentProduct = product;

      tabs.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");

      if (select) {
        select.value = product;
      }

      renderCurrentView();
    });
  });

  if (select) {
    select.addEventListener("change", () => {
      currentProduct = select.value || "all";

      tabs.forEach(tab => {
        const product =
          tab.getAttribute("data-product") || "all";

        tab.classList.toggle(
          "active",
          product === currentProduct
        );
      });

      renderCurrentView();
    });
  }
}

function getFilteredUpdates() {
  if (currentProduct === "all") {
    return currentUpdates;
  }

  const selectedProduct =
    currentProduct.toLowerCase();

  return currentUpdates.filter(update => {
    const product =
      String(update.product || "").toLowerCase();

    return product.includes(selectedProduct);
  });
}


/* =========================================================
   SUMMARY
   ========================================================= */

function renderSummary(updates) {
  const summaryElement =
    document.getElementById("summaryText");

  const updatesCount =
    document.getElementById("summaryUpdates");

  const actionsCount =
    document.getElementById("summaryActions");

  const unreadCount =
    document.getElementById("summaryUnread");

  const minutesCount =
    document.getElementById("summaryMinutes");

  const newCount =
    document.getElementById("summaryNew");

  const total = updates.length;

  const actions = updates.filter(
    update => update.actionRequired === true
  ).length;

  const unread = updates.filter(
    update => !isRead(update.id)
  ).length;

  const estimatedMinutes = Math.max(
    1,
    Math.ceil(total * 0.45)
  );

  if (updatesCount) {
    updatesCount.textContent = total;
  }

  if (actionsCount) {
    actionsCount.textContent = actions;
  }

  if (unreadCount) {
    unreadCount.textContent = unread;
  }

  if (minutesCount) {
    minutesCount.textContent = `~${estimatedMinutes}`;
  }

  if (newCount) {
    newCount.textContent =
      getNewUpdatesText(updates);
  }

  if (summaryElement) {
    summaryElement.textContent =
      `${total} updates • ${unread} unread • ` +
      `${actions} require attention • ` +
      `about ${estimatedMinutes} minute${estimatedMinutes === 1 ? "" : "s"} to read`;
  }
}

function getNewUpdatesText(updates) {
  const now = new Date();

  const recent = updates.filter(update => {
    if (!update.publishedDate) {
      return false;
    }

    const date =
      new Date(update.publishedDate);

    if (Number.isNaN(date.getTime())) {
      return false;
    }

    const difference =
      now.getTime() - date.getTime();

    const hours =
      difference / (1000 * 60 * 60);

    return hours >= 0 && hours <= 24;
  });

  if (recent.length === 0) {
    return "Latest Microsoft changes";
  }

  return `${recent.length} new in the last 24 hours`;
}


/* =========================================================
   HEADER TIMESTAMP
   ========================================================= */

function updateHeaderTimestamp(dateValue) {
  const element =
    document.getElementById("lastUpdated");

  if (!element || !dateValue) {
    return;
  }

  const date =
    new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return;
  }

  const formatted =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    ).format(date);

  element.innerHTML = `
    <span
      class="last-updated-icon"
      aria-hidden="true"
    >
      ◷
    </span>

    <span>
      Updated ${formatted}
    </span>

    <span
      class="status-dot"
      aria-hidden="true"
    ></span>
  `;
}


/* =========================================================
   FEED
   ========================================================= */

function renderFeed(updates) {
  const feedElement =
    document.getElementById("feed");

  if (!feedElement) {
    return;
  }

  feedElement.setAttribute(
    "aria-busy",
    "false"
  );

  feedElement.innerHTML = "";

  if (
    !Array.isArray(updates) ||
    updates.length === 0
  ) {
    feedElement.innerHTML = `
      <div class="empty-state">
        No Microsoft admin updates match this filter.
      </div>
    `;

    return;
  }

  const sortedUpdates =
    [...updates].sort((a, b) => {
      const dateA =
        new Date(a.publishedDate || 0);

      const dateB =
        new Date(b.publishedDate || 0);

      return dateB - dateA;
    });

  for (const update of sortedUpdates) {
    const card =
      createUpdateCard(update);

    feedElement.appendChild(card);
  }
}

function createUpdateCard(update) {
  const article =
    document.createElement("article");

  article.className = "update-card";

  if (isRead(update.id)) {
    article.classList.add("is-read");
  }

  const meta =
    document.createElement("div");

  meta.className = "update-meta";

  meta.appendChild(
    createBadge(
      update.product || "Microsoft",
      getProductClass(update.product)
    )
  );

  if (update.changeType) {
    meta.appendChild(
      createBadge(
        update.changeType
      )
    );
  }

  if (update.releaseStatus) {
    meta.appendChild(
      createBadge(
        update.releaseStatus,
        getStatusClass(
          update.releaseStatus
        )
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

  const title =
    document.createElement("h2");

  title.className =
    "update-title";

  title.textContent =
    update.title ||
    "Untitled Microsoft update";

  const summary =
    document.createElement("p");

  summary.className =
    "update-summary";

  summary.textContent =
    update.summary ||
    "No summary is available for this update.";

  article.appendChild(meta);
  article.appendChild(title);
  article.appendChild(summary);

  if (update.whyItMatters) {
    const why =
      document.createElement("div");

    why.className =
      "update-why";

    const strong =
      document.createElement("strong");

    strong.textContent =
      "Why it matters:";

    const text =
      document.createElement("span");

    text.textContent =
      ` ${update.whyItMatters}`;

    why.appendChild(strong);
    why.appendChild(text);

    article.appendChild(why);
  }

  const footer =
    document.createElement("div");

  footer.className =
    "update-footer";

  const date =
    document.createElement("span");

  date.textContent =
    formatUpdateDate(
      update.publishedDate
    );

  footer.appendChild(date);

  if (update.sourceUrl) {
    const link =
      document.createElement("a");

    link.href =
      update.sourceUrl;

    link.target =
      "_blank";

    link.rel =
      "noopener noreferrer";

    link.textContent =
      "Read Microsoft source →";

    link.addEventListener(
      "click",
      () => {
        markAsRead(update.id);

        article.classList.add("is-read");

        renderSummary(
          getFilteredUpdates()
        );
      }
    );

    footer.appendChild(link);
  }

  article.appendChild(footer);

  return article;
}


/* =========================================================
   BADGES
   ========================================================= */

function createBadge(
  text,
  extraClass = ""
) {
  const badge =
    document.createElement("span");

  badge.className =
    `badge${extraClass ? ` ${extraClass}` : ""}`;

  badge.textContent = text;

  return badge;
}

function getProductClass(product) {
  const value =
    String(product || "")
      .toLowerCase();

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

function getStatusClass(status) {
  const value =
    String(status || "")
      .toLowerCase();

  if (value.includes("preview")) {
    return "preview";
  }

  return "";
}


/* =========================================================
   DATE FORMATTING
   ========================================================= */

function formatUpdateDate(dateValue) {
  if (!dateValue) {
    return "Date unavailable";
  }

  const date =
    new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return String(dateValue);
  }

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(date);
}


/* =========================================================
   DEVICE-LOCAL READ STATE
   ========================================================= */

/*
 * Read state is intentionally stored in localStorage.
 *
 * This means:
 *
 * - Phone keeps its own read history
 * - Laptop keeps its own read history
 * - Work PC keeps its own read history
 * - No account is required
 * - Nothing is uploaded anywhere
 *
 * Clearing browser/site storage will reset the history.
 */

function getReadStorageKey(id) {
  return `morning-admin-brief-read-${id}`;
}

function isRead(id) {
  if (!id) {
    return false;
  }

  try {
    return (
      localStorage.getItem(
        getReadStorageKey(id)
      ) === "true"
    );
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
