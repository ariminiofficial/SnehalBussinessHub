/**
 * Snehal Business Hub — Centralized Product Catalog
 * Associated with Wealth Craft Era Lifestyle Private Limited
 * 
 * Single Source of Truth for all product data.
 * All prices and specifications match verified official company posters & product list materials.
 * 
 * HOW TO CUSTOMIZE:
 * 1. To add a new product: Copy any object below, assign a unique URL-safe 'id', set the image path, and fill fields.
 * 2. To change an image: Update the 'image' property with the path relative to the HTML root (e.g., 'assets/images/products/my-image.jpg').
 * 3. To update price: Change 'mrp' and/or 'dp' values (numbers or null).
 * 4. To feature on Homepage: Set 'featured: true'.
 */

const WHATSAPP_CONFIG = {
  phoneNumber: "917666219432",
  displayNumber: "+91 76662 19432",
  businessName: "Snehal Business Hub",
  parentCompany: "Wealth Craft Era Lifestyle Private Limited",
  buildProductEnquiryUrl: function(productName, id) {
    const text = `Hello Snehal Business Hub, I would like to know more about ${productName}${id ? ` (ID: ${id})` : ""}. Please share the official product details, price, and availability.`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`;
  },
  buildGeneralEnquiryUrl: function(type = "General Enquiry") {
    const text = `Hello Snehal Business Hub, I would like to make an enquiry regarding: ${type}. Please share more details.`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`;
  },
  buildOpportunityEnquiryUrl: function() {
    const text = `Hello Snehal Business Hub, I am interested in learning more about the Business Opportunity and promoter process associated with Wealth Craft Era Lifestyle Private Limited. Please share the official terms and details.`;
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`;
  },
  buildFormEnquiryUrl: function(formData) {
    const lines = [
      `*New Enquiry via Snehal Business Hub Website*`,
      `*Name:* ${formData.name}`,
      `*Mobile:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Enquiry Type:* ${formData.enquiryType}`,
      formData.productName ? `*Product of Interest:* ${formData.productName}` : null,
      `*Message:* ${formData.message}`
    ].filter(Boolean);
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
  }
};

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "wellness", name: "Wellness & Ayurveda" },
  { id: "personal-care", name: "Personal Care" },
  { id: "biomagnetic", name: "Bio-Magnetic Lifestyle" },
  { id: "agriculture", name: "Agricultural Products" }
];

const products = [
  {
    id: "wealth-craft-oxymat",
    name: "Wealth Craft Oxymat Bio-Magnetic Mattress",
    category: "Bio-Magnetic Lifestyle",
    categoryKey: "biomagnetic",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.44 (1).jpeg",
    altImages: [
      "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.47.jpeg"
    ],
    shortDescription: "Bio-magnetic technology mattress package designed to support restful sleep, natural vitality, and daily relaxation.",
    description: "The Wealth Craft Oxymat is a premium bamboo bio-magnetic wellness sleep system engineered with high-grade permanent magnetic components (10mm x 1.5mm) integrated into breathable, durable layers. Designed to complement a balanced lifestyle, promote restful relaxation, and deliver peaceful night routines.",
    mrp: 18000,
    dp: 11999,
    pv: "1.0",
    specifications: [
      "Technology: Bio-Magnetic Energy System",
      "Material: Natural Bamboo Fabric, Safe & Breathable",
      "Magnetic Specs: Multi-point calibrated Neodymium/Ferrite elements",
      "Package: Complete Lifetime Wellness System with accessory pads"
    ],
    directions: "Place flat over your everyday mattress and use consistently as part of your regular sleep cycle.",
    featured: true
  },
  {
    id: "treebase-booster-chyawanprash",
    name: "Wealth Craft TreeBase Booster Chyawanprash",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.43.jpeg",
    altImages: [
      "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.45.jpeg",
      "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.47 (2).jpeg"
    ],
    shortDescription: "360° total care classical Ayurvedic formula with over 30 traditional herbs including Shilajit Resin, Ashwagandha, and Saffron.",
    description: "Wealth Craft TreeBase Booster Chyawanprash is an authentic, time-tested Ayurvedic wellness tonic crafted without unnecessary chemical additives. Formulated for all age groups, it combines premium natural ingredients including Ashwagandha, Shilajit Resin, Gokhru, White Musli, Kaunch Beej, Saffron, Honey, Almonds, and Gulkand for holistic vitality.",
    mrp: 6000,
    dp: 3999,
    pv: "0.5",
    specifications: [
      "Form: Classical Herbal Paste (Rasayana)",
      "Key Ingredients: Ashwagandha, Shilajit, Saffron, Honey, Gokhru, White Musli, Giloy, Pippali",
      "Purity: 100% Ayurvedic Formula, No Added Harsh Chemicals",
      "Packaging: Premium Airtight Food-Grade Container"
    ],
    directions: "Take 1 spoonful twice daily with warm milk or warm water, or as advised by an Ayurvedic healthcare practitioner.",
    featured: true
  },
  {
    id: "bio-magnetic-golden-bracelet",
    name: "Wealth Craft Premium Bio-Magnetic Bracelet",
    category: "Bio-Magnetic Lifestyle",
    categoryKey: "biomagnetic",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.45 (1).jpeg",
    altImages: [],
    shortDescription: "Elegant, durable golden link bracelet incorporating bio-magnetic inserts for modern wellness, prestige, and everyday style.",
    description: "Designed for individuals who value refinement, strength, and everyday wellness. Crafted from skin-friendly, hypoallergenic premium alloys with sturdy interlocking links and high-grade calibrated magnetic elements. Combines timeless executive aesthetics with comfortable daily wear.",
    mrp: 6000,
    dp: 3999,
    pv: "0.5",
    specifications: [
      "Finish: Rich Polish Golden Metallic Finish",
      "Composition: Hypoallergenic, skin-friendly alloy",
      "Clasp: Reinforced safety clasp for secure daily wear",
      "Technology: Multi-pole bio-magnetic node embedment"
    ],
    directions: "Wear comfortably on either wrist throughout your working day or leisurely activities.",
    featured: true
  },
  {
    id: "eterna-glow-day-night-cream",
    name: "Wealth Craft Eterna Glow Day & Night Solution",
    category: "Personal Care",
    categoryKey: "personal-care",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.44.jpeg",
    altImages: [],
    shortDescription: "Comprehensive dual skincare ritual: Day Radiance cream and Night Rejuvenation treatment for glowing, nurtured skin.",
    description: "Eterna Glow delivers an advanced two-step skincare regimen. The Day Cream protects moisture barriers and unveils natural luminosity, while the Night Cream works overnight to deeply nourish, soothe, and support skin texture. Free from harsh bleaching agents.",
    mrp: 6000,
    dp: 3999,
    pv: "0.5",
    specifications: [
      "System: Dual Day Cream & Night Cream Combination",
      "Skin Type: Suitable for all skin types",
      "Key Benefits: Hydration, texture renewal, and natural radiance",
      "Packaging: Dual jar set with protective inner seal"
    ],
    directions: "Gently apply Day Cream onto cleansed face each morning; apply Night Cream before retiring in the evening.",
    featured: true
  },
  {
    id: "sea-buckthorn-nutraceutical",
    name: "Wealth Craft Sea Buckthorn Juice (500ml)",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.44 (3).jpeg",
    altImages: [],
    shortDescription: "100% natural, pure nutraceutical botanical juice rich in Omegas 3, 6, 7, and 9 with potent botanical antioxidants.",
    description: "Sourced from high-altitude Himalayan Sea Buckthorn berries, this nutrient-dense botanical juice is an exceptional source of rare Omega-7 fatty acids, natural vitamin C, and bioflavonoids. Formulated for everyday nutritional support and antioxidant protection.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Volume: 500 ml",
      "Key Nutrients: Omega 3, 6, 7 & 9 fatty acids, Vitamin C, Flavonoids",
      "Quality: 100% Safe, Pure & Natural Botanical Formulation",
      "Standards: ISO / GMP Compliant Manufacturing"
    ],
    directions: "Mix 15-30 ml with a glass of water twice daily on an empty stomach, or as directed by your wellness advisor.",
    featured: true
  },
  {
    id: "alo-gel-pure-natural",
    name: "Wealth Craft Alo Gel (125g)",
    category: "Personal Care",
    categoryKey: "personal-care",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.42.jpeg",
    altImages: [],
    shortDescription: "Pure & natural soothing multipurpose Aloe Vera gel for intensive skin hydration, calming, and cooling comfort.",
    description: "Formulated with pure Aloe Vera extracts under FDA-approved Ayurvedic licensing (Lic MH/104110). Lightweight, non-greasy, and quickly absorbed to hydrate parched skin, soothe minor skin irritations, and condition hair naturally.",
    mrp: 500,
    dp: 300,
    pv: "0.04",
    specifications: [
      "Net Weight: 125 g",
      "Mfg Lic No: MH/104110",
      "Properties: Cooling, non-sticky, quick absorbing",
      "Application: Face, body skin, and hair hydration"
    ],
    directions: "Apply generously to cleansed skin or scalp as needed. Massage gently in circular motions until absorbed.",
    featured: true
  },
  {
    id: "sanitary-napkins-negative-ion",
    name: "Wealth Craft Advanced Sanitary Napkins (XXL)",
    category: "Personal Care",
    categoryKey: "personal-care",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.41.jpeg",
    altImages: [],
    shortDescription: "Advanced leak-proof protection pads with Negative Ion (Anion) technology layer for fresh, confident hygiene.",
    description: "Engineered specifically for superior feminine hygiene and comfortable daily protection. Features a breathable cottony surface, ultra-absorbent core layer, leak-proof wings, and an embedded negative-ion strip designed to help maintain freshness and reduce unpleasant odors.",
    mrp: 1999,
    dp: 1200,
    pv: "0.11",
    specifications: [
      "Size: XXL (Extra Long & Extra Wide for overnight security)",
      "Layering: Multi-layer high absorbency with leak locks",
      "Technology: Negative Ion / Anion Freshness Strip",
      "Quantity: Pack of 10 XXL Pads"
    ],
    directions: "Peel protective backing and position comfortably in undergarment. Dispose responsibly after use.",
    featured: false
  },
  {
    id: "biomagnetic-water-pad",
    name: "Wealth Craft Bio-Magnetic Water Pad",
    category: "Bio-Magnetic Lifestyle",
    categoryKey: "biomagnetic",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.44 (2).jpeg",
    altImages: [],
    shortDescription: "Calibrated 8 x 13.5 inch magnetic wrapper designed for bottles and jugs to restructure drinking water.",
    description: "The Wealth Craft Bio-Magnetic Water Pad is crafted to wrap securely around ordinary drinking water bottles or vessels. Embedded with high-strength permanent magnetic nodes (10mm x 1.5mm) inside a dual-layer protective sleeve, it magnetizes and softens water for enhanced daily hydration.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Dimensions: 8 inch × 13.5 inch",
      "Magnets: Precision 10mm x 1.5mm magnetic array",
      "Layers: Premium protective fabric top layer & durable backing",
      "Usage: Flexible wrap fits glass, copper, and stainless steel bottles"
    ],
    directions: "Wrap around your daily water bottle or pitcher. Allow water to rest within the sleeve for 3-4 hours before consumption.",
    featured: false
  },
  {
    id: "amrut-ras-nutraceutical",
    name: "Wealth Craft Amrut Ras Botanical Juice (500ml)",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.48.jpeg",
    altImages: [],
    shortDescription: "Potent traditional herbal elixir manufactured according to WHO-GMP & ISO standards for family vitality.",
    description: "Wealth Craft Amrut Ras is a comprehensive multi-botanical wellness tonic combining revered traditional Ayurvedic extracts. Formulated under stringent ISO & WHO quality parameters to support digestive balance, stamina, and holistic well-being.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Net Volume: 500 ml",
      "Quality Standards: WHO-GMP, ISO 9001 Compliant Facility",
      "Ingredients: Blend of traditional Ayurvedic vitality herbs",
      "Safety: 100% Pure & Free from synthetic colorants"
    ],
    directions: "Dilute 20 ml in lukewarm water once or twice daily, preferably half an hour before meals.",
    featured: false
  },
  {
    id: "ortho-care-oil-tablet",
    name: "Wealth Craft Ortho Care Combo (Oil & Tablets)",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.42 (1).jpeg",
    altImages: [],
    shortDescription: "Dual-action joint comfort system featuring herbal massage oil and Ayurvedic nourishing tablets for active flexibility.",
    description: "An authentic classical Ayurvedic combination engineered for joints, muscles, and stiffness relief. The Ortho Care Oil delivers rapid topical warming relief, while the herbal tablets provide internal botanical nourishment for joint mobility and cartilage support.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Kit Components: Ortho Care Oil + Ortho Care Tablets",
      "Action: Synergistic topical and internal herbal support",
      "Key Benefits: Soothes joint stiffness, eases everyday mobility",
      "Formula: Classical botanical oils and herbal extracts"
    ],
    directions: "Gently massage the oil into target areas twice daily. Take tablets as directed on the label or by your practitioner.",
    featured: true
  },
  {
    id: "liver-care-tablets",
    name: "Wealth Craft Liver Care Tablets",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.43 (1).jpeg",
    altImages: [],
    shortDescription: "Targeted nutraceutical hepatic wellness supplement with Kalmegh, Kutki, and Bhumi Amla to support liver function.",
    description: "Formulated to help maintain optimal hepatic function and digestive balance. Wealth Craft Liver Care combines traditional bitter tonic herbs that support natural bile production, healthy metabolism, and gentle bodily detoxification.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Form: Easy-to-swallow herbal tablets",
      "Type: Nutraceutical & Ayurvedic Dietary Supplement",
      "Action: Supports liver vitality, fat metabolism, and digestion",
      "Standards: ISO 9001:2015 certified production"
    ],
    directions: "Take 1 tablet twice daily with water after meals, or as directed by a healthcare professional.",
    featured: false
  },
  {
    id: "womens-care-capsule",
    name: "Wealth Craft Women's Care Capsules",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.43 (2).jpeg",
    altImages: [],
    shortDescription: "Nurturing Ayurvedic female health support with Shatavari, Lodhra, and Ashoka for hormonal harmony and energy.",
    description: "A specialized classical Ayurvedic formulation developed to support female well-being across every stage of life. Contains time-honored herbs including Shatavari, Ashoka, Lodhra, and Dashmool to foster hormonal equilibrium, comfort during menstrual cycles, and natural stamina.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Form: Vegetarian Capsules",
      "Key Herbs: Shatavari, Ashoka, Lodhra, Dashmool",
      "Action: Promotes hormonal balance and natural female vitality",
      "Purity: 100% Ayurvedic care, gentle on the stomach"
    ],
    directions: "Take 1 capsule twice a day with warm water or milk after food, or as directed by your physician.",
    featured: false
  },
  {
    id: "piles-care-capsule",
    name: "Wealth Craft Piles Care Capsules",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.39 (1).jpeg",
    altImages: [],
    shortDescription: "Gentle herbal digestive and anorectal comfort supplement designed for healthy bowel movements and soothing relief.",
    description: "Developed to alleviate anorectal discomfort and support comfortable digestion. Wealth Craft Piles Capsules use traditional cooling, anti-inflammatory, and mild laxative botanicals to help soothe internal tissues, regulate stool consistency, and ease strain.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Form: Herbal Capsules",
      "Indication: Supports digestive comfort and healthy bowel regularity",
      "Purity: 100% Herbal Extracts, non-habit forming",
      "Safety: No synthetic stimulants or harsh chemicals"
    ],
    directions: "Take 1-2 capsules twice daily with warm water or as recommended by an Ayurvedic physician.",
    featured: false
  },
  {
    id: "herin-capsules-vitality",
    name: "Wealth Craft Herin Vitality Capsules",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.41 (1).jpeg",
    altImages: [],
    shortDescription: "100% natural herbal daily rejuvenation formula to combat physical fatigue, stress, and promote lasting stamina.",
    description: "An invigorating blend of adaptogenic herbs formulated to help active adults resist physical and mental fatigue. Promotes sustained energy levels, resilience against routine stress, and overall endurance without nervous jitteriness.",
    mrp: 2250,
    dp: 1200,
    pv: "0.17",
    specifications: [
      "Form: Natural Herbal Capsules",
      "Benefits: Supports endurance, daily stamina, and stress adaptation",
      "Quality: Safe for long-term use, zero chemical side effects",
      "Certifications: ISO 9001:2015 Certified Manufacturing"
    ],
    directions: "Take 1 capsule daily after breakfast or dinner with milk or water.",
    featured: false
  },
  {
    id: "fit-pro-protein-powder",
    name: "Wealth Craft Fit Pro Nutritional Powder",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.40 (1).jpeg",
    altImages: [],
    shortDescription: "Fortified family nutritional powder with essential protein, minerals, and vitamins for daily strength and growth.",
    description: "A nutrient-rich powder designed to bridge daily dietary gaps. Contains wholesome proteins, vitamins, and minerals to aid muscle recovery, maintain stamina, and support general strength for active family members.",
    mrp: 2500,
    dp: 1500,
    pv: "0.17",
    specifications: [
      "Form: Balanced Nutritional Powder",
      "Target: Active adults and growing family members",
      "Profile: Enriched with essential amino acids, iron, and calcium",
      "Flavour: Palatable, easily miscible in milk or water"
    ],
    directions: "Add 1-2 scoops (approx 25g) to a glass of warm or chilled milk. Stir well and consume daily.",
    featured: false
  },
  {
    id: "nano-gel-pain-relief",
    name: "Wealth Craft Nano Gel",
    category: "Wellness & Ayurveda",
    categoryKey: "wellness",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.41 (3).jpeg",
    altImages: [],
    shortDescription: "Fast-acting topical nano-emulsion gel for rapid muscular relief, sprains, and back discomfort.",
    description: "Manufactured by Grisons Eco Organics under strict MIDC Satara pharmaceutical standards, Wealth Craft Nano Gel utilizes advanced nano-penetration technology for prompt, localized cooling and soothing of aching muscles, stiffness, and joint fatigue.",
    mrp: 950,
    dp: 600,
    pv: "0.08",
    specifications: [
      "Technology: Micro/Nano Emulsion Fast Absorbing Matrix",
      "Manufacturer: Grisons Eco Organics (MIDC Satara)",
      "Texture: Non-greasy, non-staining clear gel",
      "Application: Quick relief for backache, neck strain, and sprains"
    ],
    directions: "Gently apply a thin layer onto the affected area. Do not massage vigorously. Repeat 2-3 times daily as needed.",
    featured: false
  },
  {
    id: "agri-wealth-all-in-one",
    name: "Agri Wealth All-in-One Plant Tonic",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.40 (2).jpeg",
    altImages: [],
    shortDescription: "100% organic crop booster naturally derived from vegetables and natural resources for balanced soil and crop vigor.",
    description: "A high-potency organic plant booster formulated exclusively from naturally sourced botanical and vegetable inputs. Enhances nutrient uptake, stimulates root elongation, and fortifies crops against adverse weather conditions.",
    mrp: 1500,
    dp: 600,
    pv: "0.06",
    specifications: [
      "Origin: 100% Naturally Derived from Vegetables & Natural Resources",
      "Type: Multi-action organic crop nutrition enhancer",
      "Compatibility: Compatible with conventional agricultural sprays",
      "Certifications: ISO 9001:2015 Organic Certified standard"
    ],
    directions: "Dilute 2-3 ml per litre of water and spray thoroughly on crop foliage during vegetative and flowering phases.",
    featured: true
  },
  {
    id: "agri-wealth-bio-npk",
    name: "Agri Wealth Bio NPK Microbial Inoculant",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.39.jpeg",
    altImages: [],
    shortDescription: "Certified 100% organic consortium of Nitrogen-fixing, Phosphate-solubilizing, and Potash-mobilizing bio-fertilizers.",
    description: "Agri Wealth Bio NPK provides living beneficial bacterial cultures that fix atmospheric nitrogen, solubilize insoluble soil phosphorus, and mobilize potash for plant uptake. Rejuvenates soil microbial activity and optimizes harvest quality.",
    mrp: 2000,
    dp: 800,
    pv: "0.08",
    specifications: [
      "Composition: Organic microbial consortium (N-P-K bio-fertilizers)",
      "Certification: 100% Certified Organic Standard",
      "Benefits: Enhances root depth, optimizes fertilizer efficiency",
      "Eco-profile: Safe for earthworms, groundwater, and beneficial insects"
    ],
    directions: "Apply via drip irrigation (1-2 litres per acre) or drench near the root zone during early crop stages.",
    featured: false
  },
  {
    id: "agri-wealth-bhumi-star",
    name: "Agri Wealth Bhumi Star Soil Conditioner",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.40.jpeg",
    altImages: [],
    shortDescription: "Organic soil conditioner enriched with humic and fulvic substances for porous, fertile, and nutrient-rich soil.",
    description: "Agri Wealth Bhumi Star is an organic soil amendment created to improve soil physical structure, water retention capacity, and cation exchange. Replaces depleted organic matter and creates an ideal rhizosphere for vigorous crop establishment.",
    mrp: 1500,
    dp: 600,
    pv: "0.06",
    specifications: [
      "Origin: Natural Organic Concentrates & Soil Metabolites",
      "Action: Improves soil aeration, water retention, and microbial ecology",
      "Standards: ISO 9001:2015 Quality Tested",
      "Suitability: Suitable for horticulture, field crops, and greenhouse farming"
    ],
    directions: "Broadcast with farmyard manure or apply through irrigation system prior to sowing or transplanting.",
    featured: false
  },
  {
    id: "agri-wealth-fungi-gold",
    name: "Agri Wealth Fungi Gold Bio-Fungicide",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.38.jpeg",
    altImages: [],
    shortDescription: "100% organic botanical protective shield derived from plants to help crops resist fungal and bacterial pathogens.",
    description: "Derived from natural botanical extracts and vegetable metabolites, Agri Wealth Fungi Gold provides broad-spectrum prophylactic protection against common fungal and bacterial crop conditions such as blight, rot, and powdery mildew without chemical residues.",
    mrp: 1500,
    dp: 600,
    pv: "0.06",
    specifications: [
      "Base: Botanical extracts & natural plant metabolites",
      "Action: Prophylactic fungal disease prevention",
      "Safety: Non-toxic to humans, bees, and livestock; zero pre-harvest interval",
      "Certification: 100% Organic certified"
    ],
    directions: "Dissolve 2 ml per litre of clean water. Spray thoroughly on leaves at the first sign of weather vulnerability.",
    featured: false
  },
  {
    id: "agri-wealth-super-gold",
    name: "Agri Wealth Super Gold Growth Gel",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.38 (1).jpeg",
    altImages: [],
    shortDescription: "Premium 100% organic gel formulation for enhanced flowering, fruit retention, and uniform crop sizing.",
    description: "A premium concentrated growth activator gel formulated with bio-active plant peptides, amino acids, and micronutrients. Stimulates abundant flowering, minimizes fruit and flower drop, and supports uniform size and pigmentation at harvest.",
    mrp: 2300,
    dp: 900,
    pv: "0.09",
    specifications: [
      "Form: Concentrated Organic Gel Matrix",
      "Target: Flowering, budding, and fruit maturation stages",
      "Standards: ISO 9001:2015 Premium Quality Certified",
      "Benefits: Reduces blossom drop, increases harvest yield"
    ],
    directions: "Dissolve 1.5 to 2.5 ml per litre of water and spray during pre-flowering and fruit-set stages.",
    featured: false
  },
  {
    id: "agri-wealth-neem-strong",
    name: "Agri Wealth Neem Strong Bio-Pest Repellent",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.41 (2).jpeg",
    altImages: [],
    shortDescription: "Cold-pressed pure Azadirachtin neem extract for natural organic pest deterrence and insect management.",
    description: "Crafted from rich Azadirachta Indica kernels, Agri Wealth Neem Strong acts as an effective anti-feedant, repellent, and insect growth regulator. Helps deter sucking pests, caterpillars, and aphids without creating chemical resistance.",
    mrp: 2300,
    dp: 900,
    pv: "0.09",
    specifications: [
      "Source: High-potency Azadirachtin cold-pressed neem formulation",
      "Action: Anti-feedant, ovicidal, and repellent against farm pests",
      "Safety: Safe for pollinators, harmless to soil biology",
      "Standard: ISO Certified organic farm product"
    ],
    directions: "Mix 2 to 3 ml per litre of water with a mild spreader. Apply during early morning or evening hours.",
    featured: false
  },
  {
    id: "agri-wealth-agri-100",
    name: "Agri Wealth Agri 100 Activator & Spreader",
    category: "Agricultural Products",
    categoryKey: "agriculture",
    image: "assets/images/products/WhatsApp Image 2026-10-20 at 12.06.38 (2).jpeg",
    altImages: [],
    shortDescription: "All-weather organic non-ionic silicon activator, wetting agent, and penetrating enhancer for agricultural sprays.",
    description: "Agri Wealth Agri 100 breaks the surface tension of water droplets on waxy plant leaves, ensuring uniform spread, fast absorption, and rain-fast adherence of foliar sprays, fertilizers, and bio-pesticides. Greatly maximizes spray efficiency.",
    mrp: 1500,
    dp: 600,
    pv: "0.06",
    specifications: [
      "Type: Non-ionic wetting agent, spreader, and penetration booster",
      "Activity: 100% Organic compatible surfactant",
      "Dosage: Low dosage requirement (0.5 ml per litre)",
      "Function: Rain-fastness and surface coverage enhancement"
    ],
    directions: "Add 0.5 ml per litre of spray solution as the final ingredient in your tank mix. Stir gently before spraying.",
    featured: false
  }
];

// Helper functions for catalog queries
function getAllProducts() {
  return products;
}

function getFeaturedProducts(limit = 6) {
  const featured = products.filter(p => p.featured);
  return featured.slice(0, limit);
}

function getProductById(id) {
  if (!id) return null;
  const cleanId = String(id).trim().toLowerCase();
  return products.find(p => p.id.toLowerCase() === cleanId) || null;
}

function getProductsByCategory(categoryKey) {
  if (!categoryKey || categoryKey === "all") return products;
  return products.filter(p => p.categoryKey === categoryKey);
}

function getRelatedProducts(productId, limit = 3) {
  const current = getProductById(productId);
  if (!current) return [];
  return products
    .filter(p => p.id !== current.id && p.categoryKey === current.categoryKey)
    .slice(0, limit);
}

// Fallback image helper
function getFallbackImage(productName) {
  // SVG Data URL for graceful fallback
  const initials = (productName || "SBH").substring(0, 2).toUpperCase();
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <rect width="600" height="600" fill="#FAF7EF"/>
      <rect x="20" y="20" width="560" height="560" fill="none" stroke="#E5E0D5" stroke-width="2"/>
      <circle cx="300" cy="270" r="100" fill="#123D2A" opacity="0.08"/>
      <circle cx="300" cy="270" r="70" fill="none" stroke="#C9A45C" stroke-width="2"/>
      <text x="300" y="285" font-family="Georgia, serif" font-size="42" fill="#123D2A" font-weight="bold" text-anchor="middle">${initials}</text>
      <text x="300" y="420" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" fill="#68736A" text-anchor="middle">Official Product Visual</text>
      <text x="300" y="450" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#C9A45C" text-anchor="middle">Snehal Business Hub</text>
    </svg>
  `);
}

// Export for module systems or attach to window
if (typeof window !== "undefined") {
  window.productsCatalog = {
    config: WHATSAPP_CONFIG,
    categories: CATEGORIES,
    products: products,
    getAll: getAllProducts,
    getFeatured: getFeaturedProducts,
    getById: getProductById,
    getByCategory: getProductsByCategory,
    getRelated: getRelatedProducts,
    getFallbackImage: getFallbackImage
  };
}
