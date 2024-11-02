// Toggle class active menu
const navbarNav = document.querySelector('.navbar-nav');

// fungsi klik menu
document.querySelector('#menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};


// togle aktive search-form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Togle Active Shoping Cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}

//fungsi close menu element
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button'); // element Search-box
const sc = document.querySelector('#shopping-cart-button'); // element Shoping Cart

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
    if(!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active')
    }
});