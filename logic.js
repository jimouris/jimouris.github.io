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

// if (Math.floor(Math.random() * 2)) {
//     changeStylesheet();
// }

// Function to show the appropriate tab based on URL hash
function showTabFromHash() {
    // Get the hash from the URL, default to 'about' if no hash
    const hash = window.location.hash.slice(1) || 'about';

    // Hide all tab content
    const tabContents = document.getElementsByClassName('js-tabcontent');
    for (let content of tabContents) {
        content.style.display = 'none';
    }

    // Remove active class from all tabs
    const tabLinks = document.getElementsByClassName('js-tablinks');
    for (let link of tabLinks) {
        link.classList.remove('active');
    }

    // Show the selected tab content
    const selectedContent = document.getElementById(hash);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    // Add active class to the selected tab
    const selectedTab = document.querySelector(`a[href="#${hash}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Listen for hash changes
window.addEventListener('hashchange', showTabFromHash);

// Show initial tab on page load
document.addEventListener('DOMContentLoaded', showTabFromHash);

// Prevent default link behavior and handle navigation
document.querySelectorAll('.js-tablinks').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = link.getAttribute('href');
        window.location.hash = hash;
    });
});
