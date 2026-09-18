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


## Commits
- `Updates to home page`
- `Replaced image assets`
- `Add style.css stylesheet for styling and responsiveness`
- `Updates to about page layout`
- `Added About Us page CSS rules to style.css`