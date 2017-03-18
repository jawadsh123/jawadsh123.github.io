$(function () {
	
	$(".main_ev_btn").on("click", function(event) {
		console.log($(this).attr('event'));

		var event = $(this).attr('event');
		var eve_obj = mainEvents.main_event;

		var curr_event = eve_obj[event];
		console.log(curr_event.image_url);
		$("#main-mod-head").html(curr_event.title);
		$("#revealed-mod-head").html(curr_event.title + '<i class="material-icons right">close</i>');
		$("#modal-desc").html(curr_event.desc);
		$("#modal-time").html(curr_event.time);
		$("#modal-img").attr("src", curr_event.image_url);

		$("#modal1").modal({
		});
		$("#modal1").modal("open");
	});

    var mainEvents = {
		  "main_event": {
		    "singing": {
		          "title": "Singing",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/29.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "any_distinct_talent": {
		          "title": "Any Distinct Talent!",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/8.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "are_you_in_vogue": {
		          "title": "Are you in Vogue?",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/11.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_band": {
		          "title": "Musical Band",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/30.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "aan": {
		          "title": "Ambrosia Awards Night!",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/31.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "foot_loose": {
		          "title": "Foot Loose!",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/5.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "beat_boxing": {
		          "title": "Beat Boxing!",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/5.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "celebrity_walk": {
		          "title": "Celebrity Walk",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/6.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_night": {
		          "title": "Musical Night",
		          "desc": "asftwetia",
		          "image_url": "/img/ambrosia/6.jpg",
		          "time": "4:30pm-6:30pm"
		      }
		  }
		};




});