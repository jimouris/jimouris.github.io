function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("js-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function changeStylesheet() {
    var theme_element = document.getElementById("light-theme");
    if (theme_element === null) {
        theme_element = document.getElementById("dark-theme");
    }
    var twitter_light = document.getElementById("twitter-light");
    var twitter_dark = document.getElementById("twitter-dark");
    if (theme_element.id === "light-theme") {
        theme_element.id = "dark-theme";
        theme_element.href = "./style-dark.css";
        twitter_light.style.display = 'none';
        twitter_dark.removeAttribute("style");
    } else {
        theme_element.id = "light-theme";
        theme_element.href = "./style.css";
        twitter_light.removeAttribute("style");
        twitter_dark.style.display = 'none';
    }
}

if (Math.floor(Math.random() * 2)) {
    changeStylesheet();
}
