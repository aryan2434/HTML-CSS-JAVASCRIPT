// added jquery to footer



//when u click on "Click here To follow us on social media", links will toggle left to right


$(document).ready(function () {
    $('#hide').hide();
    $('footer h3').click(function () {
      $('#hide').animate({width:'toggle'}, 350);
    });
  });
  