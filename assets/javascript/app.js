var animalTrivia = {
  questions: 1,
  correctAnswer: 2
};

$(document).ready(function () {
  $('.category').mousedown(function () {
    $(this).css("opacity", 0.5);
  });

  $('.category').mouseup(function () {
    $(this).css("opacity", 1.0);
    $('.category').css("display", "none");
  });
});
