/**
 * Snehal Business Hub — Global Master Script (main.js)
 * Handles Announcement Bar, Mobile Menu Drawer, Sticky Navigation,
 * Scroll Reveal Animations, Dynamic Footer Year, and Global WhatsApp Triggers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initAnnouncementBar();
  initStickyHeader();
  initMobileNavigation();
  initScrollAnimations();
  initBackToTop();
  updateFooterYear();
  initGlobalWhatsAppLinks();
});

/* ---------------- Announcement Bar Dismissal ---------------- */
function initAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  const dismissBtn = document.getElementById("dismissAnnouncement");
  if (!bar || !dismissBtn) return;

  const isDismissed = sessionStorage.getItem("sbh_announcement_dismissed");
  if (isDismissed === "true") {
    bar.style.display = "none";
  }

  dismissBtn.addEventListener("click", () => {
    bar.style.display = "none";
    sessionStorage.setItem("sbh_announcement_dismissed", "true");
  });
}

/* ---------------- Sticky Header with Elevation Shadow ---------------- */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* ---------------- Mobile Menu Drawer & Keyboard Trap ---------------- */
function initMobileNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const closeBtn = document.getElementById("closeMobileNav");

  if (!menuToggle || !mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add("open");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) closeDrawer();
    else openDrawer();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  // Close when clicking outside panel
  mobileDrawer.addEventListener("click", (e) => {
    if (e.target === mobileDrawer) {
      closeDrawer();
    }
  });

  // Close with Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Auto-close drawer when clicking on any nav link inside drawer
  const drawerLinks = mobileDrawer.querySelectorAll(".mobile-nav-links a");
  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/* ---------------- Intersection Observer Scroll Animations ---------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");
  if (!animatedElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Graceful fallback for older browsers
    animatedElements.forEach(el => el.classList.add("is-revealed"));
  }
}

/* ---------------- Back to Top Button ---------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------- Current Year in Footer ---------------- */
function updateFooterYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ---------------- Reusable WhatsApp Link Generator ---------------- */
function initGlobalWhatsAppLinks() {
  // Any anchor with data-wa-type will open corresponding pre-filled chat
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-wa-action]");
    if (!trigger) return;

    const action = trigger.getAttribute("data-wa-action");
    if (window.productsCatalog && window.productsCatalog.config) {
      const cfg = window.productsCatalog.config;
      let url = "";

      if (action === "general") {
        url = cfg.buildGeneralEnquiryUrl();
      } else if (action === "opportunity") {
        url = cfg.buildOpportunityEnquiryUrl();
      } else if (action === "product") {
        const prodName = trigger.getAttribute("data-product-name") || "General Products";
        const prodId = trigger.getAttribute("data-product-id") || "";
        url = cfg.buildProductEnquiryUrl(prodName, prodId);
      }

      if (url) {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  });
}
