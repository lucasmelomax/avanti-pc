function slider() {
  document.querySelectorAll('.slide-container').forEach(container => {
    const wrapper = container.querySelector('.slide-wrapper');
    const nextBtn = container.querySelector('.slide-btn.next');
    const prevBtn = container.querySelector('.slide-btn.prev');

    const cardWidth = 240;
    let scrollAmount = 0;

    const updateButtons = () => {
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      prevBtn.disabled = scrollAmount <= 0;
      nextBtn.disabled = scrollAmount >= maxScroll;
    };

    nextBtn.addEventListener('click', () => {
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      scrollAmount = Math.min(scrollAmount + cardWidth, maxScroll);
      wrapper.style.transform = `translateX(-${scrollAmount}px)`;
      updateButtons();
    });

    prevBtn.addEventListener('click', () => {
      scrollAmount = Math.max(0, scrollAmount - cardWidth);
      wrapper.style.transform = `translateX(-${scrollAmount}px)`;
      updateButtons();
    });
    updateButtons();
  });
}

slider();

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

function search(){
  const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultBox = document.getElementById('search-result');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita que o form recarregue a página
    const searchText = input.value.trim();
    if (searchText !== '') {
        resultBox.innerText = `Você pesquisou: "${searchText}"`;
        resultBox.style.display = 'block';
    } else {
        resultBox.style.display = 'none';
    }
});
}
search();