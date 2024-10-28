'use strict'
const catchimggOne = document.getElementById("imggOne");

function updateBgImg() {
    if ( window.innerWidth <= 600 ) {
        catchimggOne.src = "media/mobile-bg.mp4"
    } else {
        catchimggOne.src = "media/brand.png"
    }
}

window.addEventListener('resize', function () {
    updateBgImg()
})