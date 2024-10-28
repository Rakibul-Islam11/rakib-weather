'use strict'
const catchimggOne = document.getElementById("imggOne");

function updateBgImg() {
    if ( window.innerWidth <= 600 ) {
        catchimggOne.src = "media/mobile-bg.mp4"
    } else {
        catchimggOne.src = "media/pc-bg.mp4"
    }
}

window.addEventListener('resize', function () {
    updateBgImg()
})