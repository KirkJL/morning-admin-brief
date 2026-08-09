const FEED_URL = "updates.json";

let currentUpdates = [];

/*
 * Two independent filters.
 *
 * Example:
 *
 * currentProduct = "Intune"
 * currentStatus  = "unread"
 *
 * = unread Intune updates only.
 */

let currentProduct = "all";
let currentStatus = "all";


document.addEventListener(
  "DOMContentLoaded",
  init
);


/* =========================================================
   INITIALISATION
   ========================================================= */

async function init() {
  const feedElement =
    document.getElementById("feed");

  const summaryElement =
    document.getElementById("summaryText");

  if (!feedElement || !summaryElement) {
    console.error(
      "365in5: required page elements are missing."
    );

    return;
  }

  bindProductFilters();
  bindStatusFilters();

  try {
    const data =
      await loadFeed();

    currentUpdates =
      Array.isArray(data.updates)
        ? data.updates
        : [];

    updateHeaderTimestamp(
      data.generatedAt
    );

    renderCurrentView();

  } catch (error) {

    console.error(
      "365in5: failed to load update feed:",
      error
    );

    summaryElement.textContent =
      "Unable to load the latest brief.";

    feedElement.innerHTML = `
      <div class="error-state">
        The update feed could not be loaded.
        Try refreshing the page later.
      </div>
    `;
  }
}


/* =========================================================
   LOAD FEED
   ========================================================= */

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
  /*
   * Product stats are calculated BEFORE the status filter.
   *
   * Example:
   *
   * If Intune is selected:
   *
   * 42 updates
   * 4 action required
   * 19 unread
   * 23 read
   *
   * Then clicking "Unread" only changes the feed itself.
   */

  const productUpdates =
    getProductFilteredUpdates();

  const visibleUpdates =
    getFilteredUpdates();

  renderSummary(
    productUpdates
  );

  renderFeed(
    visibleUpdates
  );

  updateFilterDescription();
}


/* =========================================================
   PRODUCT FILTERS
   ========================================================= */

function bindProductFilters() {
  const tabs =
    document.querySelectorAll(
      ".filter-tab"
    );

  const select =
    document.getElementById(
      "productFilter"
    );

  tabs.forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        currentProduct =
          tab.getAttribute(
            "data-product"
          ) || "all";

        tabs.forEach(item => {
          item.classList.remove(
            "active"
          );
        });

        tab.classList.add(
          "active"
        );

        if (select) {
          select.value =
            currentProduct;
        }

        renderCurrentView();
      }
    );
  });


  if (select) {

    select.addEventListener(
      "change",
      () => {

        currentProduct =
          select.value || "all";

        tabs.forEach(tab => {

          const product =
            tab.getAttribute(
              "data-product"
            ) || "all";

          tab.classList.toggle(
            "active",
            product === currentProduct
          );
        });

        renderCurrentView();
      }
    );
  }
}


/* =========================================================
   STATUS FILTERS
   ========================================================= */

function bindStatusFilters() {
  const filters =
    document.querySelectorAll(
      ".summary-filter"
    );

  filters.forEach(filter => {

    filter.addEventListener(
      "click",
      () => {

        currentStatus =
          filter.getAttribute(
            "data-status"
          ) || "all";

        filters.forEach(item => {

          const active =
            item === filter;

          item.classList.toggle(
            "active",
            active
          );

          item.setAttribute(
            "aria-pressed",
            active
              ? "true"
              : "false"
          );
        });

        renderCurrentView();
      }
    );
  });
}


/* =========================================================
   FILTERING
   ========================================================= */

function getProductFilteredUpdates() {
  if (currentProduct === "all") {
    return currentUpdates;
  }

  const selectedProduct =
    normaliseProduct(
      currentProduct
    );

  return currentUpdates.filter(
    update => {

      const updateProduct =
        normaliseProduct(
          update.product
        );

      return updateProduct.includes(
        selectedProduct
      );
    }
  );
}


function getFilteredUpdates() {
  let updates =
    getProductFilteredUpdates();


  switch (currentStatus) {

    case "action":

      updates =
        updates.filter(
          update =>
            update.actionRequired === true
        );

      break;


    case "unread":

      updates =
        updates.filter(
          update =>
            !isRead(update.id)
        );

      break;


    case "read":

      updates =
        updates.filter(
          update =>
            isRead(update.id)
        );

      break;


    case "all":
    default:

      break;
  }


  return updates;
}


function normaliseProduct(value) {
  return String(
    value || ""
  )
    .trim()
    .toLowerCase();
}


/* =========================================================
   ACTIVE FILTER DESCRIPTION
   ========================================================= */

function updateFilterDescription() {
  const element =
    document.getElementById(
      "activeFilterDescription"
    );

  if (!element) {
    return;
  }


  const productName =
    currentProduct === "all"
      ? "all products"
      : currentProduct;


  let statusText =
    "all updates";


  if (currentStatus === "action") {
    statusText =
      "updates requiring attention";
  }

  if (currentStatus === "unread") {
    statusText =
      "unread updates";
  }

  if (currentStatus === "read") {
    statusText =
      "read updates";
  }


  if (
    currentProduct === "all" &&
    currentStatus === "all"
  ) {

    element.textContent =
      "Showing all updates";

    return;
  }


  element.textContent =
    `Showing ${statusText} for ${productName}`;
}


/* =========================================================
   SUMMARY
   ========================================================= */

function renderSummary(updates) {
  const summaryElement =
    document.getElementById(
      "summaryText"
    );

  const updatesCount =
    document.getElementById(
      "summaryUpdates"
    );

  const actionsCount =
    document.getElementById(
      "summaryActions"
    );

  const unreadCount =
    document.getElementById(
      "summaryUnread"
    );

  const readCount =
    document.getElementById(
      "summaryRead"
    );


  const total =
    updates.length;


  const actions =
    updates.filter(
      update =>
        update.actionRequired === true
    ).length;


  const unread =
    updates.filter(
      update =>
        !isRead(update.id)
    ).length;


  const read =
    total - unread;


  if (updatesCount) {
    updatesCount.textContent =
      total;
  }


  if (actionsCount) {
    actionsCount.textContent =
      actions;
  }


  if (unreadCount) {
    unreadCount.textContent =
      unread;
  }


  if (readCount) {
    readCount.textContent =
      read;
  }


  if (summaryElement) {

    summaryElement.textContent =
      `${total} updates • ` +
      `${actions} require attention • ` +
      `${unread} unread • ` +
      `${read} read`;
  }
}


/* =========================================================
   HEADER TIMESTAMP
   ========================================================= */

function updateHeaderTimestamp(
  dateValue
) {
  const element =
    document.getElementById(
      "lastUpdated"
    );

  if (
    !element ||
    !dateValue
  ) {
    return;
  }


  const date =
    new Date(
      dateValue
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
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
    ).format(
      date
    );


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
    document.getElementById(
      "feed"
    );

  if (!feedElement) {
    return;
  }


  feedElement.setAttribute(
    "aria-busy",
    "false"
  );


  feedElement.innerHTML =
    "";


  if (
    !Array.isArray(updates) ||
    updates.length === 0
  ) {

    feedElement.innerHTML = `
      <div class="empty-state">
        Nothing matches the selected filters.
      </div>
    `;

    return;
  }


  const sortedUpdates =
    [...updates].sort(
      (a, b) => {

        const dateA =
          new Date(
            a.publishedDate || 0
          );

        const dateB =
          new Date(
            b.publishedDate || 0
          );

        return dateB - dateA;
      }
    );


  for (
    const update
    of sortedUpdates
  ) {

    const card =
      createUpdateCard(
        update
      );

    feedElement.appendChild(
      card
    );
  }
}


/* =========================================================
   CREATE CARD
   ========================================================= */

function createUpdateCard(
  update
) {
  const article =
    document.createElement(
      "article"
    );


  article.className =
    "update-card";


  const read =
    isRead(
      update.id
    );


  if (read) {
    article.classList.add(
      "is-read"
    );
  }


  const productClass =
    getProductClass(
      update.product
    );


  if (productClass) {

    article.classList.add(
      `product-${productClass}`
    );
  }


  const meta =
    document.createElement(
      "div"
    );


  meta.className =
    "update-meta";


  meta.appendChild(
    createBadge(
      update.product ||
        "Microsoft",
      productClass
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


  if (
    update.actionRequired === true
  ) {

    meta.appendChild(
      createBadge(
        "Action required",
        "action-required"
      )
    );
  }


  const title =
    document.createElement(
      "h2"
    );


  title.className =
    "update-title";


  title.textContent =
    update.title ||
    "Untitled Microsoft update";


  const summary =
    document.createElement(
      "p"
    );


  summary.className =
    "update-summary";


  summary.textContent =
    update.summary ||
    "No summary is available for this update.";


  article.appendChild(
    meta
  );


  article.appendChild(
    title
  );


  article.appendChild(
    summary
  );


  if (update.whyItMatters) {

    const why =
      document.createElement(
        "div"
      );


    why.className =
      "update-why";


    const strong =
      document.createElement(
        "strong"
      );


    strong.textContent =
      "Why it matters:";


    const text =
      document.createElement(
        "span"
      );


    text.textContent =
      ` ${update.whyItMatters}`;


    why.appendChild(
      strong
    );


    why.appendChild(
      text
    );


    article.appendChild(
      why
    );
  }


  const footer =
    document.createElement(
      "div"
    );


  footer.className =
    "update-footer";


  const date =
    document.createElement(
      "span"
    );


  date.textContent =
    formatUpdateDate(
      update.publishedDate
    );


  footer.appendChild(
    date
  );


  /*
   * Show a visual read indicator.
   */

  if (read) {

    const readIndicator =
      document.createElement(
        "span"
      );

    readIndicator.className =
      "read-indicator";

    readIndicator.textContent =
      "✓ Read";

    footer.appendChild(
      readIndicator
    );
  }


  if (update.sourceUrl) {

    const link =
      document.createElement(
        "a"
      );


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

        markAsRead(
          update.id
        );

        /*
         * Immediately update everything
         * on the page.
         *
         * Important when "Unread"
         * is currently selected because
         * the article should disappear.
         */

        renderCurrentView();
      }
    );


    footer.appendChild(
      link
    );
  }


  article.appendChild(
    footer
  );


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
    document.createElement(
      "span"
    );


  badge.className =
    `badge${
      extraClass
        ? ` ${extraClass}`
        : ""
    }`;


  badge.textContent =
    text;


  return badge;
}


/* =========================================================
   PRODUCT CLASS
   ========================================================= */

function getProductClass(
  product
) {
  const value =
    String(
      product || ""
    ).toLowerCase();


  if (
    value.includes(
      "intune"
    )
  ) {
    return "intune";
  }


  if (
    value.includes(
      "entra"
    )
  ) {
    return "entra";
  }


  if (
    value.includes(
      "purview"
    )
  ) {
    return "purview";
  }


  if (
    value.includes(
      "defender"
    )
  ) {
    return "defender";
  }


  if (
    value.includes(
      "azure"
    )
  ) {
    return "azure";
  }


  if (
    value.includes(
      "sharepoint"
    )
  ) {
    return "sharepoint";
  }


  return "";
}


/* =========================================================
   RELEASE STATUS
   ========================================================= */

function getStatusClass(
  status
) {
  const value =
    String(
      status || ""
    ).toLowerCase();


  if (
    value.includes(
      "preview"
    )
  ) {
    return "preview";
  }


  return "";
}


/* =========================================================
   DATE FORMATTING
   ========================================================= */

function formatUpdateDate(
  dateValue
) {
  if (!dateValue) {
    return "Date unavailable";
  }


  const date =
    new Date(
      dateValue
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(
      dateValue
    );
  }


  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  ).format(
    date
  );
}


/* =========================================================
   DEVICE-LOCAL READ STATE
   ========================================================= */

/*
 * Read history stays on the device/browser.
 *
 * No tracking.
 * No account.
 * No server storage.
 */

function getReadStorageKey(
  id
) {
  return (
    `365in5-read-${id}`
  );
}


function isRead(
  id
) {
  if (!id) {
    return false;
  }


  try {

    /*
     * Support the original Morning Admin Brief
     * storage keys too.
     *
     * This prevents your current device from
     * suddenly forgetting everything you've
     * already read after the 365in5 rename.
     */

    const newKey =
      localStorage.getItem(
        getReadStorageKey(
          id
        )
      );


    const legacyKey =
      localStorage.getItem(
        `morning-admin-brief-read-${id}`
      );


    return (
      newKey === "true" ||
      legacyKey === "true"
    );

  } catch {

    return false;
  }
}


function markAsRead(
  id
) {
  if (!id) {
    return;
  }


  try {

    localStorage.setItem(
      getReadStorageKey(
        id
      ),
      "true"
    );

  } catch {

    /*
     * Local storage may be disabled.
     */
  }
}
