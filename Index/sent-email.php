<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "30matias30@gmail.com";
    $asunto = "Nuevo mensaje desde el formulario";
    $cuerpo = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpo);

    // Redirigir a una página de confirmación
    header("Location: confirmacion.html");
}
?>