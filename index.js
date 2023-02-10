// <!-- Swiper Java Script -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll to top button

const heroSection = document.querySelector("header");
const footerElem = document.querySelector(".container");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollintoview({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

// anmate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((CurElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(CurElem.dataset.number);
    // console.log(targetNumber);
    const initialNumber = parseInt(CurElem.innerText);
    // console.log(initialNumber);

    const incrementNumber = Math.trunc(targetNumber / speed);
    // console.log(incrementNumber);

    if (initialNumber < targetNumber) {
      CurElem.innerText = `${initialNumber + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});
