<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webadas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos ha fallado: " . $conn->connect_error);
}else{
}
