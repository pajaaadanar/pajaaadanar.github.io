const wrapper = document.querySelector(".wrapper");

const question = document.querySelector(".question");

const gif document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question.innerHTML = "Aaaaa, I like you too";

gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () => {

const noBtnRect = noßtn.getBoundingClientRect(); const maxX = window.innerWidthnoBtnRect.width;

const maxY = window.innerHeight noBtnRect.height;

const randomX = Math.floor(Math.random() maxx);

const randomY = Math.floor(Math.random() maxY);

noBtn.style.left = randomX + "px";

noBtn.style.top randomy + "px"; });