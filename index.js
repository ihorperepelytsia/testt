"use strict";
import {
  пошивСплошнойШторы,
  пошивДвойнойШторы,
  пошивСплошнойТюли,
  пошивДвойнойТюли,
} from "./пошив.js";

const inputШиринаГотовойШторы = document.querySelector("#ширинаГотовойШторы");
const inputНашаЦенаЗа1метрТканиШторы = document.querySelector(
  "#нашаЦенаЗа1метрТканиШторы"
);
const inputНашаЦенаЗа1метрТканиТюли = document.querySelector(
  "#нашаЦенаЗа1метрТканиТюли"
);
const inputШиринаГотовойТюли = document.querySelector("#ширинаГотовойТюли");
const inputЦельнаяШтора = document.querySelector("#цельнаяШтора");
const inputДвойнаяШтора = document.querySelector("#двойнаяШтора");
const inputЦельнаяТюль = document.querySelector("#цельнаяТюль");
const inputДвойнаяТюль = document.querySelector("#двойнаяТюль");
const btn = document.querySelector(".add");
const box = document.querySelector(".boxex");
const clearButton = document.querySelector(".clear");

function подсчет() {
  let result = [];
  const ширинаГотовойШторы = inputШиринаГотовойШторы.value;
  const нашаЦенаЗа1метрТканиШторы = inputНашаЦенаЗа1метрТканиШторы.value;
  const нашаЦенаЗа1метрТканиТюли = inputНашаЦенаЗа1метрТканиТюли.value;
  const длинаГотовойТюли = inputШиринаГотовойТюли.value;

  const метражШтор = (ширинаГотовойШторы * 1.5).toFixed(2);
  const метражТюли = длинаГотовойТюли * 2;

  const лентаШтор = метражШтор * 40;
  const лентаТюли = метражТюли * 40;

  const ценаЗаВесьМетражШтор = метражШтор * нашаЦенаЗа1метрТканиШторы;
  const ценаЗаВесьМетражТюли = метражТюли * нашаЦенаЗа1метрТканиТюли;
  пошивСплошнойШторы2();
  пошивДвойнойШторы2();
  пошивСплошнойТюли2();
  пошивДвойнойТюли2();
  function пошивСплошнойШторы2() {
    if (inputЦельнаяШтора.checked === true) {
      function пошивСплошнойШторы1() {
        const key = Object.keys(пошивСплошнойШторы);
        const v = Math.round(метражШтор);
        const a = key.find((num) => num === v.toString());
        if (a) {
          return пошивСплошнойШторы[a];
        }
      }
      return пошивСплошнойШторы1();
    }
    return 0;
  }
  function пошивДвойнойШторы2() {
    if (inputДвойнаяШтора.checked === true) {
      function пошивДвойнойШторы1() {
        const key = Object.keys(пошивДвойнойШторы);
        const v = Math.round(метражШтор);
        const a = key.find((num) => num === v.toString());
        if (a) {
          return пошивДвойнойШторы[a];
        }
      }
      return пошивДвойнойШторы1();
    }
    return 0;
  }
  function пошивСплошнойТюли2() {
    if (inputЦельнаяТюль.checked === true) {
      function пошивСплошнойТюли1() {
        const key = Object.keys(пошивСплошнойТюли);
        const v = Math.round(метражТюли);
        const a = key.find((num) => num === v.toString());
        if (a) {
          return пошивСплошнойТюли[a];
        }
      }
      return пошивСплошнойТюли1();
    }
    return 0;
  }
  function пошивДвойнойТюли2() {
    if (inputДвойнаяТюль.checked === true) {
      function пошивДвойнойТюли1() {
        const key = Object.keys(пошивДвойнойТюли);
        const v = Math.round(метражТюли);
        const a = key.find((num) => num === v.toString());
        if (a) {
          return пошивДвойнойТюли[a];
        }
      }
      return пошивДвойнойТюли1();
    }
    return 0;
  }

  const конечнаяЦена =
    ценаЗаВесьМетражШтор +
    ценаЗаВесьМетражТюли +
    лентаШтор +
    лентаТюли +
    пошивСплошнойШторы2() +
    пошивДвойнойШторы2() +
    пошивСплошнойТюли2() +
    пошивДвойнойТюли2();

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  result.push(p1, p2, p3, p4);

  p1.textContent = `Длина штор: ${метражШтор} метров`;
  p2.textContent = `Длина тюли: ${метражТюли} метров`;
  p3.innerText = `Цена за пошив штор: ${
    пошивСплошнойШторы2() + пошивДвойнойШторы2()
  }
  Цена за пошив тюли: ${пошивСплошнойТюли2() + пошивДвойнойТюли2()}`;
  p4.innerText = `Цена: ${конечнаяЦена} грн.
   В цену входит:  *Лента  *Цена тканей *Пошив`;
  p1.classList.add("final");
  p2.classList.add("final");
  p3.classList.add("final");
  p4.classList.add("final");
  box.append(...result);
}

btn.addEventListener("click", подсчет);

function destroyBoxes() {
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
}

clearButton.addEventListener("click", destroyBoxes);
