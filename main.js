jQuery(document).ready(function(){
    $('.slider-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:`<button type="button" class="slick-prev"><svg width="24" height="24" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M12 13h-2l-5-5 5-5h2l-5 5z"></path></svg></button>`,
    nextArrow:`<button type="button" class="slick-next"><svg width="24" height="24" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#ffff" d="M4 13h2l5-5-5-5h-2l5 5z"></path></svg></button>`,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });
});