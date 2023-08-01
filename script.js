const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const johnImg = document.querySelector("img.john");
const tanyaImg = document.querySelector("img.tanya");
const tanyaText = document.querySelector(".one");
const johnText = document.querySelector(".two");

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
    johnImg.style.display = "block";
    johnText.style.display = "block";
    tanyaImg.style.display = "none";
    tanyaText.style.display = "none";
}
function prevSlide() {
    johnImg.style.display = "none";
    johnText.style.display = "none";
    tanyaImg.style.display = "block";
    tanyaText.style.display = "block";
}