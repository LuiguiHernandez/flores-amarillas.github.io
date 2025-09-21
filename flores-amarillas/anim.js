// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Nunca había amado como a ti", time: 7 },
  { text: "Desde que me quieres, comprendí", time: 13 },
  { text: "Que Dios tenía otros planes para mí", time: 19 },
  { text: "Y, hasta que tú llegaste, finalmente lo entendí", time: 22 },
  { text: "Que era nuestro momento", time: 28 },
  { text: "Y que ya nos tocaba", time: 32 },
  { text: "Ser feliz", time: 36 },
  { text: "¿Qué más puedo pedir? Si tú lo tienes todo", time: 39 },
  { text: "Contigo me aplaqué, me hiciste a tu modo", time: 44 },
  { text: "Por ti, mi corazón, ya no me cabe", time: 49 },
  { text: "Aquí, en el pecho", time: 53 },
  { text: "Quiero gastar los días de mi vida a tu lado", time: 57 },
  { text: "Me gusta que nos vean tomados de la mano", time: 62 },
  { text: "Que todo el mundo sepa que me tienes", time: 67 },
  { text: "Enamorado", time: 71 },
  { text: "Que Dios tenía otros planes para mí", time: 76 },
  { text: "Y, hasta que tú llegaste, finalmente lo entendí", time: 81 },
  { text: "Que era nuestro momento", time: 86 },
  { text: "Y que ya nos tocaba", time: 90 },
  { text: "Ser feliz", time: 94 },
  { text: "¿Qué más puedo pedir? Si tú lo tienes todo", time: 98 },
  { text: "Contigo me aplaqué, me hiciste a tu modo", time: 103 },
  { text: "Por ti, mi corazón, ya no me cabe", time: 108 },
  { text: "Aquí, en el pecho", time: 112 },
  { text: "Quiero gastar los días de mi vida a tu lado", time: 116 },
  { text: "Me gusta que nos vean tomados de la mano", time: 121 },
  { text: "Que todo el mundo sepa que me tienes", time: 126 },
  { text: "Enamorado", time: 130 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.2; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);