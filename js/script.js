const openNav = () => {
  if (document.getElementById("mobile-nav").style.width === "") {
    document.getElementById("mobile-nav").style.width = "250px";
  } else {
    document.getElementById("mobile-nav").style.width = "";
  }
};

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

let checkbox = document.getElementById("volunteer");

var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    modal.style.display = "block";
  }
});
