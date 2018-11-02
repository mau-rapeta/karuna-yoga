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
})