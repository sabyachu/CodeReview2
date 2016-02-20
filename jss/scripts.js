$(document).ready(function() {

  $("#vacationForm").submit(function(event) {
    var gender = $("select#gender").val();
    var activity = $("select#activity").val();
    var attitude = $("select#attitude").val();
    var budget = $("select#budget").val();
    var altitude = $("select#altitude").val();
    var total = 0;

    var activityArray = ["London, Paris, Bangkok", "Thailand, Puerto Vallarta, Aruba", "Cambodia, Egypt, Jordan", "New Delhi, South Africa, Mexico", "Tibet, Kenya, Peru"];
    var arrayFields = [activity, adventure, relax, budget, altitude];
    for (i = 1; i < arrayFields.length; i++) {
      if (arrayFields[i] == "true") {
         total = total + 1;
      }
    }

      $("#vacationName").empty().append(activityArray[total]);
      $("#result").show();

    if (gender === 'male' && age === 'youth' && attitude === 'relax' && budget === 'above-$5,000' && activities === 'outdoor') {
      $("#destination2").show()
    } else {
        $("#destination2").hide();
    }
    //
    //
    if (gender === 'male' && age === 'adult' && attitude === 'party' && budget === 'above-$5,000' && activities === 'outdoor') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //
    if (gender === 'female' && age === 'adult' && attitude === 'both' && budget === 'above-$5,000' && activities === 'shopping') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //
    if (gender === 'male' && age === 'adult' && attitude === 'both' && budget === 'under-$5,000' && activities === 'shopping') {
      $("#destination1").show()
    } else {
        $("#destination1").hide();
    }
    //
    if (gender === 'female' && age === 'adult' && attitude === 'relax' && budget === 'under-$5,000' && activities === 'outdoor') {
      $("#destination3").show()
    } else {
        $("#destination3").hide();
    }
    //
    event.preventDefault();

 });
});
