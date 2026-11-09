/**
 * Snehal Business Hub — Product Catalog Page Script (products.js controller logic)
 * Renders products grid, handles live search, category filtering, sorting,
 * result counts, and graceful image fallback.
 */

document.addEventListener("DOMContentLoaded", () => {
  initProductCatalog();
});

function initProductCatalog() {
  const grid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("productSearchInput");
  const categoryContainer = document.getElementById("categoryPills");
  const sortSelect = document.getElementById("productSortSelect");
  const countDisplay = document.getElementById("productCountDisplay");
  const clearBtn = document.getElementById("clearFiltersBtn");

  if (!grid || !window.productsCatalog) return;

  const allProducts = window.productsCatalog.getAll();
  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "featured";

  // Check URL query parameters (e.g., ?category=wellness)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category");
  if (initialCategory) {
    currentCategory = initialCategory;
  }

  // Render Category Filter Buttons
  renderCategoryPills(categoryContainer, currentCategory, (catId) => {
    currentCategory = catId;
    applyFilters();
  });

  // Search Input Listener with Debounce
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Sort Select Listener
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  // Clear Filters Button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      currentCategory = "all";
      currentSearch = "";
      currentSort = "featured";
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "featured";
      updateActivePill(categoryContainer, "all");
      applyFilters();
    });
  }

  // Core filter & sort engine
  function applyFilters() {
    let results = allProducts.filter(item => {
      const matchCat = (currentCategory === "all") || (item.categoryKey === currentCategory);
      const matchSearch = !currentSearch ||
        item.name.toLowerCase().includes(currentSearch) ||
        item.category.toLowerCase().includes(currentSearch) ||
        item.shortDescription.toLowerCase().includes(currentSearch);
      return matchCat && matchSearch;
    });

    // Apply Sorting
    if (currentSort === "alpha-asc") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "alpha-desc") {
      results.sort((a, b) => b.name.localeCompare(a.name));
    } else if (currentSort === "price-low") {
      results.sort((a, b) => (a.dp || a.mrp || 0) - (b.dp || b.mrp || 0));
    } else if (currentSort === "price-high") {
      results.sort((a, b) => (b.dp || b.mrp || 0) - (a.dp || a.mrp || 0));
    } else {
      // Default: featured first
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    renderGrid(grid, results);
    if (countDisplay) {
      countDisplay.textContent = `Showing ${results.length} product${results.length === 1 ? "" : "s"}`;
    }
  }

  // Initial Run
  applyFilters();
}

function renderCategoryPills(container, activeCat, onSelect) {
  if (!container || !window.productsCatalog.categories) return;

  container.innerHTML = "";
  window.productsCatalog.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `pill-btn ${cat.id === activeCat ? "active" : ""}`;
    btn.textContent = cat.name;
    btn.dataset.category = cat.id;

    btn.addEventListener("click", () => {
      container.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      onSelect(cat.id);
    });

    container.appendChild(btn);
  });
}

function updateActivePill(container, activeCat) {
  if (!container) return;
  container.querySelectorAll(".pill-btn").forEach(btn => {
    if (btn.dataset.category === activeCat) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function renderGrid(container, items) {
  if (!items || items.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <h3>No Products Found</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">
          We couldn't find any products matching your search or filter.
        </p>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('clearFiltersBtn').click()">
          Clear All Filters
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(product => renderProductCardHtml(product)).join("");
}

/**
 * Reusable Product Card HTML Template
 */
function renderProductCardHtml(product) {
  const fallbackImg = window.productsCatalog.getFallbackImage(product.name);
  const waUrl = window.productsCatalog.config.buildProductEnquiryUrl(product.name, product.id);

  let priceHtml = "";
  if (product.dp) {
    priceHtml = `
      <div class="product-pricing-strip">
        <div>
          <span class="price-label">Distributor / Offer: </span>
          <span class="price-dp">₹${product.dp.toLocaleString("en-IN")}</span>
        </div>
        ${product.mrp ? `<span class="price-mrp">MRP ₹${product.mrp.toLocaleString("en-IN")}</span>` : ""}
      </div>
    `;
  } else if (product.mrp) {
    priceHtml = `
      <div class="product-pricing-strip">
        <div>
          <span class="price-label">MRP: </span>
          <span class="price-dp">₹${product.mrp.toLocaleString("en-IN")}</span>
        </div>
      </div>
    `;
  } else {
    priceHtml = `
      <div class="product-pricing-strip">
        <span class="price-label" style="color: var(--color-gold);">Contact for Official Pricing</span>
      </div>
    `;
  }

  return `
    <article class="product-card">
      <div class="product-card-media">
        <span class="product-badge-category">${escapeHtml(product.category)}</span>
        <img 
          src="${escapeHtml(product.image)}" 
          alt="${escapeHtml(product.name)}"
          loading="lazy"
          onerror="this.onerror=null; this.src='${fallbackImg}';"
        />
      </div>
      <div class="product-card-body">
        <h3 class="product-title">
          <a href="product-details.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a>
        </h3>
        <p class="product-desc-short">${escapeHtml(product.shortDescription)}</p>
        ${priceHtml}
        <div class="product-card-actions">
          <a href="product-details.html?id=${encodeURIComponent(product.id)}" class="btn btn-secondary btn-sm">
            View Details
          </a>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Enquire
          </a>
        </div>
      </div>
    </article>
  `;
}

// XSS-Safe HTML String escaping
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
