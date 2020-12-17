

// $("h3").hover(function() {
//   $(".skills-pop").css("display", "block")
//   console.log("hover");
// }, function()
// {
//   $(".skills-pop").css("display", "none")
// });



$(".laptop").hover(function() {
  $(".skills-pop").css("display", "block");
  $(".skills-pop").css("opacity", "1");
  $(".laptop").addClass('laptop-hover');

}, function()
{
  if (!clicked)
  {
    $(".skills-pop").css("display", "none");
    $(".laptop").removeClass('laptop-hover');
  }
});

var clicked = false;

$(".laptop").click(function() {
  if (!clicked)
  {
    $(".skills-pop").css("display", "block");
    $(".laptop").addClass('laptop-hover');
    clicked = true;
  }
  else{
    $(".skills-pop").css("display", "none");
    clicked = false;
  }
});


$(".btn-2").click(function() {
  if ($(this).hasClass("one"))
  {
    $("#one").css("display", "block");
  }
  if ($(this).hasClass("two"))
  {
    $("#two").css("display", "block");
  }
  if ($(this).hasClass("three"))
  {
    $("#three").css("display", "block");
  }
  if ($(this).hasClass("four"))
  {
    $("#four").css("display", "block");
  }
});

$(".close-btn").click(function()
{
  if ($(this).hasClass("one"))
  {
    $("#one").css("display", "none");
  }
  if ($(this).hasClass("two"))
  {
    $("#two").css("display", "none");
  }
  if ($(this).hasClass("three"))
  {
    $("#three").css("display", "none");
  }
  if ($(this).hasClass("four"))
  {
    $("#four").css("display", "none");
  }
});

// external js: masonry.pkgd.js

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
