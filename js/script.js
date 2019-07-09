var link = document.querySelector(".button-write");

var popup = document.querySelector(".modal-review");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var yourname = popup.querySelector("[name=yourname]");
var mail = popup.querySelector("[name=mail]");
var yourtext = popup.querySelector("[name=yourtext]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    yourname.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });


var mapLink = document.querySelector(".open-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});


var cartLink = document.querySelector(".buy");

var cartPopup = document.querySelector(".item-added");
var cartClose = cartPopup.querySelector(".modal-close");

cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});
