$(document).ready(function() {

  $("#vacationForm").submit(function(event) {
    var gender = $("select#gender").val();
    var activity = $("select#activity").val();
    var attitude = $("select#attitude").val();
    var budget = $("select#budget").val();
    var altitude = $("select#altitude").val();
