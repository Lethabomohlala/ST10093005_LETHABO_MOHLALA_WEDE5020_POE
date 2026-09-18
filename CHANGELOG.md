# Changelog

All notable changes to the KY Bakery website are documented here.

# [1.0.0] - 2026-08-14

## Added
- Created the initial website repository.
- Added the homepage design.
- Added the About Us page.
- Added the Products page.
- Added product information and categories.

## Updated
- Updated the homepage design.
- Updated the About Us page design.
- Updated the Products page design.
- Added further website improvements and refinements.

## Fixed
- Resolved merge conflicts between the local and remote repository.
- Removed unnecessary `.DS_Store` file.

## Commits
- Initial Commit
- Delete `.DS_Store`
- Updated homepage design
- Merge remote main and resolve conflicts
- Updated about us page design
- Updated products page design
- Second Commit
- Third Commit

# [2.0.0] - 2026-09-18

## Added

### Home:
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

### About Us:
- Rebranded official store narrative across About Us page to **Kneadforit.** and **Kfi.**
- Created continuous horizontal background image slider (`story-slider-track`) for story visual showcase.
- Added structured Mission and Vision cards (`wavy-card`) flanked by animated text marquee dividers.
- Expanded `css/style.css` with dedicated About Us page component rules.
- Added `@keyframes horizontalSlide` animation for smooth background story image transitions.
- Added aspect-ratio constrained `.wavy-card` styling for Mission & Vision image frame containers.
- Added media queries scaling wavy card text and padding for mobile viewports under 550px.

### Products:
- Created category navigation bar with jump links (`#bento-cakes`, `#cupcakes`, `#cookies`, `#breads`).
- Built product card grid catalog showcasing Bento Cakes, Cupcakes, Cookies, and Artisanal Breads.
- Added pricing, sizing variants, and direct inquiry CTA buttons (`Enquire Now`) for all catalog items.
- Expanded `css/style.css` with dedicated Products catalog styling rules.
- Added smooth scrolling behaviors and anchor scroll-margin offsets for category sections.
- Configured 4-column CSS Grid layout (`.product-grid`) for product item cards.
- Added drop-shadow glow effects on product image wrappers and interactive CTA button hover transitions.

### Enquiries:
- Created interactive baking classes booking hero section (`.book-section`). 
- Implemented accessible HTML5 `<details>` FAQ accordion section for ordering and classes enquiries. 
- Built custom enquiry form featuring full name, contact, dropdown category selection, and message input fields.
- Expanded `css/style.css` with layout rules for the Enquiries page. 
- Applied seamless tiled background patterns to FAQ and enquiry form split sections. 
- Styled native HTML5 details/summary accordion elements with rotation transitions on expansion. 
- Added custom styling and focus highlights for input fields, textareas, drop-down selects, and submit buttons.

## Changed

### Home:
- Improved homepage layout for HTML5 compliance and screen readability.
- Updated main hero section text, replacing legacy call-to-action buttons with refined navigation.
- Site footer went from single banner/text block into a multi-column links layout (Explore, Support, Socials, Visit Us).
- Replaced inline component formatting with central CSS classes (`.header-nav-container`, `.hero-content-card`, `.product-card`, `.site-footer`).
- Implemented CSS scroll-snapping and custom drop-shadow hover effects on product images.

### About Us:
- Improved About Us page structure for improved semantic HTML5 layout.
- Replaced basic static text blocks with styled typography, star icons, and floating card overlays.
- Updated site footer to match the standardized multi-column structure and address details.
- Improved story narrative container positioning using negative margins for seamless header overlay.

### Products:
- Standardized product card layouts to use central `style.css` grid and typography classes.
- Updated header and footer components to match site-wide brand styling.
- Added responsive media queries scaling product card grid from 4 columns to 2 columns (tablet) and single column (mobile).

### Enquiries:
- Integrated section anchor (`#enquiry-form-section`) allowing direct jumps from product card CTAs across the site. 
- Updated header active navigation indicator for the Enquiries page.
- Configured responsive breakpoint rules to stack the split FAQ and enquiry sections vertically on mobile screens. 

## Fixed
- Updated "Enquire Now" CTA button links on product cards (`products.html`) to correctly navigate to the Enquiries form (`enquiries.html#enquiry-form-section`).

## Commits
- `Updates to home page`
- `Replaced image assets`
- `Add style.css stylesheet for styling and responsiveness`
- `Updates to about page layout`
- `Added About Us page CSS rules to style.css`
- `Updates to products page layout and catalog content`
- `Added Products page layout and catalog grid rules`
- `Updates to enquiries page layout, FAQs, and custom booking form`
- `Added layout, accordion, and form CSS rules for Enquiries page`
