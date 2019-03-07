document.addEventListener("DOMContentLoaded", function() {
  //console.log(document.styleSheets[4])
});

function switchBg() {
  var moon = document.getElementsByClassName("mdl-switch__label")[0].firstChild
    .nextSibling.className;

  if (moon === "far fa-moon") {
    document.getElementsByClassName(
      "mdl-switch__label"
    )[0].firstChild.nextSibling.className = "fas fa-moon";

    //dark theme

    document.getElementById("overrides").classList.toggle("dark");
  } else {
    document.getElementsByClassName(
      "mdl-switch__label"
    )[0].firstChild.nextSibling.className = "far fa-moon";

    //light theme
    document.getElementById("overrides").classList.toggle("dark");
  }
}

//modal solution provided --> https://github.com/google/material-design-lite/issues/5030#issuecomment-355489052
function login() {
  var dialog = document.querySelector("dialog");
  var showModalButton = document.querySelector(".show-modal");
  if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }
  showModalButton.addEventListener("click", function() {
    dialog.showModal();
    document.querySelector("dialog").addEventListener("click", outsideDialog);
  });
}

function outsideDialog(event) {
  var dialog = this;
  var rect = dialog.getBoundingClientRect();
  var isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!isInDialog) {
    dialog.close();
    dialog.removeEventListener("click", outsideDialog);
  }
}


function autoTab(input){
  console.log(input.value)
}

function registerClient(){
  console.log()
}

