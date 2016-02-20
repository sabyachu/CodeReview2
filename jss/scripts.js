$(document).ready(function() {

  $("#vacationForm").submit(function(event) {
    var gender = $("select#gender").val();
    var attitude = $("select#attitude").val();
    var budget = $("select#budget").val();
    var activities = $("select#activities").val();


    if (gender === 'male' && attitude === 'relax' && budget === 'above-$5,000' && activities === 'outdoor') {
      $("#destination2").show()
    } //else {
        //$("#destination2").hide();
    }
    //
    //
    if (gender === 'male' && attitude === 'party' && budget === 'above-$5,000' && activities === 'outdoor') {
      $("#destination3").show()
    } //else {
        //$("#destination3").hide();
    }
    //
    if (gender === 'female' && attitude === 'none' && budget === 'above-$5,000' && activities === 'shopping') {
      $("#destination3").show()
    //} else {
        //$("#destination3").hide();
    }
    //
    if (gender === 'male' && attitude === 'none' && budget === 'under-$5,000' && activities === 'shopping') {
      $("#destination1").show()
    } //else {
      //  $("#destination1").hide();
    }
    //
    if (gender === 'female' && attitude === 'relax' && budget === 'under-$5,000' && activities === 'outdoor') {
      $("#destination3").show()
    } //else {
        //$("#destination3").hide();
    }
    //


    event.preventDefault();

 });
});
