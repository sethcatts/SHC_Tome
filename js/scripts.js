document.onkeydown = handleKeyPress;
console.log(user_settings.name);

//Orgasmicly simple code
function handleKeyPress(e) {
    e = e||window.event;
    if(e.keyCode in siteDict) {
        window.open(user_settings.siteDict[e.keyCode], target="_self");
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
    var imageList = ['stinger (1).gif', 'stinger (1).jpg', 'stinger (1).png', 'stinger (10).JPG', 'stinger (11).JPG', 'stinger (12).JPG', 'stinger (13).JPG', 'stinger (14).JPG', 'stinger (15).jpg', 'stinger (16).jpg', 'stinger (17).JPG', 'stinger (18).jpg', 'stinger (19).jpg', 'stinger (2).jpg', 'stinger (2).PNG', 'stinger (20).jpg', 'stinger (21).jpg', 'stinger (22).jpg', 'stinger (23).jpg', 'stinger (24).jpg', 'stinger (25).jpg', 'stinger (26).jpg', 'stinger (3).jpg', 'stinger (3).PNG', 'stinger (4).JPG', 'stinger (4).png', 'stinger (5).jpg', 'stinger (5).PNG', 'stinger (6).JPG', 'stinger (6).png', 'stinger (7).JPG', 'stinger (7).png', 'stinger (8).JPG', 'stinger (8).png', 'stinger (9).JPG', 'stinger (9).png']
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
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").innerHTML = currentTimeString;
}

randomQuote();
randomStinger();
updateClock();
setInterval('updateClock()', 1000);