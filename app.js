"use strict";

const selectedCount = document.getElementById("selectItems");
const totalCount = document.getElementById("totalItems");
const progressBar = document.querySelector(".bar");
let selected = 0;
const items = [...document.querySelectorAll(".radioInput")];
totalCount.innerText = items.length;

async function selectItem(el) {
  el.checked ? selected++ : selected--;
  selectedCount.innerText = selected;
  progressBar.style.width = (selected / items.length) * 100 + "%";
}

async function cancelBtn(bodyId) {
  const targetEl = await document.getElementById(bodyId);
  if (targetEl != undefined) targetEl.classList.add("hide");
}

async function dropdownToggleBtn(menuId) {
  const targetEl = document.getElementById(menuId);
  const arr = [...document.querySelectorAll(".dropdown")];
  try {
    arr.map((el) => {
      if (!el.classList.contains("hide") && el != targetEl)
        el.classList.add("hide");
    });
    targetEl.classList.contains("hide")
      ? targetEl.classList.remove("hide")
      : targetEl.classList.add("hide");
  } catch (err) {
    console.error("Error: " + err);
  }
}

async function guideToggle() {
  const targetEl = document.querySelector(".guide-body");
  const targetIcon = document.querySelector(".guide-icon");

  try {
    const iconToggle = () => {
      if (!targetEl.classList.contains("show")) {
        targetIcon.classList.remove("expand");
        targetIcon.classList.add("collapse");
      } else {
        targetIcon.classList.remove("collapse");
        targetIcon.classList.add("expand");
      }
    };

    if (targetEl.classList.contains("show")) {
      iconToggle();
      targetEl.classList.remove("show");
    } else {
      iconToggle();
      targetEl.classList.add("show");
    }
  } catch (err) {
    console.error("Error: " + err);
  }
}

async function itemToggle(itemId) {
  const targetEl = document.getElementById(itemId);
  const arr = [...document.querySelectorAll(".guide-item")];
  try {
    arr.map((el) => {
      if (el.classList.contains("active") && el != targetEl)
        el.classList.remove("active");
    });
    targetEl.classList.contains("active")
      ? targetEl.classList.remove("active")
      : targetEl.classList.add("active");
  } catch (err) {
    console.error("Error: " + err);
  }
}
