$(function () {
	
	$(".main_ev_btn").on("click", function(event) {
		console.log($(this).attr('event'));

		var event = $(this).attr('event');
		var eve_obj = mainEvents.main_event;

		var curr_event = eve_obj[event];
		$("#main-mod-head").html(curr_event.title);
		$("#revealed-mod-head").html(curr_event.title + '<i class="material-icons right">close</i>');
		$("#modal-desc").html(curr_event.desc);
		$("#modal-time").html(curr_event.time);

		$("#modal1").modal({
		});
		$("#modal1").modal("open");
	});

    var mainEvents = {
		  "main_event": {
		    "singing": {
		          "title": "Singing",
		          "desc": "asftwetia",
		          "image_url": "../img/ambrosia/1.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "show_your_talent": {
		          "title": "Show Your Talent!",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      },
		      "are_you_in_vogue": {
		          "title": "Are you in Vogue?",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_band": {
		          "title": "Musical Band",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      },
		      "aan": {
		          "title": "Ambrosia Awards Night!",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      },
		      "foot_loose": {
		          "title": "Foot Loose!",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_night": {
		          "title": "Musical Night",
		          "desc": "asftwetia",
		          "image_url": "afsotrjwe",
		          "time": "4:30pm-6:30pm"
		      }
		  }
		};




});