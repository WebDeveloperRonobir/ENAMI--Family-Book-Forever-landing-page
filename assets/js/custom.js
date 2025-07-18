/**
 * Table of contents
 * -----------------------------------
 * 1.HEADER STICKY
 * 2.HEADER ACTIVE ADD CLASS
 * 3.HEADER COLLAPSE
 * 4.FIXED HEADER
 * 5.GLIGHTBOX VIDEO HERO
 * 6.AJAX MAILCHIMP SUBSCRIBE
 * 7.LOCAL SUBSCRIPTION
 * 8.TESTIMONIAL SLIDER
 * 9.CHAPTER SLIDER
 * 10.CONTACT FORM
 * 11.ODOMETER JS
 * 12.CHAPTER PREVIEW
 * 13.CHAPTER PREVIEW - 02
 * 14.AOS JS
 * 15.SMOOTH SCROLL ON BUTTON CLICK
 * 16.JQUERY VALIDATION
 * 17. Gallery Isotope filter
 */

(function($) {
    "use strict";
    var PATH = {};

    /******************** 1.HEADER STICKY ********************/
    PATH.HeaderSticky = function() {
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".navbar").addClass("navbar_fixed");
        });
    };

    /******************** 2.HEADER ACTIVE ADD CLASS ********************/
    PATH.HeaderOnePageNav = function() {
        $("#onepage-nav").onePageNav({
            currentClass: "active",
            changeHash: false,
            scrollSpeed: 1000,
            scrollOffset: 60,
        });
    };

    /******************** 3.HEADER COLLAPSE ********************/
    PATH.MenuClose = function() {
        $(".navbar-nav a").on("click", function() {
            var toggle = $(".navbar-toggler").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse("hide");
            }
        });
    };

    /******************** 4.FIXED HEADER ********************/
    PATH.HeaderFixed = function() {
        var varHeaderFix = $(window).scrollTop() >= 60,
            $navbar = $(".header");
        if (varHeaderFix) {
            $navbar.addClass("navbar_fixed");
        } else {
            $navbar.removeClass("navbar_fixed");
        }
    };

    /******************** 5.GLIGHTBOX VIDEO HERO ********************/
    PATH.videoModal = function() {
        var lightboxVideo = GLightbox({
            selector: ".glightbox3",
        });
    };
    /******************** 6.AJAX MAILCHIMP SUBSCRIBE ********************/
    PATH.ajaxChimp = function() {
        $("#subscribe-mailchimp").ajaxChimp({
            callback: mailchimpCallback,
            url: "http:////unitetheme.us12.list-manage.com/subscribe/post?u=5e0141c017272ff01c6c3a091&amp;id=335f7c3601", // Replace your mailchimp post url inside double quote "".
        });

        function mailchimpCallback(resp) {
            var error_msg = $("#subscribe-mailchimp").find(".error-msg");
            var success_msg = $("#subscribe-mailchimp").find(".success-msg");

            if (resp.result === "success") {
                error_msg.fadeOut(200);
                success_msg.html(resp.msg).fadeIn(200);
            } else if (resp.result === "error") {
                success_msg.fadeOut(200);
                error_msg.html(resp.msg).fadeIn(200);
            }
        }
    };

    /******************** 7.LOCAL SUBSCRIPTION ********************/
    PATH.localSubs = function() {
        $("#subscribe").submit(function(e) {
            e.preventDefault();
            var email = $("#subscriber-email").val();
            var dataString = "email=" + email;

            function isValidEmail(emailAddress) {
                var pattern = new RegExp(
                    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i
                );
                return pattern.test(emailAddress);
            }

            if (isValidEmail(email)) {
                $.ajax({
                    type: "POST",
                    url: "assets/subscribe/subscribe.php",
                    data: dataString,
                    success: function() {
                        $(".success-msg").fadeIn(1000);
                        $(".error-msg").fadeOut(500);
                        $(".hide-after").fadeOut(500);
                    },
                });
            } else {
                $(".error-msg").fadeIn(1000);
            }

            return false;
        });
    };

    /******************** 8.TESTIMONIAL SLIDER  ********************/
    PATH.TestimonialSlide = function() {
        var testimonialSlider = new Swiper(".clients-slider", {
            slidesPerView: 3,
            spaceBetween: 18,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    };
    /******************** 9.CHAPTER SLIDER  ********************/
    PATH.chapterSlide = function() {
        var chapterSlider = new Swiper(".chapter-slider", {
            slidesPerView: 4,
            spaceBetween: 18,
            loop: false,
            autoplay: false,
            allowTouchMove: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    };

    /******************** 10.CONTACT FORM ********************/
    PATH.contactForm = function() {
        function isValidEmail(emailAddress) {
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            return pattern.test(emailAddress);
        }
        var $contact = $("#contact-form");
        if ($contact.length) {
            $contact.on("submit", function(e) {
                e.preventDefault();
                var success = $(this).find(".email-success"),
                    failed = $(this).find(".email-failed"),
                    loader = $(this).find(".email-loading"),
                    postUrl = $(this).attr("action");
                var data = {
                    name: $(this).find(".contact-name").val(),
                    email: $(this).find(".contact-email").val(),
                    subject: $(this).find(".contact-subject").val(),
                    message: $(this).find(".contact-message").val(),
                };
                if (
                    isValidEmail(data["email"]) &&
                    data["message"].length > 1 &&
                    data["name"].length > 1
                ) {
                    $.ajax({
                        type: "POST",
                        url: postUrl,
                        data: data,
                        beforeSend: function() {
                            loader.fadeIn(1000);
                        },
                        success: function(data) {
                            loader.fadeOut(1000);
                            success.delay(500).fadeIn(1000);
                            failed.fadeOut(500);
                        },
                        error: function(xhr) {
                            // if error occured
                            loader.fadeOut(1000);
                            failed.delay(500).fadeIn(1000);
                            success.fadeOut(500);
                        },
                        complete: function() {
                            loader.fadeOut(1000);
                        },
                    });
                } else {
                    loader.fadeOut(1000);
                    failed.delay(500).fadeIn(1000);
                    success.fadeOut(500);
                }
                return false;
            });
        }
    };

    /******************** 11.ODOMETER JS  ********************/
    PATH.OdoMeter = function() {
        $(".odometer").appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    };

    /******************** 12.CHAPTER PREVIEW  ********************/
    PATH.chapterPreview = function() {
        var lightboxDescription = GLightbox({
            selector: ".glightbox2",
            slideEffect: "zoom",
        });
    };

    /******************** 13.CHAPTER PREVIEW - 02  ********************/
    PATH.chapterPreview2 = function() {
        const panels = document.querySelectorAll(".panel");

        panels.forEach((panel) => {
            panel.addEventListener("click", () => {
                removeActiveClasses();
                panel.classList.add("active");
            });
        });

        function removeActiveClasses() {
            panels.forEach((panel) => {
                panel.classList.remove("active");
            });
        }
    };

    /******************** 14.AOS JS  ********************/
    PATH.AOS = function() {
        AOS.init();
    };

    /******************** 15.SMOOTH SCROLL ON BUTTON CLICK  ********************/
    PATH.Smooth = function() {
        $(document).on("click", "a.smooth", function(event) {
            event.preventDefault();
            $("html, body").animate({
                    scrollTop: $($.attr(this, "href")).offset().top,
                },
                1000
            );
        });
    };

    /******************** 16.JQUERY VALIDATION  ********************/
    PATH.Validate = function() {
        $("#contact-form").validate();
    };

    /******************** 17. Gallery Isotope filter  ********************/
    PATH.Gallery = function() {
        var $grid = $(".gallery-active").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            },
        });

        $(".gallery__menu").on("click", "li", function() {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $(".gallery__menu li").on("click", function(event) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            event.preventDefault();
        });
    };

    /******************** DOCUMENT READY FUNCTION ********************/
    $(function() {
        PATH.HeaderSticky();
        PATH.HeaderOnePageNav();
        PATH.MenuClose();
        PATH.videoModal();
        PATH.ajaxChimp();
        PATH.localSubs();
        PATH.TestimonialSlide();
        PATH.chapterSlide();
        PATH.contactForm();
        PATH.OdoMeter();
        PATH.chapterPreview();
        PATH.chapterPreview2();
        PATH.AOS();
        PATH.Smooth();
        PATH.Validate();
    });

    /******************** WINDOW ON SCROLL FUNCTION ********************/
    $(window).on("scroll", function() {
        PATH.HeaderFixed();
    });

    /******************** WINDOW ON LOAD FUNCTION ********************/
    $(window).on("load", function() {
        PATH.Gallery();
    });

})(jQuery);