$(document).ready(function(){
  $("#slide-toggle").click(function(){
    console.log($(this));
    
    $(this).toggleClass("reversed");
    $(".side-nav").toggleClass("closed");
    $(".main-container").toggleClass("full-container")
  })
})