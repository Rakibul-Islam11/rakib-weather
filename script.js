'use strict'




const catchimggOne = document.getElementById("imggOne"),
    catchsrcbox = document.getElementById("srcbox"),
    catchbtn = document.getElementById("btn"),
    catcherrorOutput = document.getElementById('errorOutput'),
    catchcelcius = document.getElementById("celcius"),
    catchsunrise = document.getElementById("sunrise"),
    catchsunset = document.getElementById("sunset"),
    catchcityName = document.getElementById('cityName'),
    catchvisibility = document.getElementById("visibility"),
    catchweather = document.getElementById('weather'),
    catchwind = document.getElementById('wind'),
    catchinfoMain = document.getElementById('infoMain'),
    catchpowerBy = document.getElementById('powerBy')


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
                // Clear previous data
                catchcityName.innerHTML = '';
                catchcelcius.innerHTML = '';
                catchsunrise.innerHTML = '';
                catchsunset.innerHTML = '';
                catchvisibility.innerHTML = '';
                catchweather.innerHTML = '';
                catchwind.innerHTML = '';
                catchpowerBy.innerHTML = '';
            } else {
                catcherrorOutput.innerHTML = '';
                
                weatherWork(data)
            }
        })
        .catch(error => console.error("Network Error:", error.message)); // নেটওয়ার্ক জনিত কোনো সমস্যা হলে এটিও দেখাবে
}

function weatherWork(recdata) {
    let recieveApiData = recdata;
    console.log(recieveApiData)
    catcherrorOutput.innerHTML = '';
    //cloud
    catchweather.innerHTML = `<h1>Weather: ${recieveApiData.weather[0].main} [${recieveApiData.weather[0].description}]</h1>`
    function convertTo() {
        catchcityName.innerHTML = `<h1>${recieveApiData.name}</h1>`
        //cecius con
        let getTemp = recieveApiData.main.temp;
        let defcel = (getTemp - 273.15).toFixed(2) + "°C";
        catchcelcius.innerHTML = `<h1>Temperature : ${defcel} </h1>`
        
        //sunrise and sunset con
        let sunrise = recieveApiData.sys.sunrise;
        let getTimeSunrise = new Date(sunrise * 1000);
        catchsunrise.innerHTML = `<h1>Sunrise : ${getTimeSunrise.toLocaleTimeString()}</h1>`
        //sunset
        let sunset = recieveApiData.sys.sunset;
        let getTimeSunset = new Date(sunset * 1000);
        catchsunset.innerHTML = `<h1>Sunset : ${getTimeSunset.toLocaleTimeString()}</h1>`

        //visibility con
        let visi = recieveApiData.visibility;
        let conVisi = visi / 1000
        catchvisibility.innerHTML = `<h1>Visibility : ${conVisi} km </h1>`

        //wind
        function wind() {
            let windd = recieveApiData.wind.deg;
            let direction;
            if (windd >= 0 && wind.deg <= 45) {
                direction = "North-East";
            } else if (windd > 45 && wind.deg <= 135) {
                direction = "East";
            } else if (windd > 135 && wind.deg <= 225) {
                direction = "South";
            } else if (windd > 225 && wind.deg <= 315) {
                direction = "West";
            } else {
                direction = "North-West";
            }
            //speed
            let spedd = recieveApiData.wind.speed;
            let conspeedd = (spedd * 3.6).toFixed(2)
            //gust
            let gustt = recieveApiData.wind.gust;
            let congustt = (gustt * 3.6).toFixed(2)
            console.log(congustt);
            
            
            
            catchwind.innerHTML = `<h1>Wind Speed : ${conspeedd}km/h <br>----Direction: ${direction} </h1>`
        }
        catchpowerBy.innerHTML = `<h5>Powerd by <span class="text-red-500">RAKIB</span></h5>`
        wind()
    }
    convertTo()
    

}


// বাটনে ক্লিক করলে `inptValidation` ফাংশন কল হবে
catchbtn.addEventListener('click', inptValidation);
