$(document).ready(function(){

  $("form").submit(function(event) {
    var animalInput = $("#animal").val();
    event.preventDefault();

    if (animalInput === "Turtles") {
      $(".hideImg").hide();
      $('#turtles').show();
    }
    else if (animalInput === "Snakes") {
      $(".hideImg").hide();
      $('#snakes').show();
    }
    else if (animalInput === "Insects") {
      $(".hideImg").hide();
      $('#insects').show();
    }

    else {
      $(".hideImg").hide();
    }
  });

});
