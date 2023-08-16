let numbers = document.querySelectorAll(".number");
let svgEl = document.querySelectorAll("svg circle");
let counters = Array(numbers.length);
let intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {

        if (counters[index] === parseInt(number.dataset.num)) {
            clearInterval(counters[index]);
        }
        else {
            counters[index] += 1;
            number.innetHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(118 - 100 * parseFloat(number.dataset.num / 100));
        }
    }, 20)
});


function openCity(evt, cityName) {
    let i, card, tablinks;
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
      card[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  
  let cardBtns = document.querySelectorAll('.dropbtn');
  let cardBtnsArr = Array.from(cardBtns)
  for (let i = 0; i < cardBtnsArr.length; i++) {
    
    cardBtnsArr[i].addEventListener('click',(e)=>{

      e.target.nextElementSibling.classList.toggle("show");
    })
  }
