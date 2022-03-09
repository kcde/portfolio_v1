const menuBtn = document.getElementById('menu-btn');
const body = document.querySelector('body');
const themeToggle = document.querySelectorAll('.theme-toggle');
const toggles = document.querySelectorAll('.toggle');

function toggleTheme() {
    body.classList.toggle('theme__dark');
    themeToggleSwitchCordinator();
}

function saveThemeSelection(mode = 'default') {
    localStorage.setItem('kcde_portfolio_theme', mode);
}

function themeToggleSwitchCordinator() {
    const lightToggles = document.querySelectorAll('.light-toggle');
    const darkToggles = document.querySelectorAll('.dark-toggle');
    if (body.classList.contains('theme__dark')) {
        lightToggles.forEach((toggle) => {
            toggle.classList.remove('active');
        });

        darkToggles.forEach((toggle) => {
            toggle.classList.add('active');
        });
    } else {
        darkToggles.forEach((toggle) => {
            toggle.classList.remove('active');
        });

        lightToggles.forEach((toggle) => {
            toggle.classList.add('active');
        });
    }
}

function flipThemeSwitch() {
    themeToggle.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            if (
                e.target.classList.contains('toggle') &&
                !e.target.classList.contains('active')
            ) {
                toggleTheme();
                if (e.target.classList.contains('dark-toggle')) {
                    saveThemeSelection('dark');
                } else {
                    saveThemeSelection();
                }
            }
        });
    });
    themeToggleSwitchCordinator();
}

function setTheme() {
    const userThemeSelection = localStorage.getItem('kcde_portfolio_theme');
    if (userThemeSelection) {
        switch (userThemeSelection) {
            case 'dark':
                body.classList.add('theme__dark');
                break;
            default:
                body.classList.remove('theme__dark');
        }

        flipThemeSwitch();
    } else {
        const userPrefersDarkMode = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;

        if (userPrefersDarkMode) {
            body.classList.add('theme__dark');
        } else {
            body.classList.remove('theme__dark');
        }
        flipThemeSwitch();
    }
}

setTheme();
