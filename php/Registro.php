<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
<?php

include 'Connexion.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Accede a los valores enviados desde el formulario
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];
    $repitaContrasena = $_POST["contrasena2"];

    if ($contrasena == $repitaContrasena) {
        $sql = "INSERT INTO usuarios (Nombres, Apellidos, Telefono, Correo, Contrasena) 
            VALUES ('$nombres', '$apellidos', '$telefono', '$correo', '$contrasena')";

        if ($conn->query($sql) === TRUE) {
            echo 'Toastify({
                text: "Registro exitoso",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();';
        } else {
            echo "Error al registrar: " . $conn->error;
        }
        $conn->close();
    }else{

    }
}
