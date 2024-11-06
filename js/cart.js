// js/cart.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartBadge = document.getElementById('badge');
    cartBadge.textContent = cart.length;
}

// Call this when the page loads
updateCartDisplay();
