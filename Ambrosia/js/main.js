$(function() {

    $(".modal").modal();

    $(".parallax").parallax();

    $(".button-collapse").sideNav({
    	closeOnClick: true,
    });

    $(".slider").slider({height: 500});

    $(".materialboxed").materialbox();

    $('ul.tabs').tabs({"swipeable":true});

    $(".scrollspy").scrollSpy();

    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});


    // carouse; logic
    $(".right_btn").on("click", function (el) {
       $(".carousel").carousel('next');
    });
    $(".left_btn").on("click", function (el) {
       $(".carousel").carousel('prev');
    });


    var waypoints = $(".event_collapsible").waypoint({
        handler: function(direction) {
            if(direction == "down"){
                $(".back_to_top").removeClass("scale-out");
            }
            else{
                $(".back_to_top").addClass("scale-out");
            }
        }
    });


    // preloader
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);


    // ///////////////////////////////////////
    // logic for accordion
    $(".event_collapsible").collapsible({
        onOpen: function(el) {
            $(".event_btn").css({"transform":"rotate(180deg)"});
        },
        onClose: function(el) {
            $(".event_btn").css({"transform":"rotate(0deg)"});
        }
    });

    $(".event_btn").on("click", function () {
        $(".event_collapsible_header").click();
    })

    // $("footer").footerReveal({shadowOpacity: 0.4});


    // //////////////////////////////////////////

    // scroll reveal animations
    window.sr = ScrollReveal();
    // sr.reveal(".comittee--card", 1000);
    sr.reveal(".section_header", {origin: 'top', duration: 1000});
    sr.reveal(".major-event", {duration: 1000});
    sr.reveal(".minor-event", {duration: 1000});
    sr.reveal(".sponsor_card", {duration: 500});
    sr.reveal(".contact_card", {duration: 1000});

});
