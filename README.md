# Snehal Business Hub — Premium Product Catalog Website

> **Associated with Wealth Craft Era Lifestyle Private Limited**  
> *Tagline:* **“Discover Products. Explore Opportunities. Grow Together.”**  
> *Official WhatsApp Helpline:* **+91 76662 19432**

---

## 1. Project Overview

**Snehal Business Hub** is an independent, client-side product-promotion and enquiry platform designed to showcase wellness, personal-care, bio-magnetic lifestyle, and organic agricultural products, while enabling interested individuals to explore promoter business opportunities.

Built with clean semantic **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**, the website runs seamlessly as a static web application on any local web server, GitHub Pages, Netlify, Vercel, or static shared hosting without requiring Node.js, databases, or third-party build pipelines.

---

## 2. Directory Structure

```
snehal-business-hub/
├── index.html                   # Home page (Hero, Categories, Featured products, Benefits, How it works)
├── products.html                # Centralized product catalog with search, category filtering & sorting
├── product-details.html         # Dynamic product detail page driven by ?id= query param
├── business-opportunity.html    # Transparent promoter network guide with statutory disclaimers
├── about.html                   # Brand positioning, mission, vision, and core values
├── contact.html                 # Direct WhatsApp channels and client-side validated enquiry form
├── css/
│   ├── style.css                # Master luxury wellness design system & components
│   ├── responsive.css           # Responsive breakpoints (320px to 1600px+)
│   └── animations.css           # Micro-interactions, scroll reveals & prefers-reduced-motion
├── js/
│   ├── products.js              # Centralized Single Source of Truth for all 23 products & WhatsApp config
│   ├── catalog-controller.js    # Interactive filtering, live search, sorting & card rendering
│   ├── product-details.js       # Dynamic URL parameter parser, specs renderer & related products
│   ├── contact.js               # Indian mobile number validation, form sanity & WhatsApp handoff
│   └── main.js                  # Header sticky effects, mobile drawer, scroll animations & footer year
├── assets/
│   ├── images/
│   │   ├── logo.png             # Official high-resolution brand logo
│   │   ├── products/            # All 31 supplied WhatsApp product images & posters
│   │   └── banners/             # Promotional banners
│   └── icons/                   # Vector icons
└── README.md                    # Project documentation & maintenance manual
```

---

## 3. Brand Identity & Art Direction

- **Forest Green (`#123D2A`)**: Primary brand identity, trust, and header accents.
- **Deep Green (`#082B1D`)**: High-contrast footer, announcement bar, and dark mode containers.
- **Emerald (`#1D6543`)**: Affirmative actions, badges, and verification checkmarks.
- **Antique Gold (`#C9A45C`)**: Editorial serifs, borders, and premium accents.
- **Soft Gold (`#E8D6A6`)**: Secondary gold highlights and floating card borders.
- **Warm Ivory (`#FAF7EF`)**: Editorial textured background.
- **Typography**: `Playfair Display` (Headings) and `Inter` (Body & Navigation).

---

## 4. Centralized Catalog Management (`js/products.js`)

All product information is defined in `js/products.js`. The browser renders all product cards and product detail views dynamically from this single source of truth.

### How to Add a New Product
Open `js/products.js` and add an object to the `products` array:

```javascript
{
  id: "my-new-product",                         // Unique URL-safe slug
  name: "Wealth Craft New Product Name",         // Display title
  category: "Personal Care",                     // Human readable category
  categoryKey: "personal-care",                  // "wellness", "personal-care", "biomagnetic", or "agriculture"
  image: "assets/images/products/my-photo.jpg",  // Relative path to image
  altImages: [],                                 // Optional additional gallery images
  shortDescription: "Short factual summary for catalog cards.",
  description: "Comprehensive description derived from product packaging.",
  mrp: 2500,                                     // Maximum Retail Price (or null)
  dp: 1500,                                      // Distributor Price (or null)
  pv: "0.17",                                    // Point Value
  specifications: [
    "Verified feature 1",
    "Verified feature 2"
  ],
  directions: "Suggested usage directions from product label.",
  featured: true                                 // Set true to showcase on Homepage
}
```

### How to Replace Product Images
1. Save your new image inside `assets/images/products/` (e.g., `aloe-gel.jpg`).
2. Open `js/products.js` and locate the matching product `id`.
3. Update the `image` field:
   ```javascript
   image: "assets/images/products/aloe-gel.jpg",
   ```
4. Save the file. All pages (`products.html`, `product-details.html`, and `index.html`) will automatically reflect the new photo.

---

## 5. WhatsApp Integration Settings

All WhatsApp messaging is managed via the `WHATSAPP_CONFIG` object inside `js/products.js`:

- **Helpline Number:** `+91 76662 19432` (`917666219432`)
- **Pre-filled Product Inquiries:**
  `"Hello Snehal Business Hub, I would like to know more about [PRODUCT NAME] (ID: [ID]). Please share the official product details, price, and availability."`
- **Pre-filled Opportunity Inquiries:**
  `"Hello Snehal Business Hub, I am interested in learning more about the Business Opportunity and promoter process associated with Wealth Craft Era Lifestyle Private Limited. Please share the official terms and details."`
- **Enquiry Form Handoff:**
  Validates Full Name, Indian 10-digit mobile number (`^[6-9]\d{9}$`), optional email, inquiry type, and message, then formats and opens an official WhatsApp message directly.

---

## 6. How to Run Locally

You can run this project with any local development server:

### Option A: Python 3 (Built-in on macOS & Linux)
```bash
cd /Users/aditya/Projects/SnehalBussinessHUB
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option B: VS Code Live Server
Right-click on `index.html` and select **"Open with Live Server"**.

### Option C: Node `npx serve` (Optional)
```bash
npx -y serve .
```

---

## 7. Production Deployment & SEO Checklist

Before pointing your production domain (e.g., `https://snehalbusinesshub.com`):
1. **Update Canonical URLs:** In `<head>` of all 6 `.html` files, replace `https://snehalbusinesshub.example.com/` with your live custom domain.
2. **Robots.txt & Sitemap:** Create a simple `robots.txt` and `sitemap.xml` pointing to your domain.
3. **Static Hosting:** Upload the folder directly to Netlify, Vercel, GitHub Pages, or any Apache/Nginx web server.

---

## 8. Compliance & Ethical Disclaimers

- **Product Disclaimer:** All products shown are manufactured under licensed pharmaceutical/cosmetic/agricultural standards and marketed by Wealth Craft Era Lifestyle Private Limited. Descriptions are factual. Dietary supplements are not intended to diagnose, treat, or cure medical conditions.
- **Business Opportunity Disclaimer:** Snehal Business Hub is an independent platform. No earnings or financial returns are guaranteed. Independent promoter outcomes vary based on individual sales performance, effort, market dynamics, and applicable business terms.
