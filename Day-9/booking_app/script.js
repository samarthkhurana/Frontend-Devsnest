const seats = document.querySelectorAll(".seat");
const bookedSeatsElement = document.querySelector(".booked-seats");
const remainingSeatsElement = document.querySelector(".remaining-seats");

var bookedSeats = 0;
var remainingSeats = seats.length;
var spray = false;

bookedSeatsElement.textContent = bookedSeats;
remainingSeatsElement.textContent = remainingSeats;

seats.forEach(function (seat) {
  seat.addEventListener("mousedown", function (event) {
    spray = true;
    seat.classList.toggle("booked");
    seat.classList.contains("booked") ? bookSeats() : unBookSeats();
  });
  seat.addEventListener("mouseup", function (event) {
    spray = false;
  });
  seat.addEventListener("mouseover", function (event) {
    
    if (spray) {
      seat.classList.toggle("booked");
      seat.classList.contains("booked") ? bookSeats() : unBookSeats();
    }
  });
});

function unBookSeats() {
    bookedSeats -= 1;
    remainingSeats += 1;
  
    bookedSeatsElement.textContent = bookedSeats;
    remainingSeatsElement.textContent = remainingSeats;
  }
  
function bookSeats() {
  bookedSeats += 1;
  remainingSeats -= 1;

  bookedSeatsElement.textContent = bookedSeats;
  remainingSeatsElement.textContent = remainingSeats;
}
