/////////////////////////////////
/////////// Custom JS ///////////
/////////////////////////////////


$(document).ready(function() {

//// HIDE NAV ON SCROLL DOWN, SHOW IT ON SCROLL UP ////
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos){
            $('#nav').css('top', '-1px');
        } else {
            $('#nav').css('top', '-160px');
        }
        prevScrollpos = currentScrollPos;
    }

    // Scroll smooth 
    $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    // Magnific popup JS
    // Inline popups
    $('.btn--card').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
        beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Mobile menu functionality
    var toggle = 1;
    $('#navi-toggle').click(function() {
        console.log("menu movil");
        if(toggle == 1) {
            $('.navMobile').css('left', '0');
            toggle = 0;
        }else {
            toggle = 1;
            $('.navMobile').css('left', '-100%');
        }
    });

    $('.navMobile__link').click(function() {
        toggle = 1;
        $('.navMobile').css('left', '-100%');
    });
});