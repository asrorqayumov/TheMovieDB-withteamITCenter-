function openCity(evt, cityName) {
  let i, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}


export function showcard() {
  let cardBtns = document.querySelectorAll('.dropbtn-card');
  let cardBtnsArr = Array.from(cardBtns);

  for (let i = 0; i < cardBtnsArr.length; i++) {

    cardBtnsArr[i].addEventListener('click', (e) => {

      e.target.nextElementSibling.classList.toggle("show");

    })

  }

  
}

export function removeClassShow() {
  let body = document.body;
  let cardBtns = document.querySelectorAll('.dropbtn-card');
  let cardBtnsArr = Array.from(cardBtns);
  body.addEventListener('click', (e) => {
    console.log('event');
    for (let i = 0; i < cardBtnsArr.length; i++) {
      e.stopPropagation()
      cardBtnsArr[i].nextElementSibling.classList.remove('show')
    }
  })
}