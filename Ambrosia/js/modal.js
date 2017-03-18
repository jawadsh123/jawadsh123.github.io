$(function () {

	var images = [
	'img/gallery/29.jpg',
	'img/gallery/8.jpg',
	'img/gallery/11.jpg',
	'img/gallery/30.jpg',
	'img/gallery/31.jpg',
	'img/gallery/5.jpg',
	'img/gallery/5.jpg',
	'img/gallery/6.jpg',
	'img/gallery/6.jpg',
	];

	$(images).each(function() {
		var image = $('<img />').attr('src', this);
	});
	
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
		$("#modal_img").attr("src", curr_event.image_url);
		// $(".card-reveal").attr("style", "");


		$("#modal1").modal();
		$("#modal1").modal("open");
	});

    var mainEvents = {
		  "main_event": {
		    "singing": {
		          "title": "Singing",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/29.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "show_your_talent": {
		          "title": "Any Distinct Talent!",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/8.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "are_you_in_vogue": {
		          "title": "Are you in Vogue?",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/11.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_band": {
		          "title": "Musical Band",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/30.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "aan": {
		          "title": "Ambrosia Awards Night!",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/31.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "foot_loose": {
		          "title": "Foot Loose!",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/5.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "beat_boxing": {
		          "title": "Beat Boxing!",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/5.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "celebrity_walk": {
		          "title": "Celebrity Walk",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/6.jpg",
		          "time": "4:30pm-6:30pm"
		      },
		      "musical_night": {
		          "title": "Musical Night",
		          "desc": "asftwetia",
		          "image_url": "img/gallery/6.jpg",
		          "time": "4:30pm-6:30pm"
		      }
		  }
		};




});