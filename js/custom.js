$(document).ready(function () {
  // slider Toggle
  $("#slide-toggle").click(function () {
    $(this).toggleClass("reversed");
    $(".side-nav").toggleClass("closed");
    $(".main-container").toggleClass("full-container");
  });
  $(".pop-details").click(function () {
    $(this).parent().find(".details-card").toggle();
  });
  // Slide Collapse
  $('.list-group-item[data-toggle="collapse"]').click(function () {
    if ($(this).hasClass("collapsed")) {
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
