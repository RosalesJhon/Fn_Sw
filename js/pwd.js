const password = document.getElementById("password");
const mostrar = document.getElementById("mostrar");
const ocultar = document.getElementById("ocultar");

mostrar.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        mostrar.style.display = "none";
        ocultar.style.display = "block";
    } else {
        password.type = "password";
        mostrar.style.display = "none";
        ocultar.style.display = "block";
    }
});

ocultar.addEventListener("click", function () {
    if (password.type === "text") {
        password.type = "password";
        ocultar.style.display = "none";
        mostrar.style.display = "block";
    } else {
        password.type = "text";
        ocultar.style.display = "none";
        mostrar.style.display = "block";
    }
});