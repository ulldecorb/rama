var i = 0;
var txt = `Me gustas cuando callas porque estás como ausente,
y me oyes desde lejos, y mi voz no te toca.
Parece que los ojos se te hubieran volado
y parece que un beso te cerrara la boca.

Como todas las cosas están llenas de mi alma
emerges de las cosas, llena del alma mía.
Mariposa de sueño, te pareces a mi alma,
y te pareces a la palabra melancolía.

Me gustas cuando callas y estás como distante.
Y estás como quejándote, mariposa en arrullo.
Y me oyes desde lejos, y mi voz no te alcanza:
déjame que me calle con el silencio tuyo.

Déjame que te hable también con tu silencio
claro como una lámpara, simple como un anillo.
Eres como la noche, callada y constelada.
Tu silencio es de estrella, tan lejano y sencillo.

Me gustas cuando callas porque estás como ausente.
Distante y dolorosa como si hubieras muerto.
Una palabra entonces, una sonrisa bastan.
Y estoy alegre, alegre de que no sea cierto.`; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var typewrite;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    typewrite = setTimeout(typeWriter, speed);
  }
}

function reset() {
  clearTimeout(typewrite);
    document.getElementById("demo").innerHTML = '';
    i = 0;
}