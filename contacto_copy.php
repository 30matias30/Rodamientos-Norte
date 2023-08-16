<?php 

  function validate($nombre, $email, $provincia, $localidad, $postal, $mensaje, $phone) {
    return !empty($name) && !empty($email) && !empty($provincia) && !empty($localidad) &&  !empty($postal) && !empty($mensaje) && !empty($phone);

  }


  if( isset($_POST["form"])){

    $status = "";

    if( validate(...$_POST) ) {

      $name = $_POST["name"];
      $email = $_POST["email"];
      $provincia = $_POST["provincia"];
      $localidad = $_POST["localidad"];
      $postal = $_POST["postal"];
      $mensaje = $_POST["mensaje"];
      $phone = $_POST["phone"];


      $status = "success";

    } else {

      $status = "error";

    }

  };

?>


<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rodamientos Norte</title>
    <link rel="shortcut icon" href="./ICO/Group 2.png">

    <!-- Style -->
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./preloader.css">
    <link rel="stylesheet" href="./sliderNews.css">
    <link rel="stylesheet" href="./second_style.css">
    <link rel="stylesheet" href="./catalog-style.css">
    <link rel="stylesheet" href="./contacto-style.css">
    <link rel="stylesheet" href="./productos-style.css">

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    
</head>
<body>

    <div id="preloader"></div>
    <div id="preloaderLogo"></div>
  

    <div id="header" class="header">

        <div id="icon" class="icon"></div>
  
    </div>
  
    <div id="optionsBar"> 
    
        <div>
          <div id="ini" class="option" data-url="./index.html">NORTE</div>
          <div id="prod" class="option" data-url="./productos.html">PRODUCTOS</div>
          <div id="inst" class="option" data-url="./institucional.html">INSTITUCIONAL</div>
          <div id="catalog" class="option" data-url="./catalogos.html">CATALOGOS</div>
          <div id="contact" class="option" data-url="./contacto.html">CONTACTO</div>
        </div>

    </div>
       <!-- NO CHANGES FROM THE INDEX - LANDING -->



    <div class="contact-top-body">

        <h1>ENCONTRANOS EN MAPS</h1>

        <div class="contact-map-container">

            <div class="jm-map map-card">
                <h2>JESUS MARIA</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.56414233631193!2d-64.0903262963276!3d-30.984066015970395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94326399cc04ffef%3A0x355a867a8a4c1a97!2sRodamientos%20NORTE!5e0!3m2!1ses!2sar!4v1691704067833!5m2!1ses!2sar" width="500
                px" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="vt-map map-card">
                <h2>VILLA DEL TOTORAL</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1212.8089934929094!2d-64.061013848688!3d-30.708788598308214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94326de0cbf60f59%3A0x448a962e2dea9bc4!2sTorner%C3%ADa%20Vendrame%20-%20Rodamientos%20Norte!5e0!3m2!1ses!2sar!4v1691704129299!5m2!1ses!2sar" width="500
                " height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
        <div class="direction">
            <p>Ameghino 496, esquina J.B. Alberdi - Jesús María - Córdoba</p>
            <p>Calle los Timones S/N - Villa del Totoral - Córdoba</p>
        </div>

        <h1>COMUNICATE CON NOSOTROS</h1>

        <p>Comunicate con nosotros a traves de las lineas telefonicas y whatsapp. Nuestro personal esta listo para escucharte y asesorarte en sus dudas. </p>

        <div class="contact-links">

            <div class="contact-links-card">
                <h1>JESUS MARIA </h1>
                
                <div>
                  <img src="./ICO/phone (verde).svg" alt="" srcset="">
                  <div>(3525) 608668</div>
                </div>
                <div>
                  <img src="./ICO/WA(verde).svg" alt="" srcset="">
                  <div>(3525) 478688 // 416731</div>
                </div>         
                
            </div>

            <div class="contact-links-card">
                <h1>VILLA DEL TOTORAL</h1>

                <div>
                  <img src="./ICO/phone (verde).svg" alt="" srcset="">
                  <div>(3525) 608668</div>
                </div>
                <div>
                  <img src="./ICO/WA(verde).svg" alt="" srcset="">
                  <div>(3525) 478688 // 416731</div>
                </div>         


            </div>

        </div>

        <h1>ESCRIBINOS Y TE RESPONDEREMOS</h1>

    </div>

    <div class="contact-bottom-body">

      <div></div>
      
      <div></div>

      <div class="contact-form-card">

        <p>Porfavor, complete los datos solicitados para una mejor comunicacion</p>
        <div></div>

        <form action="./" method="post">
          <div>

            <input type="text" name="nombre" id="nombre" placeholder="Nombre y Apellido">
            <input type="text" name="provincia" id="provincia" placeholder="Provincia">
  

          </div>
          <div>

            <input type="email" name="email" id="email" placeholder="Correo Electrónico">
            <input type="text" name="localidad" id="localidad" placeholder="Localidad">
            <input type="number" name="postal" min="0" max="4" id="cdp" placeholder="C. Postal">

          </div>
          <div>

            <input type="tel" name="phone" id="phone" placeholder="Teléfono/Celular">
            <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Escribe tu mensaje..."></textarea>

          </div>

          <button id="contact-form-btn" type="submit">ENVIAR</button>


        </form>


      </div>

    </div>
    


       <!-- NO CHANGES FROM THE INDEX - LANDING -->

       <div class="green-separator">

        <div><h1>SOMOS RODAMIENTOS NORTE</h1><img src="./ICO/Vector.svg" alt="" srcset=""></div>
        <p>En Rodamientos Norte, nuestra pasión por el servicio es lo que impulsa cada acción que tomamos. Nos apasiona brindar soluciones efectivas y ser la opción en la que nuestros clientes confíen para sus proyectos.</p>
  
      </div>
  
      <div class="footer-photo">
  
        <img src="./Pictures/B&W-footer.png" alt="" srcset="">
  
      </div>
  
      <div class="footer">
  
        <div id="icon-footer"></div>
        <div class="options-footer">
  
          <p>MENÚ</p>
  
          <a href="">INICIO</a>
          <a href="">PRODUCTOS</a>
          <a href="">CATÁLOGOS</a>
          <a href="">INSTITUCIONAL</a>
          <a href="">CONTACTO</a>
  
        </div>
        <div class="contact-footer">
  
          <p>DIRECCIÓN Y TELEFONOS</p>
  
          <div><div class="pointer-footer contact-ico"><img src="./ICO/pin - svg.svg" alt=""></div>Ameghino 496, esquina J.B. Alberdi - Jesús María - Córdoba</div>
          <div>
            <div><div class="whatsApp-footer contact-ico"><img src="./ICO/WA - svg.svg" alt=""></div>3525478691 // 3525416731</div>
            <div><div class="phone-footer contact-ico"><img src="./ICO/phone - svg.svg" alt=""></div>3525-608668</div>
          </div>
  
          <div><div class="pointer-footer contact-ico"><img src="./ICO/pin - svg.svg" alt=""></div>Calle los Timones S/N - Villa del Totoral - Córdoba</div>
          <div>
            <div><div class="whatsApp-footer contact-ico"><img src="./ICO/WA - svg.svg" alt=""></div>3525478691 // 3525416731</div>
            <div><div class="phone-footer contact-ico"><img src="./ICO/phone - svg.svg" alt=""></div>3525-608668</div>
          </div>
  
        </div>  
  
    
      <script src="./scrypt.js"></script>

</body>
</html>