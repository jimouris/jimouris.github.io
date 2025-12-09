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

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Use saved theme, or default to dark
    const theme = savedTheme || 'dark';
    setTheme(theme);
}

function setTheme(theme) {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (theme === 'dark') {
        body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fa fa-sun';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.className = 'fa fa-moon';
        }
        localStorage.setItem('theme', 'light');
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();

    // Add click handler to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

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
