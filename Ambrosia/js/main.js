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



    // back to top fab
    // var offset = $(".live_events").offset().top - 200;
    // var displayFab = false
    // $(window).scroll(function() {
    	
    // 	var curr_scroll = $(this).scrollTop();
    	
    // 	if (curr_scroll > offset){
    // 		// console.log("hey");
    // 		if (displayFab == false){
    // 			$(".back_to_top").removeClass("scale-out");
    // 			displayFab = true;
    // 		}
    // 	}
    // 	else{
    // 		if (displayFab == true){
    // 			$(".back_to_top").addClass("scale-out");
    // 			displayFab = false;
    // 		}
    // 	}


    // });

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

    // //////////////////////////////////////////

    // scroll reveal animations
    window.sr = ScrollReveal();
    // sr.reveal(".comittee--card", 1000);
    sr.reveal(".section_header", {origin: 'top', duration: 1000});
    sr.reveal(".major-event", {duration: 1000});
    sr.reveal(".minor-event", {duration: 1000});

});
