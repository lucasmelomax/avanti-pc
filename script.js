// const productContainer = document.querySelector(".card-flex");
// const nxtBtn = document.querySelector(".nxtBtn");
// const preBtn = document.querySelector(".preBtn");

// function teste() {
//   let w = productContainer.getBoundingClientRect().width;
//   console.log(productContainer.getBoundingClientRect().width);
//   productContainer.scrollLeft -= w;
// }

// teste();

function initAccordioList() {
  const accordionList = document.querySelectorAll(".form-titulo");
  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordioList();
