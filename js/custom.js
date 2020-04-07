$(document).ready(function(){
  // slider Toggle
  $("#slide-toggle").click(function(){
    $(this).toggleClass("reversed");
    $(".side-nav").toggleClass("closed");
    $(".main-container").toggleClass("full-container")
  });
// Slide Collapse
  $('.list-group-item[data-toggle="collapse"]').click(function() {
    if($(this).hasClass("collapsed"))
   {
    $(this).find(".expand-icon").attr("src", "assets/images/minus-icon.png")
    $(this).find(".expand-icon").css({"top":"26px"})
   }
   else{
    $(this).find(".expand-icon").attr("src", "assets/images/plus-icon.png")
    $(this).find(".expand-icon").css({"top":"20px"})
   }
  })
})