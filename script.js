const botonEntrar = document.getElementById("botonEntrar");
const portada = document.getElementById("portada");
const pantallaSobre = document.getElementById("pantallaSobre");
const sobreAnimado = document.getElementById("sobreAnimado");
const continuarCarta = document.getElementById("continuarCarta");
const bienvenida = document.getElementById("bienvenida");
const instruccionSobre = document.getElementById("instruccionSobre");
botonEntrar.addEventListener("click", function() {

  portada.classList.add("oculto");
  pantallaSobre.classList.remove("oculto");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

sobreAnimado.addEventListener("click", function() {

  if (sobreAnimado.classList.contains("abierto")) {
    return;
  }

  sobreAnimado.classList.add("abierto");

  instruccionSobre.textContent =
    "Una cartita hecha especialmente para ti ♡";

  setTimeout(function() {
    continuarCarta.classList.remove("oculto");
  }, 1800);

});

continuarCarta.addEventListener("click", function() {

  pantallaSobre.classList.add("oculto");
  bienvenida.classList.remove("oculto");
bienvenida.classList.add("entrada-magica");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
// 💌 DEDICATORIA Y PERGAMINO

const botonDedicatoria = document.querySelector(".lugar-cartas:not(.lugar-sorpresa)");
const paginaDedicatoria = document.getElementById("paginaDedicatoria");
const pergaminoCerrado = document.getElementById("pergaminoCerrado");
const cartaAntigua = document.getElementById("cartaAntigua");
const volverParque = document.getElementById("volverParque");

// Entrar a la dedicatoria
botonDedicatoria.addEventListener("click", function() {
  bienvenida.classList.add("oculto");
  paginaDedicatoria.classList.remove("oculto");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Abrir el pergamino
pergaminoCerrado.addEventListener("click", function() {
  pergaminoCerrado.classList.add("oculto");
  cartaAntigua.classList.remove("oculto");
});

// Volver al parque
volverParque.addEventListener("click", function() {
  paginaDedicatoria.classList.add("oculto");
  bienvenida.classList.remove("oculto");

  // Dejar el pergamino cerrado para la próxima visita
  pergaminoCerrado.classList.remove("oculto");
  cartaAntigua.classList.add("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 📸 NUESTRO ÁLBUM DE RECUERDOS

const botonRecuerdos = document.querySelector(".lugar-recuerdos");
const paginaRecuerdos = document.getElementById("paginaRecuerdos");
const paginasAlbum = document.querySelectorAll("#albumLibro .pagina-album");

const botonAnterior = document.getElementById("paginaAnterior");
const botonSiguiente = document.getElementById("paginaSiguiente");
const contadorPaginas = document.getElementById("contadorPaginas");
const volverParqueRecuerdos = document.getElementById("volverParqueRecuerdos");

let paginaActual = 0;

// Mostrar la página correspondiente
function mostrarPaginaAlbum() {
  paginasAlbum.forEach(function(pagina, indice) {
    pagina.classList.toggle("activa", indice === paginaActual);
  });

  contadorPaginas.textContent =
    (paginaActual + 1) + " / " + paginasAlbum.length;

  botonAnterior.disabled = paginaActual === 0;
  botonSiguiente.disabled = paginaActual === paginasAlbum.length - 1;
}

// Abrir el álbum desde la cámara
botonRecuerdos.addEventListener("click", function() {
  bienvenida.classList.add("oculto");
  paginaRecuerdos.classList.remove("oculto");

  paginaActual = 0;
  mostrarPaginaAlbum();

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Pasar a la siguiente página
botonSiguiente.addEventListener("click", function() {
  if (paginaActual < paginasAlbum.length - 1) {
    paginaActual++;
    mostrarPaginaAlbum();
  }
});

// Volver a la página anterior
botonAnterior.addEventListener("click", function() {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPaginaAlbum();
  }
});

// Regresar al parque
volverParqueRecuerdos.addEventListener("click", function() {
  paginaRecuerdos.classList.add("oculto");
  bienvenida.classList.remove("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Preparar el contador
mostrarPaginaAlbum();
// 🏎️ GARAJE DE MI PILOTO FAVORITO

const botonGaraje = document.querySelector(".lugar-f1");
const paginaGaraje = document.getElementById("paginaGaraje");
const volverParqueGaraje = document.getElementById("volverParqueGaraje");

const trofeosGaraje = document.querySelectorAll(".trofeo-garaje");
const mensajeTrofeo = document.getElementById("mensajeTrofeo");
const textoTrofeo = document.getElementById("textoTrofeo");

// Entrar al garaje
botonGaraje.addEventListener("click", function() {
  bienvenida.classList.add("oculto");
  paginaGaraje.classList.remove("oculto");

  mensajeTrofeo.classList.add("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mensajes de los trofeos
const mensajesGaraje = {
  1: "Primer lugar en mi corazao ♡",

  2: "No importa cuántos pilotos existan, tú siempre serás mi favorito y el único para mí",

  3: "Muchas gracias por todo mi amor, has ganado un premio especial que podrás reclamar en privado con tu princesa más tardeee jajaja"
};

// Descubrir los premios
trofeosGaraje.forEach(function(trofeo) {
  trofeo.addEventListener("click", function() {
    const numero = trofeo.dataset.mensaje;

    textoTrofeo.textContent = mensajesGaraje[numero];
    mensajeTrofeo.classList.remove("oculto");
  });
});

// Volver al parque
volverParqueGaraje.addEventListener("click", function() {
  paginaGaraje.classList.add("oculto");
  bienvenida.classList.remove("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 🎮 NUESTRA PRIMERA PARTIDA — LEFT 4 DEAD 2

const botonCasitaJuegos = document.querySelector(".lugar-juegos");
const paginaJuegos = document.getElementById("paginaJuegos");
const volverParqueJuegos = document.getElementById("volverParqueJuegos");

const escenasJuego = document.querySelectorAll(".escena-juego");
const botonesContinuarJuego = document.querySelectorAll(".continuar-juego");
const botonReiniciarJuego = document.querySelector(".reiniciar-juego");

let escenaActualJuego = 0;

// Mostrar una escena
function mostrarEscenaJuego(numero) {
  escenasJuego.forEach(function(escena) {
    escena.classList.remove("activa");
  });

  escenasJuego[numero].classList.add("activa");
  escenaActualJuego = numero;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Entrar a la casita de juegos
botonCasitaJuegos.addEventListener("click", function() {
  bienvenida.classList.add("oculto");
  paginaJuegos.classList.remove("oculto");

  mostrarEscenaJuego(0);
});

// Avanzar por la historia
botonesContinuarJuego.forEach(function(boton) {
  boton.addEventListener("click", function() {
    if (escenaActualJuego < escenasJuego.length - 1) {
      mostrarEscenaJuego(escenaActualJuego + 1);
    }
  });
});

// Volver a jugar desde el principio
botonReiniciarJuego.addEventListener("click", function() {
  mostrarEscenaJuego(0);
});

// Regresar al parque
volverParqueJuegos.addEventListener("click", function() {
  paginaJuegos.classList.add("oculto");
  bienvenida.classList.remove("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 🎁 SORPRESA FINAL — GEOMETRY DASH

const botonCasitaSorpresa = document.querySelector(".lugar-sorpresa");
const paginaSorpresa = document.getElementById("paginaSorpresa");

const regaloCerrado = document.getElementById("regaloCerrado");
const regaloRevelado = document.getElementById("regaloRevelado");

const abrirRegalo = document.getElementById("abrirRegalo");
const reiniciarRegalo = document.getElementById("reiniciarRegalo");
const volverParqueSorpresa = document.getElementById("volverParqueSorpresa");

// Entrar a la casita de la sorpresa
botonCasitaSorpresa.addEventListener("click", function() {
  bienvenida.classList.add("oculto");
  paginaSorpresa.classList.remove("oculto");

  // Mostrar la cajita cerrada al entrar
  regaloCerrado.classList.remove("oculto");
  regaloRevelado.classList.add("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Abrir el regalo
abrirRegalo.addEventListener("click", function() {
  regaloCerrado.classList.add("oculto");
  regaloRevelado.classList.remove("oculto");
});

// Volver a cerrar la cajita
reiniciarRegalo.addEventListener("click", function() {
  regaloRevelado.classList.add("oculto");
  regaloCerrado.classList.remove("oculto");
});

// Regresar al parque
volverParqueSorpresa.addEventListener("click", function() {
  paginaSorpresa.classList.add("oculto");
  bienvenida.classList.remove("oculto");

  window.scrollTo({ top: 0, behavior: "smooth" });
});