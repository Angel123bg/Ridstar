// Parts data object
const partsData = {
    'battery-q20': {
        name: 'Battery',
        subtitle: 'Professional Racing',
        category: 'Battery',
        price: {
            current: 199.99,
            original: 249.99
        },
        mainImage: '../images/parts/battery.jpg',
        gallery: [
            '../images/parts/battery.jpg',
            '../images/parts/battery.jpg',
            '../images/parts/battery.jpg',
            '../images/parts/battery.jpg'
        ],
        features: [
            { icon: 'fa-weight', text: 'Ultra Lightweight' },
            { icon: 'fa-ruler', text: '440mm Width' },
            { icon: 'fa-check', text: 'Race Certified' },
            { icon: 'fa-shield-alt', text: 'Impact Resistant' }
        ],
        description: 'Professional-grade carbon fiber handlebar designed for maximum performance and minimal weight.',
        specs: {
            'Material': 'Carbon Fiber',
            'Weight': '250g',
            'Width': '440mm',
            'Clamp Diameter': '31.8mm',
            'Rise': '20mm',
            'Color': 'Matte Black',
            'Compatibility': 'Universal',
            'Warranty': '2 Years'
        },
        stockQuantity: 15
    },
    // Add more parts as needed...
};

// Load part data based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const partId = urlParams.get('id');
    console.log('Part ID:', partId); // Debugging line
    const part = partsData[partId];

    if (!part) {
        console.error('Part not found, redirecting to parts.html'); // Debugging line
        window.location.href = 'parts.html';
        return;
    }

    // Update page title
    document.title = `${part.name} | Premium Bike Parts`;

    // Update main image
    document.querySelector('.main-image img').src = part.mainImage;
    document.querySelector('.main-image img').alt = part.name;

    // Update gallery images
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = part.gallery.map(img => 
        `<img src="${img}" alt="${part.name} detail" onclick="updateMainImage(this.src)">`
    ).join('');

    // Update product info
    document.querySelector('.product-info h1').textContent = part.name;
    document.querySelector('.product-subtitle').textContent = part.subtitle;
    document.querySelector('.current-price').textContent = `$${part.price.current}`;
    document.querySelector('.original-price').textContent = `$${part.price.original}`;

    // Update stock status
    const stockStatus = document.querySelector('.stock-status');
    if (part.stockQuantity > 0) {
        stockStatus.classList.add('in-stock');
        stockStatus.textContent = 'In Stock';
    } else {
        stockStatus.classList.remove('in-stock');
        stockStatus.classList.add('out-of-stock');
        stockStatus.textContent = 'Out of Stock';
    }

    // Update features
    const featuresList = document.querySelector('.key-features ul');
    featuresList.innerHTML = part.features.map(feature => 
        `<li><i class="fas ${feature.icon}"></i> ${feature.text}</li>`
    ).join('');

    // Update description
    document.querySelector('.product-description p').textContent = part.description;

    // Update specifications
    const specsTable = document.querySelector('.specs-table table');
    specsTable.innerHTML = Object.entries(part.specs).map(([key, value]) => 
        `<tr><th>${key}</th><td>${value}</td></tr>`
    ).join('');
});

// Same functions for updateMainImage and quantity buttons
function updateMainImage(src) {
    document.querySelector('.main-image img').src = src;
}

// Quantity buttons functionality
document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.quantity input');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseInt(qtyInput.value);
        if (currentValue < 10) {
            qtyInput.value = currentValue + 1;
        }
    });
}); 