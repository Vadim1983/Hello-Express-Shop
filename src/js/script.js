'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const cartWrapper = document.querySelector('.cart__wrapper');
  const cart = document.querySelector('.cart');
  const close = document.querySelector('.cart__close');
  const confirm = document.querySelector('.cart__confirm');
  const open = document.querySelector('#cart');
  const goodsBtn = document.querySelectorAll('.goods__btn');
  const products = document.querySelectorAll('.goods__item');
  const badge = document.querySelector('.nav__badge');
  const totalCost = document.querySelector('.cart__total>span');
  const titles = document.querySelectorAll('.goods__title');

  function openCart() {
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cart.style.display = 'none';
    document.body.style.overflow = '';
  }

  open.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);

  goodsBtn.forEach(function openCart(btn, i) {
    btn.addEventListener('click', () => {
      let item = products[i].cloneNode(true);
      let trigger = item.querySelector('button');
      let removeBtn = document.createElement('div');
      let empty = cartWrapper.querySelector('.empty');

      trigger.remove();
      removeBtn.classList.add('goods__item-remove');
      removeBtn.innerHTML = '&times';
      item.appendChild(removeBtn);

      cartWrapper.appendChild(item);
      if (empty) {
        empty.remove();
      }
    });
  });
});