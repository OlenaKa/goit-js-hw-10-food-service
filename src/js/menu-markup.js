import menuList from '../data/menu.json';
import menuItemsTempl from '../templates/menu-items.hbs';
const menuItemsMarkup = createMenuItems(menuList);
const menuRef = document.querySelector('.js-menu');

function createMenuItems () {
  return menuItemsTempl(menuList)
}

menuRef.insertAdjacentHTML('beforeend', menuItemsMarkup)