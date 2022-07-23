function toggleTheme() {
    const theme = document.getElementsByTagName('link')[0];
    const lightTheme = 'light.css';
    const darkTheme = 'dark.css';
    const newTheme = theme.getAttribute('href') === lightTheme ? darkTheme : lightTheme;
    theme.setAttribute('href', newTheme);
    // set new theme as preferred
    localStorage.setItem('theme', newTheme);
}

const theme = document.getElementsByTagName('link')[0];
const themeValue = localStorage.getItem('theme');
if (themeValue) {
    theme.setAttribute('href', themeValue);
}


