function submitDetails() {
	var eventTitle = $('#event-title').val();
	var eventDescription = $('#event-description').val();
	var eventLocation = $('#event-location').val();
	var eventOrganiserName = $('#event-organiser-name').val();
	var eventOrganiserEmail = $('#event-organiser-email').val();

	/* var dates = document.getElementById("date-time-entry-table");


    for(var i = 1; i < dates.rows.length; i++){
		  console.log("Date: " + dates.rows[i].cells[0].innerText);
		  console.log("Time: " + dates.rows[i].cells[1].innerHTML);
    }

	//alert(eventTitle + eventDescription + eventLocation + eventOrganiserName + eventOrganiserEmail);

  */

  var dates = $(".datepicker");
  var times = $(".timepicker");
  var dateAndTimeJSON = "";

  for(var i = 0; i < dates.length; i++){
    if(i != 0){
      dateAndTimeJSON += ", "
    }
    dateAndTimeJSON += dates[i].value + " - " + times[i].value
  }

  alert("{eventTitle: "+eventTitle+", eventDescription: "+eventDescription+", eventLocation: "+eventLocation+", eventDateAndTimes: ["+dateAndTimeJSON+"]}")

}

function submitAvailability() {
    alert("Haaizit Chines")
}

function copyEventURL() {
  /* Get the text field */
  var copyText = document.getElementById("event-url");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}