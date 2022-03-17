var learnmore_btn = document.querySelector(".content .textBox a");
const section = document.querySelector("section");

function learnmoreFunc(){
    alert("Sorry, we are not ready yet! Please wait for further updates!");
}

function events() {
    learnmore_btn.addEventListener("click", learnmoreFunc);
}

events();