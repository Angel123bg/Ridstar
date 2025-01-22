document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            console.log('Mobile menu button clicked');
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');

            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    } else {
        console.error('Mobile menu button or menu not found');
    }
});

// Add click event listeners to quick-view buttons
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = button.closest('.product-card');
        const partId = getPartIdFromCard(productCard);
        window.location.href = `parts-details.html?part=${partId}`;
    });
});

// Helper function to get part ID from product card
function getPartIdFromCard(card) {
    // Get the product title text and convert it to a URL-friendly ID
    const title = card.querySelector('.product-title a').textContent;
    
    // Map of known titles to IDs
    const titleToId = {
        'Батерия за Ridstar Q20/Q20 Lite': 'battery-q20',
        'LCD Display Panel': 'lcd-display',
        '750W Hub Motor': 'hub-motor',
        '48V Motor Controller': 'motor-controller',
        'Hydraulic Disc Brake Set': 'brake-set',
        '26" All-Terrain Tire': 'tire',
        '48V Fast Charger': 'charger',
        'Air Suspension Fork': 'suspension-fork'
    };

    return titleToId[title] || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
} 