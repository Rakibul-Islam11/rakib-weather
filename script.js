'use strict'
const catchimggOne = document.getElementById("imggOne"),
    catchsrcbox = document.getElementById("srcbox"),
    catchbtn = document.getElementById("btn"),
    catcherrorOutput = document.getElementById('errorOutput')


//inptbox validation
function inptValidation() {
    let getInptValue = catchsrcbox.value;
    if (getInptValue === '') {
        alert("Searchbox can not be empty");
    } else if (!isNaN(getInptValue)) {
        alert("Please type city name with alphabetic letters");
    } else {
        resAPi(getInptValue);
    }
}

//weather api
const apiKey = "4bf7034f65250d979e8e842ed16200fe";
function resAPi(recgetInptValue) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${recgetInptValue}&appid=${apiKey}`;
    fetch(apiURL)
        .then(res => res.json())
        .then(data => {
            if (data.cod === "404") {
                catcherrorOutput.innerHTML = `<h2>${data.message}</h2>`
            } else {
                weatherWork(data)
            }
        })
        .catch(error => console.error("Network Error:", error.message)); // নেটওয়ার্ক জনিত কোনো সমস্যা হলে এটিও দেখাবে
}

function weatherWork(recdata) {
    let recieveApiData = recdata;

}


// বাটনে ক্লিক করলে `inptValidation` ফাংশন কল হবে
catchbtn.addEventListener('click', inptValidation);
