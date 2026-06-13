const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,

    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
})