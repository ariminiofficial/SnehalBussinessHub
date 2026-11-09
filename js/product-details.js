/**
 * Snehal Business Hub — Product Details Script (product-details.js)
 * Parses URL query ?id=..., retrieves product from catalog,
 * displays verified data, ingredients, specifications, directions,
 * and renders related products from the same category.
 */

document.addEventListener("DOMContentLoaded", () => {
  initProductDetailsPage();
});

function initProductDetailsPage() {
  const container = document.getElementById("productDetailsContainer");
  const relatedGrid = document.getElementById("relatedProductsGrid");
  const breadcrumbCurrent = document.getElementById("breadcrumbCurrentProduct");
  const breadcrumbCat = document.getElementById("breadcrumbCategory");

  if (!container || !window.productsCatalog) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = window.productsCatalog.getById(productId);

  if (!product) {
    renderNotFound(container);
    return;
  }

  // Update Page Title and Meta
  document.title = `${product.name} — Snehal Business Hub`;

  // Update Breadcrumbs
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
  if (breadcrumbCat) {
    breadcrumbCat.textContent = product.category;
    breadcrumbCat.href = `products.html?category=${encodeURIComponent(product.categoryKey)}`;
  }

  // Render Main Details
  renderProductDetails(container, product);

  // Render Related Products
  if (relatedGrid) {
    const related = window.productsCatalog.getRelated(product.id, 3);
    if (related.length > 0) {
      relatedGrid.innerHTML = related.map(p => renderProductCardHtml(p)).join("");
    } else {
      document.getElementById("relatedProductsSection")?.remove();
    }
  }
}

function renderProductDetails(container, product) {
  const fallbackImg = window.productsCatalog.getFallbackImage(product.name);
  const waUrl = window.productsCatalog.config.buildProductEnquiryUrl(product.name, product.id);

  let priceHtml = "";
  if (product.dp) {
    priceHtml = `
      <div class="product-pricing-strip" style="margin-bottom: 1.5rem; border: none; padding-top: 0;">
        <div>
          <span class="price-label">Distributor / Offer Price: </span>
          <span class="price-dp" style="font-size: 1.75rem;">₹${product.dp.toLocaleString("en-IN")}</span>
        </div>
        ${product.mrp ? `<span class="price-mrp" style="font-size: 1.1rem;">MRP ₹${product.mrp.toLocaleString("en-IN")}</span>` : ""}
      </div>
    `;
  } else if (product.mrp) {
    priceHtml = `
      <div class="product-pricing-strip" style="margin-bottom: 1.5rem; border: none; padding-top: 0;">
        <div>
          <span class="price-label">MRP: </span>
          <span class="price-dp" style="font-size: 1.75rem;">₹${product.mrp.toLocaleString("en-IN")}</span>
        </div>
      </div>
    `;
  }

  let specsHtml = "";
  if (product.specifications && product.specifications.length > 0) {
    specsHtml = `
      <div style="margin-top: 1rem;">
        <h4 style="font-size: 1rem; color: var(--color-forest); margin-bottom: 0.5rem; font-family: var(--font-sans); font-weight: 600;">
          Verified Highlights & Specifications
        </h4>
        <ul class="details-specs-list">
          ${product.specifications.map(s => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${escapeHtml(s)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  let directionsHtml = "";
  if (product.directions) {
    directionsHtml = `
      <div style="background: var(--color-gold-subtle); padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--color-gold); margin-top: 1rem;">
        <h4 style="font-size: 0.95rem; color: var(--color-forest-deep); margin-bottom: 0.35rem; font-family: var(--font-sans); font-weight: 700;">
          Suggested Directions / Recommended Use
        </h4>
        <p style="font-size: 0.88rem; color: var(--color-text-primary); line-height: 1.5;">
          ${escapeHtml(product.directions)}
        </p>
      </div>
    `;
  }

  // Multiple image thumbnails if altImages exists
  const allImages = [product.image, ...(product.altImages || [])];
  let thumbsHtml = "";
  if (allImages.length > 1) {
    thumbsHtml = `
      <div class="details-thumbs-strip">
        ${allImages.map((img, idx) => `
          <div class="thumb-item ${idx === 0 ? "active" : ""}" onclick="switchMainImage('${escapeHtml(img)}', this)">
            <img src="${escapeHtml(img)}" alt="${escapeHtml(product.name)} thumbnail" onerror="this.onerror=null; this.src='${fallbackImg}';" />
          </div>
        `).join("")}
      </div>
    `;
  }

  container.innerHTML = `
    <div class="details-grid">
      <!-- Media Column -->
      <div class="details-gallery">
        <div class="details-main-img-box">
          <img 
            id="detailsMainImage"
            src="${escapeHtml(product.image)}" 
            alt="${escapeHtml(product.name)}"
            onerror="this.onerror=null; this.src='${fallbackImg}';"
          />
        </div>
        ${thumbsHtml}
      </div>

      <!-- Information Column -->
      <div class="details-content">
        <div>
          <span class="eyebrow">${escapeHtml(product.category)}</span>
          <h1 style="font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 0.75rem;">
            ${escapeHtml(product.name)}
          </h1>
          <p class="lead-text" style="font-size: 1.05rem;">
            ${escapeHtml(product.shortDescription)}
          </p>
        </div>

        ${priceHtml}

        <div>
          <h4 style="font-size: 1rem; color: var(--color-forest); margin-bottom: 0.5rem; font-family: var(--font-sans); font-weight: 600;">
            Description & Context
          </h4>
          <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 0.95rem;">
            ${escapeHtml(product.description)}
          </p>
        </div>

        ${specsHtml}
        ${directionsHtml}

        <!-- Action CTAs -->
        <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 1rem;">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg" style="flex: 1 1 240px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            Enquire on WhatsApp
          </a>
          <a href="contact.html?product=${encodeURIComponent(product.name)}" class="btn btn-secondary btn-lg">
            Send Form Enquiry
          </a>
        </div>

        <!-- Trust Note -->
        <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.75rem;">
          * Associated with Wealth Craft Era Lifestyle Private Limited. For verified batches, check product packaging label or consult your distributor.
        </p>
      </div>
    </div>
  `;
}

// Global thumb switch helper
window.switchMainImage = function(newSrc, thumbEl) {
  const mainImg = document.getElementById("detailsMainImage");
  if (mainImg) mainImg.src = newSrc;
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
};

function renderNotFound(container) {
  container.innerHTML = `
    <div class="empty-state" style="margin: 3rem 0;">
      <h2>Product Not Found</h2>
      <p style="color: var(--color-text-secondary); margin: 1rem auto 2rem; max-width: 500px;">
        We could not locate the product you requested. It might have been updated or moved in our catalog.
      </p>
      <a href="products.html" class="btn btn-primary">
        Return to Product Catalog
      </a>
    </div>
  `;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
