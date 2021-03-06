$(window).on('load',function() {
  if ($(window).width() >= 1600) {
    $(".side-nav").removeClass("closed");
    $(".main-container").removeClass("full-container");
    $("#slide-toggle").removeClass("reversed");
 }
  else if ($(window).width() <= 1599) {
  $(".side-nav").addClass("closed");
  $(".main-container").addClass("full-container");
  $("#slide-toggle").addClass("reversed");
}

})
$(document).ready(function () {
$('#scroll-up-button').click(function(){
  
  $('html, body, .main-container').animate({ scrollTop: 0 }, 600);
});
  $('.main-container').scroll(function() {

    
    if ($(this).scrollTop() > 300) {
        $('#scroll-up-button').fadeIn();
    } else {
        $('#scroll-up-button').fadeOut();
    }
});
  // slider Toggle
  $("#slide-toggle").click(function () {
    $(this).toggleClass("reversed");
    $(".side-nav").toggleClass("closed");
    $(".main-container").toggleClass("full-container");
  });
  $(".pop-details").click(function () {
    $(this).toggleClass("active")
    $(this).parent().find(".details-card").toggle();
  });
  // Slide Collapse
  $('.list-group-item[data-toggle="collapse"]').click(function () {
    if ($(this).hasClass("collapsed")) {
      $('.list-group-item[data-toggle="collapse"] .expand-icon').attr("src", "assets/images/plus-icon.png");
      $(this).find(".expand-icon").attr("src", "assets/images/minus-icon.png");
      $(this).find(".expand-icon").css({ top: "26px" });
    } else {
      $(this).find(".expand-icon").attr("src", "assets/images/plus-icon.png");
      $(this).find(".expand-icon").css({ top: "20px" });
    }
  });
  var cardBtn = $(".card-btn");
  $(".card-btn").click(function () {
    menuBoxHide(cardBtn);
    cardBtn = $(this);
    menuBoxShow(cardBtn);
  });
  $(".close-panel").click(function () {
    menuBoxHide(cardBtn);
  });
  $(".mini-panel").click(function () {
    minimizeCard(cardBtn);
  });
  $(".max-panel").click(function () {
    maxmizeCard(cardBtn);
  });
  $(".delete-panel").click(function (e) {
    if (e.currentTarget == e.target) {
      deleteNotification(cardBtn);
    }
  });
  $(".read-panel").click(function (e) {
    if (e.currentTarget == e.target) {
      readToggle(cardBtn, false);
    }
  });
  $(".unread").click(function (e) {
    if (e.currentTarget == e.target) {
      readToggle(cardBtn, true);
    }
  });
  function menuBoxHide(element) {
    var menuBox = element.parent().find("ul");
    menuBox.hide();
  }
  function menuBoxShow(element) {
    var menuBox = element.parent().find("ul");
    menuBox.show();
  }
  function minimizeCard(element) {
    var cardBody = element
      .parents(".sm-card , .regular-card")
      .find(".card-body");
    menuBoxHide(element);
    cardBody.collapse("hide");
  }
  function maxmizeCard(element) {
    var cardBody = element
      .parents(".sm-card , .regular-card")
      .find(".card-body");
    menuBoxHide(element);
    cardBody.collapse("show");
  }
  function readToggle(element, read) {
    var noificationCard = element.parents(".notification-card");
    menuBoxHide(element);
    if (read) {
      noificationCard.addClass("unread");
    } else {
      noificationCard.removeClass("unread");
    }
  }
  function deleteNotification(element) {
    var noificationCard = element.parents(".notification-card");
    menuBoxHide(element);
    noificationCard.remove();
  }

});
