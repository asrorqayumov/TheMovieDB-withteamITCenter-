let selectButtons = document.querySelectorAll(".form__select__button");
let selectButtonsArr = Array.from(selectButtons);

for (let i = 0; i < selectButtonsArr.length; i++) {
  selectButtonsArr[i].addEventListener("click", (e) => {
    e.preventDefault()
    e.target.classList.toggle("bg-blue");
  });
}
