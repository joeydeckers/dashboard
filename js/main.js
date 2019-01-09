$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        var mobileOverlay = $(".mobile-overlay");
        var mobileMenu = $(".mobile-menu");
        var closeButton = $(".fa-times");

        mobileMenu.css("right", "0px");
        mobileOverlay.css("display", "block");

        mobileOverlay.click(function(){
           mobileOverlay.css("display", "none");
            mobileMenu.css("right", "-200px");
        });

        closeButton.click(function(){
            mobileOverlay.css("display", "none");
            mobileMenu.css("right", "-200px");
        });
    });
});