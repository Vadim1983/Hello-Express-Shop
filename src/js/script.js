"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const cartWrapper = document.querySelector(".cart__wrapper");
  const cart = document.querySelector(".cart");
  const close = document.querySelector(".cart__close");
  const confirm = document.querySelector(".confirm");
  const open = document.querySelector("#cart");
  const goodsBtn = document.querySelectorAll(".goods__btn");
  const products = document.querySelectorAll(".goods__item");
  const badge = document.querySelector(".nav__badge");
  const totalCost = document.querySelector(".cart__total>span");
  const titles = document.querySelectorAll(".goods__title");
  const empty = cartWrapper.querySelector(".empty");

  function openCart() {
    cart.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    cart.style.display = "none";
    document.body.style.overflow = "";
  }

  open.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);

  goodsBtn.forEach(function (btn, i) {
    btn.addEventListener("click", () => {
      let item = products[i].cloneNode(true);
      let trigger = item.querySelector("button");
      let removeBtn = document.createElement("div");

      trigger.remove();

      showConfirm();

      calcGoods(1);

      removeBtn.classList.add("goods__item-remove");
      removeBtn.innerHTML = "&times";
      item.appendChild(removeBtn);
      cartWrapper.appendChild(item);

      calcTotal();
      removeFromCart();
    });
  });

  function sliceTitle() {
    titles.forEach(function (item) {
      if (item.textContent.length < 70) {
        return;
      } else {
        item.textContent = `${item.textContent.slice(0, 71)}...`;
      }
    });
  }
  sliceTitle();

  function showConfirm() {
    if (checkAnimation(confirm) === "none") {
      confirm.style.display = "block";
      let counter = 100;
      const frame = function () {
        if (counter === 10) {
          clearInterval(id);
          confirm.style.display = "none";
        } else {
          counter--;
          confirm.style.transform = `translateY(-${counter}px)`;
          confirm.style.opacity = `.${counter}`;
        }
      };
      const id = window.setInterval(frame, 10);
    }
  }

  function calcGoods(i) {
    const items = cartWrapper.querySelectorAll(".goods__item");
    badge.textContent = items.length + i;
    if (items.length === 0) {
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
    }
  }

  function calcTotal() {
    const prices = document.querySelectorAll(
      ".cart__wrapper>.goods__item>.goods__price>span"
    );
    let total = 0;
    prices.forEach(function (item) {
      total += +item.textContent;
    });
    totalCost.textContent = total;
  }

  function removeFromCart() {
    const removeBtn = cartWrapper.querySelectorAll(".goods__item-remove");
    removeBtn.forEach(function (btn) {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        calcGoods(0);
        calcTotal();
      });
    });
  }

  function checkAnimation(element) {
    const style = window.getComputedStyle(element);
    let elemStyle = style.getPropertyValue('display');
    return elemStyle;
  }
// Json DB
  fetch('https://jsonplaceholder.typicode.com/todos/1') // обещание
    .then(response => response.json())
    .then(json => console.log(json));


});