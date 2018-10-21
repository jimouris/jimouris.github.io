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
    var theme_elements = document.getElementsByName("bgtheme");
    var theme_elements_link = document.getElementsByName("bgthemelink");

    for (let i = 0; i < theme_elements.length; i++) {
        theme_elements[i].disabled = !theme_elements[i].disabled; // for background, colors and stuff

        if (theme_elements_link[i].style.display === 'none') { // for twitter theme
            theme_elements_link[i].removeAttribute("style");
        } else {
            theme_elements_link[i].style.display = 'none';
        }
    }
}

if (Math.floor(Math.random() * 2)) {
    changeStylesheet();
}
