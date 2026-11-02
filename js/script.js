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