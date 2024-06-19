
$(document).ready(function () {
    $('.reviews__cards').slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        // centerMode: true
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },

            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    });
})
