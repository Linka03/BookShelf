const burgerBtn = document.querySelector('.js-burger');
const iconClose = burgerBtn.querySelector('.close-menu');
const iconBurger = burgerBtn.querySelector('.open-menu');
const mobileMenu = document.querySelector('.mobile-menu');

let isOpen = true;
burgerBtn.addEventListener('click', handlerChangeBtnMenu);

function handlerChangeBtnMenu() {
        isOpen = !isOpen;
        if (isOpen) {
            iconClose.style.display = 'block';
            iconBurger.style.display = 'none';
            mobileMenu.classList.remove('hidden');
             
        } else {
            iconClose.style.display = 'none';
            iconBurger.style.display = 'block';
            mobileMenu.classList.add('hidden'); 
        }
    }


const homeLink = document.querySelector('.home-link');
const shoppingLink = document.querySelector('.shoping-link');

const toggleCurrentColor = () => {
  homeLink.classList.toggle('current-color');
  shoppingLink.classList.toggle('current-color');
};

homeLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (!homeLink.classList.contains('current-color')) {
    toggleCurrentColor();
  }
});

shoppingLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (homeLink.classList.contains('current-color')) {
    toggleCurrentColor();
  }
});

////////////////////КНОПКА ПЕРЕМИКАЧ /////  ВІКТОРІЯ////////////////////////
const checkTheme = document.querySelector('.check-theme');
checkTheme.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    }
    addDarkClassHtml()
});
function addDarkClassHtml() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    }
    else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) { }
}
addDarkClassHtml();






