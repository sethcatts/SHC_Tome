document.onkeydown = handleKeyPress;
const siteDict = {
    81:"http://www.google.com",     //Q
    89:"https://www.youtube.com/"   //Y
}

//Orgasmicly simple code
function handleKeyPress(e) {
    e = e||window.event;
    if(e.keyCode in siteDict) {
        window.open(siteDict[e.keyCode], target="_self");
    }
}