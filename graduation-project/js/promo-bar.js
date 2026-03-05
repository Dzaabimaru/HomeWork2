export function HeaderPromo() {
    const promoBar = document.querySelector('.promo-bar');
    const closeButton = document.querySelector('.promo-bar__close');

    if (promoBar && closeButton) {
        closeButton.addEventListener('click', function () {
            promoBar.remove();
        });
    }
}

