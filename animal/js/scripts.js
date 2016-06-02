$(document).ready(function(){

  $("form").submit(function(event) {
    var animalInput = $("#animal").val();
    event.preventDefault();

    if (animalInput === "Turtles") {
      $("#animaldisplay").find(".hideImg").hide();
      $('#turtles').show();
    }
    else if (animalInput === "Snakes") {
      $("#animaldisplay").find(".hideImg").hide();
      $('#snakes').show();
    }
    else if (animalInput === "Insects") {
      $("#animaldisplay").find(".hideImg").hide();
      $('#insects').show();
    }

  });

});
