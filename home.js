const THEME_KEY = "themePreference";
const isMobile = window.matchMedia("(max-width: 768px)").matches;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem(THEME_KEY);
const body = document.body;

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark-mode");
        localStorage.setItem(THEME_KEY, "dark");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem(THEME_KEY, "light");
    }
}

if (currentTheme) {
    applyTheme(currentTheme);
} else {
    applyTheme(prefersDarkScheme.matches ? "dark" : "light");
}

const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", () => {
    applyTheme(body.classList.contains("dark-mode") ? "light" : "dark");
});

prefersDarkScheme.addEventListener("change", (e) => {
    applyTheme(e.matches ? "dark" : "light");
});

document.addEventListener('keydown', function (event) {
    if (!isMobile && event.key === 'Tab') {
        event.preventDefault();
        document.getElementById('theme-toggle').click();
    }
});


const themeIcon = document.getElementById("theme-icon");
const themePrefix = document.getElementById("theme-prefix");

console.log(themeIcon, themePrefix);


const prefixDesktop = "press &#60;tab&#62; or click for ";
const prefixMobile = "click for ";

themePrefix.innerHTML = prefixDesktop;

function updateThemeIcon() {
    themePrefix.innerHTML = isMobile ? prefixMobile : prefixDesktop;
    themeIcon.innerHTML = body.classList.contains("dark-mode") ? "🌕-mode" : "🌘-mode";
}

updateThemeIcon();

themeToggleButton.addEventListener("click", updateThemeIcon);
prefersDarkScheme.addEventListener("change", updateThemeIcon);
