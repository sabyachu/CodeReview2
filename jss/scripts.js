$(document).ready(function() {

  $("form.survey").submit(function(event){
    var usa = $("input#usa").prop('checked');
    var distance = $("#distance").val();
    var spend = parseInt($("input[name='optionsSpend']:checked").val());
    var season = $("input[name='optionsSeason']:checked").val();
    var beaches = parseInt($("#beaches").val());
    var snow = $("input#checkSnow").prop('checked');



    if (distance === "yes" || (distance === "either" && usa === true)){
      var spend = spend - 1;
    }



      if ((usa === true && distance === "no") || (usa === false && distance !== "no")){
         if (beaches >= 2 && snow === false){
           if(spend <=  2 && season === "summer") {
             var destination = "Duluth, MN";
             var simpleDest = "DLH";
         } else if (spend >= 2 && beaches >= 3) {
            var destination = "kauai, Hawaii";
            var simpleDest = "HI";
         } else {
           var destination = "Los Angeles, CA"
           var simpleDest = "LAX";
         }

       } else if (snow === false && season === "notSummer"){
           var destination = "Kansas City, MO";
           var simpleDest = "MCI";
         }else {
           var destination = "Duluth, MN";
           var simpleDest = "DLH";
         }

      }else {
        if (beaches >=3){
          var destination ="Barcelona, Spain"
          var simpleDest = "BCN";
        }else if (beaches === 2){
           if (spend >= 2 ){
             var destination = "Copenhagen, Denmark";
             var simpleDest = "CPH";
         } else {
             var destination = "Barcelona, Spain"
             var simpleDest = "BCN";
          }
        }
        else{
          if (spend >= 2 && snow === false && season === "notSummer"){
            var destination = "London, UK";
            var simpleDest = "LHR";
         } else if(spend >= 2 || (spend >= 1 && season === "notSummer")) {
            var destination = "Stockholm, Sweden";
            var simpleDest = "ARN";
         } else{
          var destination = "Prague, Czech Republic";
          var simpleDest = "PRG";
          $(".aboutDestination").empty().append("Your Next Destination would be... <span class='destination'>" + destination + "</span>!");
          }
        }
      }

    $("#resultText").show();
    $(".yourResult").empty().append("Your next Destination would be... <span class='destination'>" + destination + "</span>!");

    $(".images").empty().append('<img class="img-rounded" class="img-responsive" src="img/'+ simpleDest +'.jpg">');

    if (simpleDest === "DLH") {
      $("#aboutDestination").empty().html("Duluth is truly a 'cool' city. Boasting 'Park Point,' the worlds longest freshwater sandbar, it has almost 5 miles of sand beaches.</p>");
    } else if (simpleDest === "PRG") {
      $("#aboutDestination").empty().html("Settled farther in the continent, Prague has lots of Classical Music");
    }else if (simpleDest === "MCI") {
      $("#aboutDestination").empty().html("Kansas City is an overlooked gem in the heartland of the US.");
    }else if (simpleDest === "LHR") {
      $("#aboutDestination").empty().html("London can be expensive, but it's one of the great cultural cities of the world.");
    }else if (simpleDest === "BCN") {
      $("#aboutDestination").empty().html("Barcelona is probably the best City in Europe.");
    }else if (simpleDest === "CPH") {
      $("#aboutDestination").empty().html("Almost as great as Barcelona,  Copenhagen is an amazing city with a lot to offer.");
    }else if (simpleDest === "LAX") {
      $("#aboutDestination").empty().html("California has a bit of everything, and is great year round");
    }else if (simpleDest === "ARN") {
      $("#aboutDestination").empty().html("Stockholm, while expensive, is a beautiful city built on an archipelago.");
    }else if (simpleDest === "HI") {
      $("#aboutDestination").empty().html("Hawaii! Surf! Beach! Hike!.");
    }

   event.preventDefault();
  });


});
