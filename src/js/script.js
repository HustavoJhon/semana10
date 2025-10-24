const toggle = document.getElementById("toogle");
const link = document.querySelector('link[rel="stylesheet"]');

toggle.addEventListener("click", () => {
  if (link.getAttribute("href") === "src/css/style.css") {
    link.setAttribute("href", "src/css/darkmode.css");
    toggle.textContent = "☀️ Modo Claro";
  } else {
    link.setAttribute("href", "src/css/style.css");
    toggle.textContent = "🌙 Modo Oscuro";
  }
});
