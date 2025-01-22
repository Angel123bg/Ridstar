class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.total = 0;
        this.init();
        this.updateCart();
    }

    init() {
        // Initialize cart elements
        this.cartOverlay = document.querySelector('.cart-overlay');
        this.cartToggle = document.querySelector('.cart-toggle');
        this.closeCartBtn = document.querySelector('.close-cart');
        this.cartItemsContainer = document.querySelector('.cart-items');
        this.cartCount = document.querySelector('.cart-count');
        this.totalAmount = document.querySelector('.total-amount');
        
        // Bind event listeners for cart toggle
        if (this.cartToggle) {
            this.cartToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.openCart();
            });
        }
        
        if (this.closeCartBtn) {
            this.closeCartBtn.addEventListener('click', () => this.closeCart());
        }

        // Handle Add to Cart buttons on parts page
        const partsAddToCartBtns = document.querySelectorAll('.product-card .add-to-cart-btn');
        if (partsAddToCartBtns.length > 0) {
            partsAddToCartBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const productCard = btn.closest('.product-card');
                    const product = {
                        id: Date.now(),
                        name: productCard.querySelector('.product-title a').textContent,
                        price: this.getPrice(productCard),
                        image: productCard.querySelector('.product-image img').src,
                        quantity: 1
                    };
                    this.addItem(product);
                    this.showNotification('Product added to cart!');
                });
            });
        }
        
        // Handle Add to Cart button on bike-details page
        const bikeAddToCartBtn = document.querySelector('.purchase-options .add-to-cart');
        const quantityInput = document.querySelector('.quantity input');
        
        if (bikeAddToCartBtn && quantityInput) {
            // Set up quantity controls
            const minusBtn = document.querySelector('.qty-btn.minus');
            const plusBtn = document.querySelector('.qty-btn.plus');
            
            minusBtn?.addEventListener('click', () => {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });
            
            plusBtn?.addEventListener('click', () => {
                const currentValue = parseInt(quantityInput.value);
                if (currentValue < 10) {
                    quantityInput.value = currentValue + 1;
                }
            });
            
            // Add to cart handler for bike
            bikeAddToCartBtn.addEventListener('click', () => {
                const quantity = parseInt(quantityInput.value);
                const product = {
                    id: Date.now(),
                    name: document.querySelector('.product-info h1').textContent,
                    price: parseFloat(document.querySelector('.current-price').textContent.replace('$', '')),
                    image: document.querySelector('.main-image img').src,
                    quantity
                };
                
                this.addItem(product);
                this.showNotification('Product added to cart!');
            });
        }
    }

    getPrice(productCard) {
        const salePrice = productCard.querySelector('.sale-price');
        const regularPrice = productCard.querySelector('.regular-price');
        if (salePrice) {
            return parseFloat(salePrice.textContent.replace('$', ''));
        }
        return parseFloat(regularPrice.textContent.replace('$', ''));
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    openCart() {
        if (this.cartOverlay) {
            this.cartOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeCart() {
        if (this.cartOverlay) {
            this.cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }

    addItem(product) {
        this.items.push(product);
        this.updateCart();
        this.openCart();
        this.saveCart();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.updateCart();
        this.saveCart();
    }

    saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    updateCart() {
        // Update cart count in all cart count elements
        const cartCounts = document.querySelectorAll('.cart-count');
        cartCounts.forEach(count => {
            count.textContent = this.items.length;
        });

        // Update cart items display
        if (this.cartItemsContainer) {
            this.cartItemsContainer.innerHTML = '';
            this.total = 0;

            this.items.forEach(item => {
                this.total += item.price * (item.quantity || 1);
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p class="price">$${item.price.toFixed(2)} ${item.quantity > 1 ? `x ${item.quantity}` : ''}</p>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;

                cartItem.querySelector('.remove-item').addEventListener('click', () => {
                    this.removeItem(item.id);
                });

                this.cartItemsContainer.appendChild(cartItem);
            });

            // Update total
            if (this.totalAmount) {
                this.totalAmount.textContent = `$${this.total.toFixed(2)}`;
            }
        }
    }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const cart = new ShoppingCart();
}); 