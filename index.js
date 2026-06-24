// ── Add to cart with ripple + toast ──
const button = document.getElementById('addToCart');
const toast  = document.getElementById('toast');

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
}

button.addEventListener('click', (e) => {
    // Ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    showToast('✓ Товар добавлен в корзину');
});

// ── Colour picker ──
const blocks    = document.querySelectorAll('.product__block');
const colorName = document.getElementById('colorName');

blocks.forEach(block => {
    block.addEventListener('click', () => {
        blocks.forEach(b => b.classList.remove('selected'));
        block.classList.add('selected');
        colorName.textContent = block.dataset.color;
    });
});

// ── Gallery thumbnails ──
const thumbs    = document.querySelectorAll('.small-image');
const mainImage = document.getElementById('mainImage');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImage.src = thumb.dataset.src;
    });
});

// ── Wishlist toggle ──
const wishBtn = document.getElementById('wishlistBtn');
wishBtn.addEventListener('click', () => {
    wishBtn.classList.toggle('liked');
    const isLiked = wishBtn.classList.contains('liked');
    showToast(isLiked ? '♥ Добавлено в избранное' : 'Удалено из избранного');
});
