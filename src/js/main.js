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
});