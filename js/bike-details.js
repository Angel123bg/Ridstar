// Bike data object
const bikeData = {
    'q20': {
        name: 'Ridstar Q-20',
        subtitle: 'Base Model',
        price: {
         current: 950,
         original: 1500
        },
        mainImage: '../images/bike.png',
        gallery: [
            '../images/bike-detail1.jpg',
            '../images/bike-detail2.jpg',
            '../images/bike-detail3.jpg',
            '../images/bike-detail4.jpg'
        ],
        features: [
            { icon: 'fa-bolt', text: '1500W Motor' },
            { icon: 'fa-battery-full', text: '48V 20AH Battery' },
            { icon: 'fa-tachometer-alt', text: '33MPH Max Speed' },
            { icon: 'fa-road', text: '45+ Mile Range' },
            { icon: 'fa-clock', text: '4-6 Hour Charge Time' }
        ],
        description: 'The Ridstar Q-20 is the perfect entry into electric biking. This versatile e-bike combines power, comfort, and style to deliver an exceptional riding experience.',
        specs: {
            'Motor': '1500W Brushless Hub Motor',
            'Battery': '48V 20AH Lithium-ion',
            'Range': '45+ miles per charge',
            'Max Speed': '33 MPH',
            'Frame': '6061 Aluminum Alloy',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 4.0" All-Terrain',
            'Weight': '65 lbs (29.5 kg)'
        }
    },
    'q20-pro': {
        name: 'Ridstar Q-20 Pro',
        subtitle: 'Premium Model',
        price: {
            current: 1250,
            original: 1800
        },
        mainImage: '../images/bike2.png',
        gallery: [
            '../images/bike2-detail1.png',
            '../images/bike2-detail2.png',
            '../images/bike2-detail3.png',
            '../images/bike2-detail4.png'
        ],
        features: [
            { icon: 'fa-bolt', text: '2000W Motor' },
            { icon: 'fa-battery-full', text: '48V 25AH Battery' },
            { icon: 'fa-tachometer-alt', text: '40MPH Max Speed' },
            { icon: 'fa-road', text: '55+ Mile Range' },
            { icon: 'fa-clock', text: '3-5 Hour Charge Time' }
        ],
        description: 'Our flagship model with enhanced power, extended range, and premium features for the ultimate riding experience.',
        specs: {
            'Motor': '2000W Brushless Hub Motor',
            'Battery': '48V 25AH Lithium-ion',
            'Range': '55+ miles per charge',
            'Max Speed': '40 MPH',
            'Frame': '6061 Aluminum Alloy',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 4.0" All-Terrain',
            'Weight': '68 lbs (31 kg)'
        }
    },
    'm30': {
        name: 'Ridstar MN-26 Street',
        subtitle: 'Street Beast',
        price: {
            current: 2199,
            original: 2799
        },
        mainImage: '../images/bike3.jpg',
        gallery: [
            '../images/bike3-detail1.jpg',
            '../images/bike3-detail2.jpg',
            '../images/bike3-detail3.jpg',
            '../images/bike3-detail4.jpg'
        ],
        features: [
            { icon: 'fa-bolt', text: '1500W Motor' },
            { icon: 'fa-road', text: 'Street Ready' },
            { icon: 'fa-battery-full', text: '48V 20AH Battery' },
            { icon: 'fa-road', text: '60+ Mile Range' },
            { icon: 'fa-tachometer-alt', text: '45MPH Max Speed' }
        ],
        description: 'Conquer the streets with our powerful street e-bike featuring advanced performance and rugged construction.',
        specs: {
            'Motor': '2500W Brushless Hub Motor',
            'Battery': '52V 30AH Lithium-ion',
            'Range': '60+ miles per charge',
            'Max Speed': '45 MPH',
            'Frame': '6061 Aluminum Alloy Street Design',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 4.0" All-Terrain',
            'Weight': '72 lbs (32.7 kg)'
        }
    },
    's15': {
        name: 'Ridstar H20',
        subtitle: 'Sport Edition',
        price: {
            current: 1699,
            original: 1999
        },
        mainImage: '../images/bike4.png',
        gallery: [                                    // Added gallery property
            '../images/bike4-detail1.jpg',
            '../images/bike4-detail2.jpg',
            '../images/bike4-detail3.jpg',
            '../images/bike4-detail4.jpg'
        ],
        features: [
            { icon: 'fa-bolt', text: '1000W Motor' },
            { icon: 'fa-weight', text: 'Ultra Light' },
            { icon: 'fa-tachometer-alt', text: '38MPH Max Speed' },
            { icon: 'fa-road', text: '50+ Mile Range' },
            { icon: 'fa-clock', text: '3-4 Hour Charge Time' }
        ],
        description: 'A lightweight and agile e-bike designed for speed enthusiasts and urban adventures.',
        specs: {
            'Motor': '1000W Brushless Hub Motor',
            'Battery': '48V 15AH Lithium-ion',
            'Range': '50+ miles per charge',
            'Max Speed': '38 MPH',
            'Frame': 'Lightweight Aluminum Alloy',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 2.5" Street',
            'Weight': '58 lbs (26.3 kg)'
        }
    },
    'fat-tire': {
        name: 'Electric Bike 26inch Fat Tire',
        subtitle: '1500W Motor, 20AH Lithium Battery',
        price: {
            current: 1099,
            original: 1399
        },
        mainImage: '../images/fat-tire-bike.png',
        gallery: [
            '../images/fat-tire-bike-detail1.jpg',
            '../images/fat-tire-bike-detail2.jpg',
            '../images/fat-tire-bike-detail3.jpg',
            '../images/fat-tire-bike-detail4.jpg'
        ],
        features: [
            { icon: 'fa-bolt', text: '1500W Motor' },
            { icon: 'fa-battery-full', text: '20AH Lithium Battery' },
            { icon: 'fa-tachometer-alt', text: 'Max Speed: 28 MPH' },
            { icon: 'fa-road', text: 'Versatile for All Conditions' },
            { icon: 'fa-clock', text: '50 Miles Range' }
        ],
        description: 'Perfect for city delivery and road use, combining power and versatility.',
        specs: {
            'Motor': '1500W Brushless Hub Motor',
            'Battery': '48V 20AH Lithium-ion',
            'Range': '50 miles per charge',
            'Max Speed': '28 MPH',
            'Frame': '6061 Aluminum Alloy',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 4.0" All-Terrain',
            'Weight': '65 lbs (29.5 kg)'
        }
    },
    'q20-lite': {
        name: 'Ridstar Q-20 Lite',
        subtitle: '1000W Fat Tire Electric Bicycle',
        price: {
            current: 979,
            original: 1299
        },
        mainImage: '../images/q20-lite.png',
        gallery: [
            '../images/q20-lite-detail1.jpg',
            '../images/q20-lite-detail2.jpg',
            '../images/q20-lite-detail3.jpg',
            '../images/q20-lite-detail4.jpg'
        ],
        features: [
            { icon: 'fa-bolt', text: '1000W Motor' },
            { icon: 'fa-battery-full', text: '48V 15AH Battery' },
            { icon: 'fa-tachometer-alt', text: 'Max Speed: 25 MPH' },
            { icon: 'fa-road', text: 'Versatile for All Conditions' },
            { icon: 'fa-clock', text: '50 Miles Range' }
        ],
        description: 'Versatile in all road conditions with a maximum range of 50 miles.',
        specs: {
            'Motor': '1000W Brushless Hub Motor',
            'Battery': '48V 15AH Lithium-ion',
            'Range': '50 miles per charge',
            'Max Speed': '25 MPH',
            'Frame': '6061 Aluminum Alloy',
            'Brakes': 'Hydraulic Disc Brakes',
            'Tires': '26" x 4.0" All-Terrain',
            'Weight': '60 lbs (27.2 kg)'
        }
    }
};

// Load bike data based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    console.log("Bike details page loaded"); // Debugging log

    // Create the back arrow element
    const backArrow = document.createElement('a');
    backArrow.href = '../product/index.html';
    backArrow.className = 'back-arrow';
    backArrow.setAttribute('aria-label', 'Back to Home');
    backArrow.innerHTML = '<i class="fas fa-arrow-left"></i>'; // Font Awesome arrow icon

    // Append the back arrow to the page wrapper
    const pageWrapper = document.querySelector('.page-wrapper');
    pageWrapper.appendChild(backArrow);

    const urlParams = new URLSearchParams(window.location.search);
    const bikeId = urlParams.get('id');
    const bike = bikeData[bikeId];

    if (!bike) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${bike.name} | Ridstar Premium Electric Bikes`;

    // Update main image
    document.querySelector('.main-image img').src = bike.mainImage;
    document.querySelector('.main-image img').alt = bike.name;

    // Update gallery images
    const thumbnailGallery = document.querySelector('.thumbnail-gallery');
    thumbnailGallery.innerHTML = bike.gallery.map(img => 
        `<img src="${img}" alt="${bike.name} detail" onclick="updateMainImage(this.src)">`
    ).join('');

    // Update product info
    document.querySelector('.product-info h1').textContent = bike.name;
    document.querySelector('.product-subtitle').textContent = bike.subtitle;
    document.querySelector('.current-price').textContent = `$${bike.price.current}`;
    document.querySelector('.original-price').textContent = `$${bike.price.original}`;

    // Update features
    const featuresList = document.querySelector('.key-features ul');
    featuresList.innerHTML = bike.features.map(feature => 
        `<li><i class="fas ${feature.icon}"></i> ${feature.text}</li>`
    ).join('');

    // Update description
    document.querySelector('.product-description p').textContent = bike.description;

    // Update specifications
    const specsTable = document.querySelector('.specs-table table');
    specsTable.innerHTML = Object.entries(bike.specs).map(([key, value]) => 
        `<tr><th>${key}</th><td>${value}</td></tr>`
    ).join('');
});

// Function to update main image when clicking thumbnails
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
        let currentLanguage = 'bg';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'bg' ? 'en' : 'bg';
    updateContent();
    
    // Update the button text
    const langButton = document.querySelector('.language-button');
    langButton.textContent = langButton.getAttribute(`data-${currentLanguage}`);
}

function updateContent() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
     element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
}
    });
}); 