//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
let imagen1 = document.getElementById("imagen1");

//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/3hYtANQYrE6pd2PbtEyTIy/top-tracks?country=US";

//2. Definir el token o permiso de acceso
let token = "Bearer BQCtlJdKkmA95GIbcNbACo4EeVJ6g43-5-UfVuoeUiANvp3WcMWGY8VpotyJyDVmQFs0czSa8pbcORf05M8TZlMTxrYwvKqH2HWe--QMhYB4fF67ZB-kKQYyGwdEIDWHXUyQKsgMnuqkV1bcERk";

//3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].album.images);
    console.log(respuesta.tracks[0].album.images[0]);
    console.log(respuesta.tracks[0].album.images[0].url);
    imagen1.src = respuesta.tracks[0].album.images[0].url;

}

//7. enviamos la peticion
objetoAJAX.send();