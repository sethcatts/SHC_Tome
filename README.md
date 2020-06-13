# Tome
Tome (Tab/Home) is a small page I put together simply because I couldn't find a new tab home screen that did exactly what I want. I put together Tome in roughly an afternoon. I ignored some best practices and didn't leave any comments. Tome reflects my ability to hack together a solution quickly, not my skill as a developer.

![example image](https://i.imgur.com/sXbkx4I.jpg)

# Tome's (limited) features
### Bookmark Boxes
Bookmark boxes contain specified links to sites. They must be changed by editing the HTML. I toyed with the idea of populating them with a on-pageload script that matched the keybind dictionary but since these are fairly static for me I'm holding off. Also, I would have had to convert all the links in the dictionary to objects with some "category" property so that things got put in the right place. 

### HotKeys
Bookmarks have a hotkey associated with them. When the page is in focus and a relevant hotkey is pressed the bookmark is opened.
There are two main issues with this, double bound keys and page focus. 
**Double Bound Keys:** As far as I know there is no fix for this. Example: F1 in chrome will open the *chrome help center* and also whatever Tome has bound to F1
**Page Focus:** When a new tab is created the focus is in the browsers address bar, hotkeys will not work until the user hits tab or clicks on the actual page.

#### Nice

I was very happy with this little function combined with the user.js dictionary. A much better solution than some large *switch* or *elif* block to assign keys.
```Javascript
function handleKeyPress(e) {
    e = e||window.event;
    if(e.keyCode in siteDict) {
        window.open(user_settings.siteDict[e.keyCode], target="_self");
    }
}
```

### Quotes
On page load, a random quote is placed above bookmark boxes. These quotes are pulled from an array in the user.js file.
