/* Kneadforit | Master Script (script.js) */

/* HOMEPAGE */
// DYNAMIC PRODUCT DATA FOR HOME PAGE
const featuredProducts = [
    {
        id: "vanilla-berry-cloud",
        category: "Bento Cake",
        name: "Vanilla Berry Cloud",
        description: "Fluffy vanilla sponge features sweet strawberry jam and whipped cream for a classic nostalgic single-serve bento treat.",
        price: "Small (10cm) R 180 | Medium (18cm) R 450",
        imagePng: "images/stawberry.png",
        imageWebp: "images/strawberry.webp",
        link: "products.html#bento-cakes"
    },
    {
        id: "ferrero-rocher",
        category: "Cupcake",
        name: "Ferrero Rocher",
        description: "Decadent chocolate cupcake features velvety Rocher frosting, finished with a whole Ferrero and crunchy hazelnut pieces.",
        price: "6 Pack: R 220 (Single Flavour) | R 250 (Assorted)",
        imagePng: "images/ferrero.png",
        imageWebp: "images/ferrero.webp",
        link: "products.html#cupcakes"
    },
    {
        id: "funfetti-sandwich",
        category: "Cookie",
        name: "Funfetti Sandwich",
        description: "Rich, chewy double-chocolate cookies layered with fluffy buttercream, topped with rainbow sprinkles for a colourful bite.",
        price: "6 Pack: R 200 (Single Flavour) | R 220 (Assorted)",
        imagePng: "images/sandwich.png",
        imageWebp: "images/sandwich2.webp",
        link: "products.html#cookies"
    },
    {
        id: "seeded-sourdough",
        category: "Bread",
        name: "Seeded Sourdough",
        description: "Small batch loaf slow-fermented for a crisp, golden crust and an airy, chewy interior with a distinctive, tangy sourdough finish with sesame seeds.",
        price: "4 Loaves: R 240 | Assorted 6 Loaves: R 280",
        imagePng: "images/sourdough.png",
        imageWebp: "images/sourdough.webp",
        link: "products.html#breads"
    }
];

// DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    initFeaturedProducts();
    initScrollAnimations();
    initModalEvents();
});

// DYNAMIC DOM MANIPULATION: RENDER PRODUCTS
function initFeaturedProducts() {
    const container = document.getElementById("featured-products-container");
    if (!container) return;

    container.innerHTML = ""; // Clear static markup

    featuredProducts.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card interactive-card";
        card.setAttribute("data-id", product.id);

        card.innerHTML = `
            <div class="product-image-wrapper" title="Click to inspect ${product.name}">
                <img src="${product.imagePng}" alt="${product.name}">
            </div>
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="card-btn-group">
                <button class="view-btn preview-btn" data-id="${product.id}">Quick View >⩊<</button>
                <a href="${product.link}" class="view-btn">More ${product.category}s ⭑.ᐟ</a>
            </div>
        `;

        // Click on image opens Lightbox Modal
        const imgWrapper = card.querySelector(".product-image-wrapper");
        imgWrapper.addEventListener("click", () => openModal(product));

        // Click "Quick View" button opens Modal
        const previewBtn = card.querySelector(".preview-btn");
        previewBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            openModal(product);
        });

        container.appendChild(card);
    });
}

// LIGHTBOX & MODAL INTERACTIVITY
function openModal(product) {
    const modal = document.getElementById("product-modal");
    if (!modal) return;

    document.getElementById("modal-img").src = product.imagePng;
    document.getElementById("modal-img").alt = product.name;
    document.getElementById("modal-category").textContent = product.category;
    document.getElementById("modal-title").textContent = product.name;
    document.getElementById("modal-description").textContent = product.description;
    document.getElementById("modal-price").textContent = product.price;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal() {
    const modal = document.getElementById("product-modal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore scrolling
}

function initModalEvents() {
    const closeBtn = document.getElementById("modal-close-btn");
    const modal = document.getElementById("product-modal");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (modal) {
        // Close when clicking overlay outside content
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key press
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
}

// ANIMATIONS & TRANSITIONS (INTERSECTION OBSERVER)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
}

/* ABOUT PAGE */
// INTERACTIVE TABS & GALLERY LIGHTBOX
document.addEventListener("DOMContentLoaded", () => {
    // Milestone Tabs Logic
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remove active class from all buttons
                tabButtons.forEach(b => {
                    b.classList.remove("active");
                    b.style.background = "var(--color-white)";
                    b.style.fontWeight = "normal";
                });
                // Hide all panels
                tabPanels.forEach(p => p.style.display = "none");

                // Activate clicked button and panel
                btn.classList.add("active");
                btn.style.background = "var(--color-blush-pink)";
                btn.style.fontWeight = "500";

                const targetTab = document.getElementById(btn.getAttribute("data-tab"));
                if (targetTab) targetTab.style.display = "block";
            });
        });
    }
});

/* PRODUCTS PAGE */
// CATALOG, SEARCH & FILTER
const allProductsCatalog = [
    // Bento Cakes
    { id: "vanilla-berry-cloud", category: "Bento Cake", name: "Vanilla Berry Cloud", description: "Fluffy vanilla sponge layered with house-made strawberry jam and light whipped cream.", price: "Small: R 180 | Medium: R 450", imagePng: "images/stawberry2.png", imageWebp: "images/stawberry2.webp" },
    { id: "midnight-cocoa-truffle", category: "Bento Cake", name: "Midnight Cocoa Truffle", description: "Three layers of moist dark cocoa sponge frosted with silky chocolate buttercream.", price: "Medium (18cm) | R 600", imagePng: "images/darkchoco.png", imageWebp: "images/darkchoco.webp" },
    { id: "mocha-swirl-espresso", category: "Bento Cake", name: "Mocha Swirl Espresso", description: "Marble swirl of chocolate and vanilla espresso sponge with chocolate ganache.", price: "Small: R 200 | Medium: R 520", imagePng: "images/marble.png", imageWebp: "images/marble.webp" },
    { id: "carnival-sunset", category: "Bento Cake", name: "Carnival Sunset", description: "Vibrant pink and golden sponge layers with whipped cream and rainbow sprinkles.", price: "Small: R 190 | Medium: R 480", imagePng: "images/carnival.png", imageWebp: "images/carnival.webp" },
    
    // Cupcakes
    { id: "ferrero-rocher", category: "Cupcake", name: "Ferrero Rocher", description: "Decadent chocolate cupcake with velvety Rocher frosting and whole Ferrero.", price: "6 Pack: R 220 - R 250", imagePng: "images/ferrero.png", imageWebp: "images/ferrero.webp" },
    { id: "ruby-cream-swirl", category: "Cupcake", name: "Ruby Cream Swirl", description: "Deep-red cocoa sponge with silky vanilla cream cheese frosting.", price: "6 Pack: R 200 - R 250", imagePng: "images/velvet.png", imageWebp: "images/velvet.webp" },
    { id: "salted-caramel-cocoa", category: "Cupcake", name: "Salted Caramel Cocoa", description: "Soft vanilla cake, chocolate shell, whipped caramel frosting and drizzle.", price: "6 Pack: R 200 - R 250", imagePng: "images/caramel.png", imageWebp: "images/caramel.webp" },
    { id: "party-sprinkle", category: "Cupcake", name: "Party Sprinkle Sparkle", description: "Light vanilla confetti sponge with sweet pastel-pink buttercream.", price: "6 Pack: R 200 - R 250", imagePng: "images/confetti.png", imageWebp: "images/confetti.webp" },

    // Cookies
    { id: "pink-velvet-thumbprint", category: "Cookie", name: "Pink Velvet Thumbprint", description: "Soft buttery vanilla cookie with strawberry-infused pink buttercream center.", price: "6 Pack: R 180 - R 220", imagePng: "images/thumbprint.png", imageWebp: "images/thumbprint.webp" },
    { id: "biscoff-pb-crunch", category: "Cookie", name: "Biscoff PB Crunch", description: "Lotus Biscoff cookie dough drizzled with peanut butter and roasted peanuts.", price: "6 Pack: R 180 - R 220", imagePng: "images/biscoff.png", imageWebp: "images/biscoff.webp" },
    { id: "triple-chocolate", category: "Cookie", name: "Triple Chocolate Drop", description: "Golden brown sugar dough packed with decadent milk and dark chocolate chips.", price: "6 Pack: R 180 - R 220", imagePng: "images/chocochip.png", imageWebp: "images/chocochip.webp" },
    { id: "funfetti-sandwich", category: "Cookie", name: "Funfetti Sandwich", description: "Rich double-chocolate cookies layered with fluffy vanilla buttercream.", price: "6 Pack: R 200 - R 220", imagePng: "images/sandwich2.png", imageWebp: "images/sandwich2.webp" },

    // Breads
    { id: "golden-rustic-baguette", category: "Bread", name: "Golden Rustic Baguette", description: "Traditional French-style loaf with a golden crackly crust and soft interior.", price: "4 Loaves: R 160 | 6 Loaves: R 280", imagePng: "images/baguette.png", imageWebp: "images/baguette.webp" },
    { id: "hearth-baked-ciabatta", category: "Bread", name: "Hearth-Baked Ciabatta", description: "Classic Italian slipper bread with a crisp crust and light airy crumb.", price: "4 Loaves: R 210 | 6 Loaves: R 280", imagePng: "images/ciabatta.png", imageWebp: "images/ciabatta.webp" },
    { id: "heritage-seeded-sourdough", category: "Bread", name: "Heritage Seeded Sourdough", description: "Slow-fermented small batch loaf with golden crust and sesame seeds.", price: "4 Loaves: R 240 | 6 Loaves: R 280", imagePng: "images/sourdough.png", imageWebp: "images/sourdough.webp" },
    { id: "butter-rich-brioche", category: "Bread", name: "Butter-Rich Knot Brioche", description: "Rich egg-and-butter bread baked with a distinctive knotted shape.", price: "4 Loaves: R 220 | 6 Loaves: R 280", imagePng: "images/brioche.png", imageWebp: "images/brioche.webp" }
];

document.addEventListener("DOMContentLoaded", () => {
    renderProductCatalog(allProductsCatalog);
    initSearchAndFilter();
    initProductsModalEvents();
});

function renderProductCatalog(products) {
    const grid = document.getElementById("products-catalog-grid");
    if (!grid) return;

    grid.innerHTML = "";

    if (products.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; font-family: var(--font-body); font-weight: 300; padding: 2rem;">Looks like the tray is empty (๑ᵔ⤙ᵔ๑) Let's whisk up something else ⭑.ᐟ</p>`;
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card interactive-card";
        card.innerHTML = `
            <div class="product-image-wrapper" title="Click to inspect ${product.name}">
                <img src="${product.imagePng}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <div class="card-btn-group">
                    <button class="view-btn preview-btn" onclick='openProductsModal(${JSON.stringify(product)})'>Quick View >⩊<</button>
                    <a href="enquiries.html#enquiry-form-section" class="enquire-btn">Enquire Now</a>
                </div>
            </div>
        `;

        // product image click opens modal
        const imgWrapper = card.querySelector(".product-image-wrapper");
        if (imgWrapper) {
            imgWrapper.addEventListener("click", () => openProductsModal(product));
        }

        grid.appendChild(card);
    });
}

function initSearchAndFilter() {
    const searchInput = document.getElementById("product-search-input");
    const filterButtons = document.querySelectorAll(".cat-btn");

    let currentCategory = "all";
    let currentSearchQuery = "";

    function filterAndSearch() {
        let filtered = allProductsCatalog;

        if (currentCategory !== "all") {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        if (currentSearchQuery.trim() !== "") {
            const q = currentSearchQuery.toLowerCase();
            filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
        }

        renderProductCatalog(filtered);
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value;
            filterAndSearch();
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                currentCategory = btn.getAttribute("data-filter");
                filterAndSearch();
            });
        });
    }
}

// PRODUCTS PAGE ISOLATED MODAL LOGIC
function openProductsModal(product) {
    const modal = document.getElementById("products-page-modal");
    if (!modal) return;

    document.getElementById("products-modal-img").src = product.imagePng;
    document.getElementById("products-modal-img").alt = product.name;
    document.getElementById("products-modal-title").textContent = product.name;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProductsModal() {
    const modal = document.getElementById("products-page-modal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function initProductsModalEvents() {
    const closeBtn = document.getElementById("products-modal-close-btn");
    const modal = document.getElementById("products-page-modal");

    if (closeBtn) {
        closeBtn.addEventListener("click", closeProductsModal);
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeProductsModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeProductsModal();
    });
}

/* ENQUIRY FORM VALIDATION & AJAX SUBMISSION */

document.addEventListener("DOMContentLoaded", () => {
    const enquiryForm = document.getElementById("enquiryForm");
    if (!enquiryForm) return;

    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Form fields
        const fullname = document.getElementById("fullname");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const enquiryType = document.getElementById("enquiry-type");
        const message = document.getElementById("message");

        let isValid = true;

        // 1. Full Name Validation
        if (fullname.value.trim() === "") {
            showError("fullname", "Please enter your full name and surname.");
            isValid = false;
        }

        // 2. Phone Number Validation (Regex for South African or general phone numbers)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        if (phone.value.trim() === "") {
            showError("phone", "Please enter your phone number.");
            isValid = false;
        } else if (!phoneRegex.test(phone.value.trim())) {
            showError("phone", "Please enter a valid phone number (at least 10 digits).");
            isValid = false;
        }

        // 3. Email Address Validation (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError("email", "Please enter your email address.");
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError("email", "Please enter a valid email address (e.g., you@example.com).");
            isValid = false;
        }

        // 4. Enquiry Type Validation
        if (enquiryType.value === "") {
            showError("enquiry-type", "Please select an enquiry type.");
            isValid = false;
        }

        // 5. Message Validation (Minimum 10 characters)
        if (message.value.trim() === "") {
            showError("message", "Please enter a message or details for your enquiry.");
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError("message", "Your message must be at least 10 characters long.");
            isValid = false;
        }

        if (isValid) {
            // Simulate AJAX Submission & Email Compilation
            processEnquirySubmission({
                recipient: "kneadforitenquiries@gmail.com",
                fullname: fullname.value.trim(),
                phone: phone.value.trim(),
                email: email.value.trim(),
                type: enquiryType.options[enquiryType.selectedIndex].text,
                typeVal: enquiryType.value,
                message: message.value.trim()
            });
        }
    });

    // Modal Close Triggers
    const modal = document.getElementById("enquiry-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const okBtn = document.getElementById("modalCloseAction");

    if (closeBtn) closeBtn.addEventListener("click", closeEnquiryModal);
    if (okBtn) okBtn.addEventListener("click", closeEnquiryModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeEnquiryModal();
        });
    }
});

function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}-error`);
    if (inputField) inputField.style.borderColor = "var(--color-crushed-berry)";
    if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
    const errorTexts = document.querySelectorAll(".error-text");
    errorTexts.forEach(el => el.textContent = "");
    
    const inputs = document.querySelectorAll(".enquiry-form input, .enquiry-form select, .enquiry-form textarea");
    inputs.forEach(el => el.style.borderColor = "var(--color-black)");
}

function processEnquirySubmission(data) {
    // Determine dynamic response based on enquiry type (Cost/Availability)
    let responseText = "";
    switch (data.typeVal) {
        case "custom-cake":
            responseText = "Custom bento cakes range from R180 to R600. Available slots in 3-5 days.";
            break;
        case "class-booking":
            responseText = "Baking workshop seats are available this weekend! Standard fee is R450 per person.";
            break;
        case "order-request":
            responseText = "Daily bento boxes, cookies, and sourdough loaves are ready for daily pickup or local delivery.";
            break;
        case "volunteer-sponsor":
            responseText = "Thank you for your willingness to support our community baking initiatives! We will schedule a discussion call.";
            break;
        default:
            responseText = "We have received your query and our team will respond shortly.";
            break;
    }

    // Populate Confirmation Modal
    document.getElementById("conf-name").textContent = data.fullname;
    document.getElementById("conf-type").textContent = data.type;
    document.getElementById("conf-response").textContent = responseText;

    // Show Modal
    const modal = document.getElementById("enquiry-modal");
    if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    // Reset Form
    document.getElementById("enquiryForm").reset();
}

function closeEnquiryModal() {
    const modal = document.getElementById("enquiry-modal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}

/* ENQUIRY FORM VALIDATION & AJAX SUBMISSION */

document.addEventListener("DOMContentLoaded", () => {
    const enquiryForm = document.getElementById("enquiryForm");
    if (!enquiryForm) return;

    enquiryForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        // Form fields
        const fullname = document.getElementById("fullname");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const enquiryType = document.getElementById("enquiry-type");
        const message = document.getElementById("message");

        let isValid = true;

        // 1. Full Name Validation
        if (fullname.value.trim() === "") {
            showError("fullname", "Please enter your full name and surname.");
            isValid = false;
        }

        // 2. Phone Number Validation (Regex for South African or general phone numbers)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        if (phone.value.trim() === "") {
            showError("phone", "Please enter your phone number.");
            isValid = false;
        } else if (!phoneRegex.test(phone.value.trim())) {
            showError("phone", "Please enter a valid phone number (at least 10 digits).");
            isValid = false;
        }

        // 3. Email Address Validation (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError("email", "Please enter your email address.");
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError("email", "Please enter a valid email address (e.g., you@example.com).");
            isValid = false;
        }

        // 4. Enquiry Type Validation
        if (enquiryType.value === "") {
            showError("enquiry-type", "Please select an enquiry type.");
            isValid = false;
        }

        // 5. Message Validation (Minimum 10 characters)
        if (message.value.trim() === "") {
            showError("message", "Please enter a message or details for your enquiry.");
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError("message", "Your message must be at least 10 characters long.");
            isValid = false;
        }

        if (isValid) {
            // Simulate AJAX Submission & Email Compilation
            processEnquirySubmission({
                recipient: "kneadforitenquiries@gmail.com",
                fullname: fullname.value.trim(),
                phone: phone.value.trim(),
                email: email.value.trim(),
                type: enquiryType.options[enquiryType.selectedIndex].text,
                typeVal: enquiryType.value,
                message: message.value.trim()
            });
        }
    });

    // Modal Close Triggers
    const modal = document.getElementById("enquiry-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const okBtn = document.getElementById("modalCloseAction");

    if (closeBtn) closeBtn.addEventListener("click", closeEnquiryModal);
    if (okBtn) okBtn.addEventListener("click", closeEnquiryModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeEnquiryModal();
        });
    }
});

function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const errorSpan = document.getElementById(`${fieldId}-error`);
    if (inputField) inputField.style.borderColor = "var(--color-crushed-berry)";
    if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
    const errorTexts = document.querySelectorAll(".error-text");
    errorTexts.forEach(el => el.textContent = "");
    
    const inputs = document.querySelectorAll(".enquiry-form input, .enquiry-form select, .enquiry-form textarea");
    inputs.forEach(el => el.style.borderColor = "var(--color-black)");
}

function processEnquirySubmission(data) {
    // Determine dynamic response based on enquiry type (Cost/Availability)
    let responseText = "";
    switch (data.typeVal) {
        case "custom-cake":
            responseText = "Custom bento cakes range from R180 to R600. Available slots in 3-5 days.";
            break;
        case "class-booking":
            responseText = "Baking workshop seats are available this weekend! Standard fee is R450 per person.";
            break;
        case "order-request":
            responseText = "Daily bento boxes, cookies, and sourdough loaves are ready for daily pickup or local delivery.";
            break;
        case "volunteer-sponsor":
            responseText = "Thank you for your willingness to support our community baking initiatives! We will schedule a discussion call.";
            break;
        default:
            responseText = "We have received your query and our team will respond shortly.";
            break;
    }

    // Populate Confirmation Modal
    document.getElementById("conf-name").textContent = data.fullname;
    document.getElementById("conf-type").textContent = data.type;
    document.getElementById("conf-response").textContent = responseText;

    // Show Modal
    const modal = document.getElementById("enquiry-modal");
    if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    // Reset Form
    document.getElementById("enquiryForm").reset();
}

function closeEnquiryModal() {
    const modal = document.getElementById("enquiry-modal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}