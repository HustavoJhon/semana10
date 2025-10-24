const dark = document.getElementById("toogle");
const link  =  document.querySelector('link[rel="stylesheet"]');

toggle.addEventListener("click", () => {
    if (link.getAttribute("href") === "src/css/style.css") {
      link.setAttribute("href", "src/css/dark.css");
      dark.textContent = "☀️ Modo Claro";
    } else {
      link.setAttribute("href", "src/css/style.css");
      dark.textContent = "🌙 Modo Oscuro";
    }
  });