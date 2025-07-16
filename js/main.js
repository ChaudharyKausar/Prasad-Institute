(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);



// JS for Gallry
let body = document.querySelector("body"),
            lightBox = document.querySelector(".lightBox"),
            img = document.querySelectorAll(".gImg"),
            showImg = lightBox.querySelector(".showImg img"),
            close = lightBox.querySelector(".close");

        for (let image of img) {
            image.addEventListener("click", () => {
                showImg.src = image.src;
                lightBox.style.display = "block";
                body.style.overflow = "hidden";
                close.onclick = () => {
                    lightBox.style.display = "none";
                    body.style.overflow = "visible";
                };
            });
        }