const themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme != null) {
  setTheme(theme);
}

for (let i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener("click", () => {
    let mode = themeDots[i].id;
    console.log("Option clicked");
    setTheme(mode);
  });
}

function setTheme(mode) {
  let linkHref = document.getElementById("theme-style");

  switch (mode) {
    case "light-mode":
      linkHref.href = "./default.css";
      break;
    case "blue-mode":
      linkHref.href = "./blue.css";
      break;
    case "green-mode":
      linkHref.href = "./green.css";
      break;
    case "purple-mode":
      linkHref.href = "./purple.css";
      break;
  }

  localStorage.setItem("theme", mode);
}

