$(function (argument) {
	
	var database = firebase.database();

	var commentaries = database.ref("commentaries/");

	var newItems = false;
	var removeLoader = false;

	commentaries.on('child_added', function(data) {
		insertData(data.val());

		// logic for toast
		if (newItems == true){
			var toastContent = "New Announcement!! <br>Check Live Announcement Section."
			Materialize.toast(toastContent, 5000);
		}

		// logic to remove preloader
		if (removeLoader == false){
			$(".preloader-wrapper").hide(300, function() {
				$(this).remove();
			});
			removeLoader = true;
		}
	})

	commentaries.once('value', function(data) {
		newItems = true;
	})



	// Utility functions
	function insertData(obj) {
		var event = '<tr><td><div class="live_time">'+obj.time+'</div><div class="live_message">'+obj.comments+'</div></td></tr>'
		$(".live_body").prepend(event);
	}

})