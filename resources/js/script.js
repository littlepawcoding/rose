$(document).ready(function() {
   
    
    /* Sticky navigation */
    
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    }, {
        offset: '60px;'
    });
    
    
    /* Scroll to buttons */

    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
   });
    
    $('.js--scroll-to-dug').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-dug').offset().top}, 1000);
   });
        
    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
   });
    
    
    /* Navigation scroll */
    
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });    
    
    
    /* Animate on scroll */
    
    $('.js--wp-dug').waypoint(function(direction) {
        $('.js--wp-dug').addClass('animated pulse');
    }, {
        offset: '50%'
    })
    
    
    /* Mobile navigation */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
            
    })
    
    
    
    
    
});