const cardButton = document.querySelector("#card__button");
const modal = decument.querySelector(".modal");
const close = decument.querySelector(".close");

cardButton.addEventListener("click", function (event) {
 modal.classList.add("is__open")
});

close.addEventListener("click", function (event) {
    modal.classList.remove("is__open")
});