"use strict";

var tabsBtn = document.querySelectorAll('.card__tab-btn'),
    tabsItems = document.querySelectorAll('.card__tab-content');
tabsBtn.forEach(function (el) {
  el.addEventListener('click', function () {
    var tabId = el.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!el.parentElement.classList.contains('active')) {
      tabsBtn.forEach(function (el) {
        el.parentElement.classList.remove('active');
      });
      tabsItems.forEach(function (el) {
        el.classList.remove('active');
      });
      el.parentElement.classList.add('active');
      currentTab.classList.add('active');
    }
  });
});
document.querySelector('.card__tab-btn').click();
var gallerry = document.querySelectorAll('.card__gallery-item');
gallerry.forEach(function (item) {
  item.addEventListener('click', function () {
    gallerry.forEach(function (item) {
      return item.classList.remove('active');
    });
    item.classList.add('active');
    document.querySelector('.card__img img').src = item.querySelector('img').src;
  });
});
document.querySelector('.card__gallery-item').click();
var backetAmount = document.querySelector('#backetAmount'),
    backetCountGood = document.querySelector('#backetCount'),
    btnAddBacket = document.querySelectorAll('.addToBacket');
var countGood = 0;
btnAddBacket.forEach(function (item) {
  item.addEventListener('click', function () {
    countGood++;

    if (countGood == 1) {
      backetCountGood.textContent = "".concat(countGood, " \u0442\u043E\u0432\u0430\u0440");
    } else if (countGood > 1 && countGood < 5) {
      backetCountGood.textContent = "".concat(countGood, " \u0442\u043E\u0432\u0430\u0440\u0430");
    } else {
      backetCountGood.textContent = "".concat(countGood, " \u0442\u043E\u0432\u0430\u0440\u043E\u0432");
    }
  });
});
var track = document.querySelector('.analog-slider__track');
var analogs = [{
  id: "100",
  url: "img/good_1.png",
  title: "Набор инструментов МАСТАК 94 предмета 01-094C [01-094C]",
  status: true,
  price: 1150,
  priceOpt: 708,
  sale: false
}, {
  id: "a101",
  url: "img/analog_101.png",
  title: "Маяк импульсный светодиодный на магните 10-30V 2-режима",
  status: true,
  price: 1150,
  priceOpt: 708,
  sale: false
}, {
  id: "a102",
  url: "img/analog_102.png",
  title: "Указатель габаритов с повторителем поворота «Бегущие огни» на  светодиодах",
  status: false,
  price: 1150,
  priceOpt: 708,
  sale: false
}, {
  id: "a103",
  url: "img/analog_103.png",
  title: "Фара противотуманная дальнего света круглая с желтым габаритом (двухрежимная) 12-24 В, 27 Вт, 4 узкая",
  status: true,
  price: 1150,
  priceOpt: 708,
  sale: true
}];
analogs.forEach(function (el) {
  console.log;
  var avalilabiryGood = el.status ? "В наличии" : "Нет в наличии";
  var saleGood = el.sale ? '<div class="analog-slider__sale">% <span class="analog-slider__sale-text">Скидка</span></div>' : '';
  track.innerHTML += "\n    <div class=\"analog-slider__item\">\n        <div class=\"analog-slider__img\">\n            <img src=\"".concat(el.url, "\" alt=\"\">\n        </div>\n        <p class=\"analog-slider__title\">").concat(el.title, "</p>\n        <p class=\"analog-slider__status\">").concat(avalilabiryGood, "</p>\n        <p class=\"analog-slider__price\">").concat(el.price, " \u20BD</p>\n        <p class=\"analog-slider__price-opt\">").concat(el.priceOpt, " \u20BD (\u043E\u043F\u0442\u043E\u0432\u0430\u044F)</p>\n        <button class=\"analog-slider__btn addToBacket\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n        ").concat(saleGood, "\n    </div>");
});

function slider() {
  var position = 0;
  var slidesToShow = 4,
      slidesToScroll = 2,
      container = document.querySelector('.analog-slider__container'),
      bntPrev = document.querySelector('.analog-slider__btn-previe'),
      bntNext = document.querySelector('.analog-slider__btn-next'),
      itemsCount = analogs.length,
      itemWidth = container.clientWidth / slidesToShow,
      movePosition = slidesToScroll * itemWidth;
  bntNext.addEventListener('click', function () {
    var itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  bntPrev.addEventListener('click', function () {
    var itemLeft = Math.abs(position) / itemWidth;
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  var setPosition = function setPosition() {
    track.style.transform = "translateX(".concat(position, "px)");
  };

  var checkBtns = function checkBtns() {
    bntPrev.disabled = position === 0;
    bntNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
}

setTimeout(slider, 500);
//# sourceMappingURL=main.js.map
