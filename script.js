'use strict'
const catchimggOne = document.getElementById("imggOne");

function updateBgImg() {
    if ( window.innerWidth <= 600 ) {
        catchimggOne.src = "media/mobile-bg.mp4"
    } else {
        catchimggOne.src = "media/pc-bg.mp4"
    }
}

// ডিবাউন্স ফাংশন 
function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}

updateBgImg()
// window.addEventListener('resize', function () {
//     updateBgImg()
// })
window.addEventListener("resize", debounce(updateBgImg, 200));