import Theme from '../data/themes.json';

const themeBtn = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = localStorage.getItem('theme')


if (theme===Theme.DARK){
  darkThemeSet()
};

themeBtn.addEventListener('change', themeSwitcher)

function darkThemeSet() {
  bodyRef.classList.add(Theme.DARK)
  bodyRef.classList.remove(Theme.LIGHT)
  themeBtn.setAttribute('checked', 'true');
  localStorage.setItem('theme', Theme.DARK)
};

function lightThemeSet() {
  bodyRef.classList.remove(Theme.DARK)
  bodyRef.classList.add(Theme.LIGHT)
  themeBtn.removeAttribute('checked');
  localStorage.setItem('theme', Theme.LIGHT)
}

function themeSwitcher (){

  if (themeBtn.checked){
    darkThemeSet();
  } else {
    lightThemeSet();
  }
  
};