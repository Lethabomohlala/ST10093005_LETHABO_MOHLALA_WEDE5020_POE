# Changelog

All notable changes to the KY Bakery website are documented here.

## [1.0.0] - 2026-08-14

### Added
- Created the initial website repository.
- Added the homepage design.
- Added the About Us page.
- Added the Products page.
- Added product information and categories.

### Updated
- Updated the homepage design.
- Updated the About Us page design.
- Updated the Products page design.
- Added further website improvements and refinements.

### Fixed
- Resolved merge conflicts between the local and remote repository.
- Removed unnecessary `.DS_Store` file.

### Commits
- `Initial Commit`
- `Delete .DS_Store`
- `Updated homepage design`
- `Merge remote main and resolve conflicts`
- `Updated about us page design`
- `Updated products page design`
- `Second Commit`
- `Third Commit`

## [2.0.0] - 2026-09-18

### Added

#### Home:
- Rebranded official store identity across homepage to **Kneadforit.**
- Integrated Google Fonts (`Boldonse`, `Merriweather`, and `Poppins`) and external stylesheet (`css/style.css`).
- Added new visual image assets including bakery interior, storefront illustration, and updated product shots.
- Added responsive `<picture>` tags with a `.webp` fallback.
- Added decorative SVG scalloped header and animated infinite marquee strip.
- Created "Neighborhood Essentials" product scroll grid using `<article>` cards.
- Created `css/style.css` for central site styling, typography, and responsive layout management.
- Customized CSS design variables for brand color scheme and Google Fonts integration.
- Added keyframe animations (`marquee-infinite`) for continuous banner scrolling.
- Added CSS Grid layout for multi-column footer navigation and contact details.
- Added media queries to ensure full mobile and tablet responsiveness across break points.

#### About Us:
- Rebranded official store narrative across About Us page to **Kneadforit.** and **Kfi.**
- Created continuous horizontal background image slider (`story-slider-track`) for story visual showcase.
- Added structured Mission and Vision cards (`wavy-card`) flanked by animated text marquee dividers.
- Expanded `css/style.css` with dedicated About Us page component rules.
- Added `@keyframes horizontalSlide` animation for smooth background story image transitions.
- Added aspect-ratio constrained `.wavy-card` styling for Mission & Vision image frame containers.
- Added media queries scaling wavy card text and padding for mobile viewports under 550px.

#### Products:
- Created category navigation bar with jump links (`#bento-cakes`, `#cupcakes`, `#cookies`, `#breads`).
- Built product card grid catalog showcasing Bento Cakes, Cupcakes, Cookies, and Artisanal Breads.
- Added pricing, sizing variants, and direct inquiry CTA buttons (`Enquire Now`) for all catalog items.
- Expanded `css/style.css` with dedicated Products catalog styling rules.
- Added smooth scrolling behaviors and anchor scroll-margin offsets for category sections.
- Configured 4-column CSS Grid layout (`.product-grid`) for product item cards.
- Added drop-shadow glow effects on product image wrappers and interactive CTA button hover transitions.

#### Enquiries:
- Created interactive baking classes booking hero section (`.book-section`). 
- Implemented accessible HTML5 `<details>` FAQ accordion section for ordering and classes enquiries. 
- Built custom enquiry form featuring full name, contact, dropdown category selection, and message input fields.
- Expanded `css/style.css` with layout rules for the Enquiries page. 
- Applied seamless tiled background patterns to FAQ and enquiry form split sections. 
- Styled native HTML5 details/summary accordion elements with rotation transitions on expansion. 
- Added custom styling and focus highlights for input fields, textareas, drop-down selects, and submit buttons.

#### Contact:
- Created Contact Us page (`contact.html`) featuring store operating hours, direct contact info, and parking details.
- Embedded Google Maps iframe pointing to the Hazelwood, Pretoria storefront location.
- Added Contact page CSS layout rules in `css/style.css`, featuring a peach background theme, lemon chiffon map borders, and styled detail headers.

### Changed

#### Home:
- Improved homepage layout for HTML5 compliance and screen readability.
- Updated main hero section text, replacing legacy call-to-action buttons with refined navigation.
- Site footer went from single banner/text block into a multi-column links layout (Explore, Support, Socials, Visit Us).
- Replaced inline component formatting with central CSS classes (`.header-nav-container`, `.hero-content-card`, `.product-card`, `.site-footer`).
- Implemented CSS scroll-snapping and custom drop-shadow hover effects on product images.

#### About Us:
- Improved About Us page structure for improved semantic HTML5 layout.
- Replaced basic static text blocks with styled typography, star icons, and floating card overlays.
- Updated site footer to match the standardized multi-column structure and address details.
- Improved story narrative container positioning using negative margins for seamless header overlay.

#### Products:
- Standardized product card layouts to use central `style.css` grid and typography classes.
- Updated header and footer components to match site-wide brand styling.
- Added responsive media queries scaling product card grid from 4 columns to 2 columns (tablet) and single column (mobile).

#### Enquiries:
- Integrated section anchor (`#enquiry-form-section`) allowing direct jumps from product card CTAs across the site. 
- Updated header active navigation indicator for the Enquiries page.
- Configured responsive breakpoint rules to stack the split FAQ and enquiry sections vertically on mobile screens.

#### Contact:
- Set "Contact Us" navigation link as active in header navigation bar.
- Replaced contact layout with a responsive two-column flexbox design.
- Added responsive CSS media queries to stack contact details and the map vertically on tablet and mobile viewports.

### Fixed
- Updated "Enquire Now" CTA button links on product cards (`products.html`) to correctly navigate to the Enquiries form (`enquiries.html#enquiry-form-section`).
- Fixed footer navigation links for "Custom Enquiries", "Order FAQs", and "How to Order" across all HTML pages to correctly point to `enquiries.html#enquiry-form-section`.

### Commits
- `Updates to home page`
- `Replaced image assets`
- `Add style.css stylesheet for styling and responsiveness`
- `Updates to about page layout`
- `Added About Us page CSS rules to style.css`
- `Updates to products page layout and catalog content`
- `Added Products page layout and catalog grid rules`
- `Updates to enquiries page layout, FAQs, and custom booking form`
- `Added layout, accordion, and form CSS rules for Enquiries page`
- `Updates to Contact page structure, location details, and embedded map`
- `Added layout and responsive styles for contact page`

## [3.0.0] - 2026-11-02

### Added
- Added `script.js`.
- Added page-specific `<title>` tags, `<meta name="description">`, and `<meta name="keywords">` for all 5 HTML pages.
- Added root robots.txt configuration file directing crawlers and referencing the sitemap.
- Added root sitemap.xml file listing canonical URLs, update frequencies, and page priorities.

#### Home:
- Added dynamic product rendering for "Neighborhood Essentials" using semantic `<picture>` elements.
- Added an interactive product lightbox modal supporting quick view inspection, backdrop clicks, and Escape key dismissal.
- Added scroll-triggered entrance animations via `IntersectionObserver`.

#### About:
- Added an interactive milestone tabs section allowing users to explore the bakery's history (2022–2026).

#### Products:
- Added a live search input toolbar allowing users to instantly search products by keyword or description.
- Added interactive category filter buttons (All Treats, Bento Cakes, Cupcakes, Cookies, Breads) powered by JavaScript filtering.
- Added a custom 500px × 600px vertical lightbox modal displaying the product image and name.

#### Enquiries:
- Added comprehensive client-side JavaScript validation for all enquiry form fields (Name, Phone number format, Email format, selection requirements, and minimum message length).
- Added inline validation error notice containers and dynamic error styling.
- Added an AJAX form submission simulation that compiles user details and generates dynamic cost/availability responses based on the selected enquiry type.
- Added an interactive confirmation modal displaying personalized success messages, compiled recipient email details, and pricing/availability feedback.

#### Contact:
- Added comprehensive client-side JavaScript form validation with Regex patterns for phone number and email inputs, alongside character length validation for messages.
- Added inline error message containers and dynamic input border feedback for invalid entries.
- Added an AJAX form submission flow that compiles user data and triggers an interactive confirmation modal routing messages to kneadforitenquires@gmail.com.

#### CSS:
- Added design variables (`--color-peach`, `--color-espresso`, `--color-cotton-candy`, `--color-lemon-chiffon`) to establish site-wide theme consistency.
- Added custom keyframe animation rules (`@keyframes horizontalSlide`, `@keyframes marquee-scroll`, and `@keyframes marquee-infinite`) for smooth UI transitions and scrolling banners.
- Added reusable `.animate-on-scroll` opacity and translate transitions managed via Intersection Observer.
- Added custom modal overlay styling (`.modal-overlay`, `.modal-content`) for product quick-view lightboxes and form submission confirmations across all pages.
- Added custom opacity control (`opacity: 0.75`) to `.contact-hero img` for optimal text readability over background imagery.
- Added centered text alignment (`text-align: center; width: 100%;`) to the "Get In Touch!" heading in `.contact-info-map-column`.

### Updated
- Verified single `<h1>` tag execution per page and validated `<h2>/<h3>` heading hierarchies.
- Validated image alt text and WebP `<picture>` container implementations across all main sections.

#### Home:
- Updated the html link for the homepage to `index.html`.
- Updated stylesheet linking and repositioned `script.js` to the top of the `<body>` element to ensure proper DOM loading.

#### About:
- Updated stylesheet reference to `style.css`.
- Migrated inline milestone tab styles into `style.css` for clean separation of concerns.

#### Products:
- Updated the static product grid to render dynamically from a structured `allProductsCatalog` array in `script.js`.
- Updated event handling to safely attach click listeners programmatically, resolving string escaping issues.
- Updated `script.js` with an index-tracking controller to support next/previous item browsing and thumbnail selection across the product catalog.
- Added event listeners for keyboard arrow keys `(ArrowLeft, ArrowRight)` and the Escape key to allow seamless keyboard navigation and closing of the lightbox gallery.

#### Enquiries:
- Updated the enquiry form HTML element with the novalidate attribute to support custom JavaScript validation handlers.
- Updated layout sections to include the animate-on-scroll class, ensuring the enquiries page features the same smooth slide-up entrance animation as the rest of the website.

#### Contact:
- Redesigned `contact.html` and layout CSS into a responsive two-column grid featuring the contact form on the left and structured contact details with an embedded Google Map on the right.
- Updated the contact hero section with the bakery background image `(bakery.png)`, negative top margin alignment, absolute positioning over text content, and custom opacity styling.
- Centered the "Get In Touch!" section heading and formatted the physical address, phone, email, and trading hours into a clean 3-column info grid row.
- Added `animate-on-scroll` entrance animation classes to match site-wide slide-up standards.

#### CSS:
- Updated global typography styling to integrate Google Fonts (`Boldonse`, `Merriweather`, and `Poppins`) across all headings, body copy, and button labels.
- Updated header layout and navigation links with interactive hover states and active page indicator highlights.
- Updated scalloped SVG divider SVG styling (`.scallop-banner`) for seamless header-to-hero visual transitions across all pages.
- Updated product cards (`.product-card`, `.interactive-card`) into flex/grid structures with card elevation transitions on hover.
- Updated `.contact-hero` into a fixed-height relative container (`height: 32rem`) featuring absolute-positioned background media and z-index layered text overlay.
- Updated `.contact-layout-grid` into a responsive 2-column grid (`1fr 1.25fr`) with a 4rem gap separating the form from store details and map views.
- Updated `.contact-info-grid-row` into a responsive 3-column layout row for physical address, phone, email, trading hours, and parking information.
- Updated multi-column site footer (`.site-footer`) across all pages with responsive grid columns and storefront illustration styling.

### Fixed

#### Home:
- Fixed broken product and header logo image display issues caused by relative path configurations.
- Fixed layout collapse by correcting stylesheet path references.

#### Products:
- Fixed broken image displays caused by incorrect relative folder references.
- Fixed Quick View modal triggers not opening by replacing inline `onclick` string attributes with robust event listeners.
- Replaced the standard information modal on `products.html` with an immersive, multi-view carousel lightbox featuring navigational arrows and a dynamic bottom thumbnail strip.

#### Enquiries:
- Fixed missing interactive feedback by replacing default form behavior with structured error handling and success modals.

#### CSS:
- Fixed top margin alignment on `.contact-hero` (`margin-top: -7.5rem`) to eliminate layout gaps and pull background images under the scalloped header banner.
- Fixed hero section text vertical positioning using padding adjustments to accommodate navigation bar overlays without content clipping.
- Fixed responsive media queries (`@media screen and (max-width: 65em)` and `max-width: 38em`) to ensure forms, product grids, and info rows stack gracefully on mobile and tablet viewports.
- Fixed form element focus and validation error state borders (`var(--color-crushed-berry)`) across `enquiries.html` and `contact.html`.
- Fixed side padding for mobile viewports' product catalogue titles and search fields.

### Commits
- `Updated the home.html to index.html and added the javascript file.`
- `Added interactive milestone tabs.`
- `Implemented dynamic catalog, live search, filters, and 500 by 600px lightbox modal.`
- `Added form validation, AJAX submission simulation, and confirmation modal.`
- `Redesigned contact page layout, add form validation, and confirmation modal.`
- `Updated core stylesheet and component styles.`
- `Added robots.txt for search engine crawler instructions.`
- `Added sitemap.xml for search engine page indexing.`
- `Fixed horizontal padding to products category wrapper on mobile viewports.`