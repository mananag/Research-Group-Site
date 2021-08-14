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

const hamLine = document.getElementsByClassName("ham-line");
const navElements = document.getElementsByClassName("navElements");
const navContainer = document.querySelector('.navContainer')
const logo = document.querySelector('.logo')
let isOpened = false

const openCloseNav = () => {
    if(isOpened){
        isOpened = false;
        hamLine[1].style.left = "";
        hamLine[1].style.marginTop = "";
        hamLine[0].style.transform = "";
        hamLine[1].style.transform = "";
        navContainer.style.height = "60px"
        for (i=0; i<navElements.length; i++) {
            navElements[i].style.opacity = '0'
        }

    }else{
        hamLine[1].style.left = "0";
        hamLine[1].style.marginTop = "-7px";
        hamLine[0].style.transform = "rotate(45deg)";
        hamLine[1].style.transform = "rotate(-45deg)";
        navContainer.style.height = "274.8888px"
        for (i=0; i<navElements.length; i++) {
            navElements[i].style.opacity = '1'
        }
        isOpened = true;
    }
}
