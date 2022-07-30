function toggleTheme() {
    const theme = document.getElementsByTagName('link')[0];
    const lightTheme = "/ist-assignment2022/light.css";
    const darkTheme = "/ist-assignment2022/dark.css";
    const newTheme = theme.getAttribute('href') === lightTheme ? darkTheme : lightTheme; // If theme is light mode, then set newTheme as lightTheme, if not, then set newTheme as darkTheme.

    theme.setAttribute('href', newTheme);    // Set theme as the one chosen by newTheme variable.
    localStorage.setItem('theme', newTheme); // Save theme choice in local storage.
}

const theme = document.getElementsByTagName('link')[0];
const themeValue = localStorage.getItem('theme');
if (themeValue) {
    theme.setAttribute('href', themeValue);
}

function toggleTextTheme() {
    var x = document.getElementById("dark-light-button");                                   //
    const lightTheme = "/ist-assignment2022/light.css";                                     //
    const darkTheme = "/ist-assignment2022/dark.css";                                       // A bunch of
    const newTheme = theme.getAttribute('href') === lightTheme ? darkTheme : lightTheme;    // VARIABLES
    const lightmode = "Toggle Light Mode";                                                  //
    const darkmode = "Toggle Dark Mode";                                                    //

    if (newTheme === lightTheme) {  // Checks if the theme is light mode.
        x.innerHTML = lightmode;    // Displays Toggle Dark Mode text.
    }
    if (newTheme === darkTheme) {   // Checks if the theme is dark mode.
        x.innerHTML = darkmode;     // Displays Toggle Light Mode text.
    }
}