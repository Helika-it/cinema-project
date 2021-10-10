const schemeSvg = document.querySelector(".scheme-svg");
const totalPriseTag = document.querySelector(".price-total");
let cost = 500;
let totalPrise = 0;

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll(".active").length
    totalPrise = totalSeats * cost;
    totalPriseTag.textContent = totalPrise;
  }
  
})