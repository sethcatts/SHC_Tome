document.onkeydown = handleKeyPress;

//Orgasmicly simple code
function handleKeyPress(e) {
    e = e||window.event;
    if(e.keyCode in siteDict) {
        window.open(user_settings.siteDict[e.keyCode], target="_self");
    }
}

console.log(user_settings.name);

