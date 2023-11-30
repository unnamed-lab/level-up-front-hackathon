"use strict";

async function cancelBtn(bodyId) {
  const targetEl = await document.getElementById(bodyId);
  if (targetEl != undefined) targetEl.classList.add("hide");
}

async function dropdownToggleBtn(menuId) {
  const targetEl = await document.getElementById(menuId);
  if (targetEl != undefined) {
    try {
      const isHidden = await targetEl.classList.contains("hide");
      if (isHidden) targetEl.classList.remove("hide");
      else targetEl.classList.add("hide");
    } catch (err) {
      console.error("Error: " + err);
    }
  }
}
