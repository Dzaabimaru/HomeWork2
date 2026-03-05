export function reviewsCard() {
    const swiper = new Swiper('.reviews__container', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        initialSlide: 2,

        
        breakpoints: {
            1240: {
                slidesPerView: 3,
            },
        },
        

        navigation: {
            nextEl: '.review__slider-button--next',
            prevEl: '.review__slider-button--prev',
        },
        watchSlidesProgress: true,
        centeredSlides: true,
    });

}