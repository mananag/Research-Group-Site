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
