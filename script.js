'use strict'
const catchimggOne = document.getElementById("imggOne");

function updateBgImg() {
    if ( window.innerWidth <= 600 ) {
        catchimggOne.src = "public/media/mobile-bg.mp4"
    } else {
        catchimggOne.src = "public/media/pc-bg.mp4"
    }
}

window.addEventListener('resize', function () {
    updateBgImg()
})