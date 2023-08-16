



import {config , getMovies}  from '../config.js'

let selectButtons = document.querySelectorAll(".form__select__button");
let selectButtonsArr = Array.from(selectButtons);

for (let i = 0; i < selectButtonsArr.length; i++) {
  selectButtonsArr[i].addEventListener("click", (e) => {
    e.preventDefault()
    e.target.classList.toggle("bg-blue");
  });
}

let person = {
    name:'someone',
    age: null,
  ismarried:false,
}

// let firstName = person.name;
// let age = person.age;

//  // Destructuring 
//  let {name = firstName, age,ismarried} = person;
//  console.log(name, age, ismarried);
