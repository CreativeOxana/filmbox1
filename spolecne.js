const buttonElm = document.querySelector('#menu-tlacitko');
const itemsElm = document.querySelector('#menu-polozky');
buttonElm.addEventListener('click', () => {
  itemsElm.classList.toggle('show');
});

if (itemsElm.classList.contains('show')) {
  buttonElm.innerHTML = '<i class="fas fa-xmark"></i>';
} else {
  buttonElm.innerHTML = '<i class="fas fa-bars"></i>';
}
