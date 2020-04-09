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
  var cardBtn = $(".card-btn");
  $(".card-btn").click(function(){
    menuBoxHide(cardBtn);
    cardBtn = $(this)
    menuBoxShow(cardBtn);
  })
  $(".close-panel").click(function(){    
    menuBoxHide(cardBtn)
  })
  $(".mini-panel").click(function(){    
    minimizeCard(cardBtn)
  })
  $(".max-panel").click(function(){    
    maxmizeCard(cardBtn)
  })
  function menuBoxHide(element)
  {
    var menuBox= element.parent().find("ul");
    menuBox.hide();
  }
  function menuBoxShow(element)
  {
    var menuBox= element.parent().find("ul");
    menuBox.show();
  }
  function minimizeCard(element){
    var cardBody=element.parents(".sm-card").find(".card-body");
    menuBoxHide(element)
    cardBody.collapse("hide");
    
  }
  function maxmizeCard(element){
    var cardBody=element.parents(".sm-card").find(".card-body");
    menuBoxHide(element)
    cardBody.collapse("show");
  }
})