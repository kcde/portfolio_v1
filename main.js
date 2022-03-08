const menuBtn = document.getElementById('menu-btn');
const body = document.querySelector('body');
const themeToggle = document.querySelectorAll('.theme-toggle');
const toggles = document.querySelectorAll('.toggle');

function toggleTheme() {
    body.classList.toggle('theme__dark');
}

function flipThemeSwitch() {
    themeToggle.forEach((toggle) => {
        toggle.addEventListener('click', (e) => {
            toggleTheme();
            toggles.forEach((toggle) => {
                toggle.classList.remove('active');
            });
            if (e.target.classList.contains('toggle')) {
                e.target.classList.add('active');
            }
        });
    });
}

flipThemeSwitch();
