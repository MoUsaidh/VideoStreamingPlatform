(function (jQuery){
    "use strict";
    jQuery(document).ready(function(){
        function activaTav(pill){
            jQuery(pill).addClass('active show');
        }
        
        $('#home-slider').slick({
            autoplay : false,
            speed : 800,
            lazyload : 'progressive',
            arrows : true,
            dots : false,
            prevArrow : '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
            nextArrow : '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
            responsive : [
                {
                    breakpoint : 992,
                    settings : {
                        dots : true,
                        arrows : false,
                    }
                }
            ]
        }).slickAnimation();
        $(".slick-nav").on("click touch", function (e){
            e.preventDefault();

            var arrow = $(this);

            if(!arrow.hasClass('animate')){
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });

        jQuery('.favorites-slider').slick({
            dots:false,
            arrow : true,
            infinite : true,
            speed : 300,
            autoplay : false,
            slidesToShow : 4,
            slidesToScroll :1,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            responsive : [
                {
                    breakpoint:1200,
                    settings : {
                        slidesToShow : 3,
                        slidesToScroll : 1,
                        infinite : true,
                        dots : true
                    }
                },
                {
                    breakpoint:768,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 1
                    }
                },
                {
                    breakpoint:480,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1
                    }
                },
            ]
        });

        jQuery('#top-ten-slider').slick({
            slidesToScroll : 1,
            slidesToShow : 1,
            arrows : false,
            fade : true,
            asNavFor : '#top-ten-slider-nav',
            responsive : [
                {
                    breakpoint : 992,
                    settings : {
                        asNavFor : false,
                        arrows : true ,
                        nextArrow : '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
                        prevArrow : '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>',
                    }
                }
            ]
        });
        jQuery('#top-ten-slider-nav').slick({
            slidesToShow : 3,
            slidesToScroll : 1,
            asNavFor : '#top-ten-slider',
            dots: false,
            arrows : true,
            infinite : true,
            vertical : true,
            verticalSwiping : true,
            centerMode :false,
            nextArrow : '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
            prevArrow : '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
            focusOnSelect : true,
            responsive : [
                {
                    breakpoint : 1200,
                    settings : {
                        slidesToShow : 2,
                    }
                },
                {
                    breakpoint : 600,
                    settings : {
                        asNavFor : false,
                    }
                },
            ]
        });
        

        jQuery("#trending-slider").slick({
            slidesToShow : 1,
            slidesToScroll : 1,
            arrows : false,
            fade : true,
            draggable : false,
            asNavFor : "#trending-slider-nav",
        });

        jQuery("#trending-slider-nav").slick({
            slidesToShow : 5,
            slidesToScroll : 1,
            asNavFor : "#trending-slider",
            dots : false ,
            arrows : true ,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            infinite : true,
            centerMode : true,
            centerPadding : 0,
            focusOnSelect : true,
            responsive : [
                {
                    breakpoint : 1024,
                    settings : {
                        slidesToShow : 2,
                        slidesToScroll : 1,
                    }
                },
                {
                    breakpoint : 600,
                    settings : {
                        slidesToShow : 1,
                        slidesToScroll : 1,
                    }
                }
            ]
        });

        jQuery('.episodes-slider1').owlCarousel({
            loop : true,
            margin : 20,
            nav: true,
            navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i> "],
            dots : false,
            responsive : {
                0:{
                    items : 1
                },
                600: {
                    items : 1
                },
                1000 : {
                    items : 4
                }
            }
        });


        jQuery('.trending-content').each(function(){
            var highestBox = 0;
            jQuery('.tab-pane', this).each(function(){
                if(jQuery(this).height() > highestBox){
                    highestBox = jQuery(this).height();
                }
            });
            jQuery('.tab-pane', this).height(highestBox);
        });

        if(jQuery('select').hasClass('season-select')){
            jQuery('select').select2({
                theme : 'bootstrap4',
                allowClear : false,
                width : 'resolve'
            });
        }
        



    });
})(jQuery);