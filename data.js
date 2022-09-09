let body = document.body;
let iconLight = document.getElementById("iconLight");
let iconDark = document.getElementById("iconDark");
let iconRainbow = document.getElementById("iconRainbow");
let textHome = document.getElementById("textHome");
let textReset = document.getElementById("textReset");
let textDarkMode = document.getElementById("textDarkMode");
let textContent1 = document.getElementById("textContent1");
let rainbowModeLeft = 10;
let rainbowModeClick = 0;
let darkModeClick = 0;
const rainbowModeDefault = 0;

textReset.style.display = "none";
iconDark.style.display = "none";
iconRainbow.style.display = "none";

function buttonMode(mode) {
  textContent1.style.display = "block";
  if (mode == "rainbow") {
    rainbowModeClick += 1;
    iconLight.style.display = "none";
    iconDark.style.display = "none";
    iconRainbow.style.display = "block";
    body.classList.remove("rainbow1", "rainbow2", "rainbow3", "rainbow4", "rainbow5");
    if (rainbowModeLeft == 10 || rainbowModeLeft == 5) {
      body.classList.add("rainbow1");
    }
    if (rainbowModeLeft == 9 || rainbowModeLeft == 4) {
      body.classList.add("rainbow2");
    }
    if (rainbowModeLeft == 8 || rainbowModeLeft == 3) {
      body.classList.add("rainbow3");
    }
    if (rainbowModeLeft == 7 || rainbowModeLeft == 2) {
      body.classList.add("rainbow4");
    }
    if (rainbowModeLeft == 6 || rainbowModeLeft == 1) {
      body.classList.add("rainbow5");
    }
    if (rainbowModeLeft == 0) {
      textContent1.textContent = "Masa Trial Udah Habis Cuy";
      textHome.style.display = "none";
      textReset.style.display = "block";
      return;
    }

    rainbowModeLeft -= 1;
    textContent1.textContent = `Anda Sudah Memakai Trial Pelangi Sebanyak ${rainbowModeClick}x, Sisa Trial ${rainbowModeLeft}`;
  }
  if (mode == "dark") {
    body.classList.remove("rainbow1", "rainbow2", "rainbow3", "rainbow4", "rainbow5");
    darkModeClick += 1;
    if (darkModeClick % 2 !== 0) {
      textDarkMode.textContent = "Light Mode";
      textContent1.textContent = "Gelap Cuy";
      iconLight.style.display = "none";
      iconDark.style.display = "block";
      iconRainbow.style.display = "none";
      body.classList.add("dark");
    } else {
      textContent1.textContent = "Terang Lagi";
      textDarkMode.textContent = "Dark Mode";
      iconLight.style.display = "block";
      iconDark.style.display = "none";
      iconRainbow.style.display = "none";
      body.classList.remove("dark");
      body.classList.add("default");
    }
  }
}

function buttonHome() {
  textContent1.style.display = "none";
}

function buttonReset() {
  location.reload();
}
