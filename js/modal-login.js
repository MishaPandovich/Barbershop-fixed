var link = document.querySelector(".user-block__login");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
});

