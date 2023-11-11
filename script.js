let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

document.addEventListener("DOMContentLoaded", function () {
  let verMasBtns = document.querySelectorAll(".ver-mas");

  verMasBtns.forEach(function (verMasBtn) {
    verMasBtn.addEventListener("click", function () {
      this.parentElement.parentElement.lastElementChild.classList.toggle(
        "content-hidden"
      );

      this.textContent =
        this.textContent === "Ver más" ? "Ver menos" : "Ver más";
    });
  });
});
