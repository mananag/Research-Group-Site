const slider = document.querySelector(".scrolling-wrapper");
const blogCard = document.getElementsByClassName("blogimage");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    for (let index = 0; index < blogCard.length; index++) {
        blogCard[index].classList.add("active");
    }
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    for (let index = 0; index < blogCard.length; index++) {
        blogCard[index].classList.remove("active");
    }
    slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
    isDown = false;
    for (let index = 0; index < blogCard.length; index++) {
        blogCard[index].classList.remove("active");
    }
    slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 4; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});
