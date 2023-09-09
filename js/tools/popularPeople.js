import config from "../tools/config.js";


export  async function displayPopularPeople(getRequestPopularPeople) {
  let cardsWrapper = document.querySelector(".menu-box");
  let html = "";
  getRequestPopularPeople.forEach((movie) => {
    let { original_name, profile_path } =
      movie;
    html += `
   
    <div class="boxx">
    <div class="menu-img">
        <img src="${config.BASE_IMG_URL}${profile_path}" alt="">
    </div>
    <div class="text-box">
    <h5>${original_name}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magni!</p>
  </div>
</div>
      `;
  });
  cardsWrapper.innerHTML = html;
}