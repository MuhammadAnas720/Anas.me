

//on hover over laptop, display of popup toggles.
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
// to maintain the hover of laptop and display of the popup window at the same time
$(".laptop").click(function() {
  if (!clicked)
  {
    $(".skills-pop").css("display", "block");
    $(".laptop").addClass('laptop-hover');
    $(".laptop").addClass('clicked');

    clicked = true;
  }
  else{
    $(".skills-pop").css("display", "none");
    $(".laptop").removeClass('clicked');

    clicked = false;
  }
});

// depending on what button is clicked, corresponding project window pop up is opened
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

// to know which project popup is open, so that it could be closed accordingly
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
