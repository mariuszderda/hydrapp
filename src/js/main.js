"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const value = document.querySelector('.counter__value--js');
const btnAdd = document.querySelector('.btn-add--js');
const btnRemove = document.querySelector('.btn-remove--js');
const key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  value.innerHTML = '0';
} else {
  value.innerHTML = localStorage.getItem(key);
}

btnAdd.addEventListener('click', (e) => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  value.innerHTML = localStorage.getItem(key);
});

btnRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(localStorage.getItem(key));

  if (currentValue > 0){
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) -1);
  value.innerHTML = localStorage.getItem(key);
}
});
