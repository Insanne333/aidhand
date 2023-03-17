let donateButton = document.querySelector("button-DONATE");
let donateUI = document.querySelector("donate-UI");

console.info(donateUI.style);
console.info(donateButton.style);
function switchDisplay (donateUI) {
    donateUI.style.backgroundColor = "rgb(150, 0, 0)";
    console.info(donateButton.style);
}

donateButton.onclick = switchDisplay();