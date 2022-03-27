// Everything Themeing and mobile nav
const menuOpenBtn = document.getElementById('menu-btn');
const menuCloseBtn = document.getElementById('menu-close');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
const body = document.querySelector('body');
const themeToggle = document.querySelectorAll('.theme-toggle');
const toggles = document.querySelectorAll('.toggle');
console.log(mobileNavLinks);

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

function preventScroll(e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  return false;
}

function openMenu() {
  // mobileNav.classList.remove('slide-up');

  gsap.to(mobileNav, {
    y: 0,
    ease: 'power2.in',
    duration: 0.5,
  });

  body.addEventListener('wheel', preventScroll, { passive: false });
  body.addEventListener('touchmove', preventScroll, { passive: false });
}

function closeMenu() {
  gsap.to(mobileNav, {
    y: '-100vh',
    ease: 'power2.out',
    duration: 0.5,
  });
  body.removeEventListener('wheel', preventScroll, { passive: false });
  body.removeEventListener('touchmove', preventScroll, { passive: false });
}

mobileNavLinks.forEach((el) => {
  el.addEventListener('click', () => {
    closeMenu();
  });
});

setTheme();
menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);

//Everything smooth scroll
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.2,
});

// Everything animation
import { gsap } from 'gsap';
