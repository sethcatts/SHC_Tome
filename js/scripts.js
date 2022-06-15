document.onkeydown = handleKeyPress;
console.log(user_settings.name);

//Orgasmicly simple code
function handleKeyPress(e) {
    e = e || window.event;
    if (e.keyCode in siteDict) {
        window.open(user_settings.siteDict[e.keyCode], target = "_self");
    }
}

function randomQuote() {
    var selectedQuote = user_settings.quotes[Math.floor(Math.random() * user_settings.quotes.length)];
    document.getElementById('pageQuote').innerHTML = selectedQuote;
}

function randomWall() {
    var selectedQuote = user_settings.quotes[Math.floor(Math.random() * user_settings.quotes.length)];
    document.getElementById('pageQuote').innerHTML = selectedQuote;
}

function randomStinger() {
    var imageList = ['s (1).gif', 's (1).jpg', 's (1).png', 's (10).JPG', 's (10).png', 's (11).JPG', 's (11).png', 's (12).JPG', 's (12).png', 's (13).JPG', 's (13).png', 's (14).JPG', 's (14).png', 's (15).jpg', 's (15).png', 's (16).jpg', 's (17).JPG', 's (18).jpg', 's (19).jpg', 's (2).jpg', 's (2).PNG', 's (20).jpg', 's (21).jpg', 's (22).jpg', 's (23).jpg', 's (24).jpg', 's (25).jpg', 's (26).jpg', 's (27).jpg', 's (28).jpg', 's (29).jpg', 's (3).jpg', 's (3).PNG', 's (30).jpg', 's (31).jpg', 's (32).jpg', 's (33).jpg', 's (34).jpg', 's (35).jpg', 's (36).jpg', 's (37).jpg', 's (38).jpg', 's (39).jpg', 's (4).JPG', 's (4).png', 's (40).jpg', 's (41).jpg', 's (42).jpg', 's (43).jpg', 's (44).jpg', 's (5).jpg', 's (5).PNG', 's (6).JPG', 's (6).png', 's (7).JPG', 's (7).png', 's (8).JPG', 's (8).png', 's (9).JPG', 's (9).png']
    var selectedImage = "url('/images/stingers/" + imageList[Math.floor(Math.random() * imageList.length)] + "')";
    var stingerDiv = document.getElementById('stinger-image');
    console.log(selectedImage)
    stingerDiv.style.backgroundImage = selectedImage;
}

function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + "" + timeOfDay;


    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateString = days[currentTime.getDay()] + ", " + months[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear();

    // Update the time display
    document.getElementById("time").innerHTML = currentTimeString;
    document.getElementById("date").innerHTML = dateString;
}


function updateWeather() {
    console.log("Requesting Weather Data")
    let weather = {};
    let request = new XMLHttpRequest();
    request.open("GET", "http://api.weatherapi.com/v1/forecast.json?key=105f9c9a5ec7404b871193656221406&q=22901&days=3&aqi=no&alerts=no");
    request.send();
    request.onload = () => {
        weather = JSON.parse(request.response);
        console.log(weather);
        let temp = weather.current.temp_f + "F";
        document.getElementById("temp").insertAdjacentText("beforeend", temp);
        document.getElementById("condition").insertAdjacentText("beforeend", weather.current.condition.text);
        document.getElementById("current-weather-icon").src = weather.current.condition.icon;

    }
}


//randomQuote();
//randomStinger();
updateWeather();
updateClock();
setInterval('updateClock()', 1000);
setInterval('updateWeather()', 10000);