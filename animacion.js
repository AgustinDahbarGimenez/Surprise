let intervaloColor;
let timeoutLinking;
let timeoutAnimacion;

let musica = new Audio("TantiAuguri.mp3"); // Poné tu archivo de música en la carpeta

function lanzarConfetti() {
    let duration = 1500;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            spread: 70,
            origin: { y: 0.6 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function cambiarColor() {
    const lbl = document.getElementById('lblCompleanno');
    const colores = ["#ff1493", "#ff69b4", "#ffa500", "rgb(0, 4, 255)", "rgb(126, 75, 230)"];
    let i = 0;

    if (intervaloColor) clearInterval(intervaloColor);

    intervaloColor = setInterval(() => {
        lbl.style.color = colores[i];
        i = (i + 1) % colores.length;
    }, 500);
}

let visible = false;

function escribirTexto(texto, elemento, velocidad = 50) {
    return new Promise(resolve => {
        let i = 0;
        function escribir() {
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(escribir, velocidad);
            } else {
                elemento.innerHTML += "<br>";
                resolve();
            }
        }
        escribir();
    });
}

async function mostrarMensaje() {
    const mensaje = document.getElementById('lblCompleanno');
    const titulo = document.getElementById('titulo');
    const logo = document.getElementById('comunismo');
    const linkingpark = document.getElementById('linkingpark');
    const contenedorConfetti = document.getElementById('contenedorConfetti');

    // 🔒 CONTROL: evita múltiples ejecuciones
    if (!visible) {
        visible = true;

        mensaje.style.display = 'block';
        titulo.style.display = 'none';

        mensaje.innerHTML = "";

        cambiarColor();
        lanzarConfetti();
        musica.play().catch(() => {});

        await escribirTexto("Feliz Cumpleaños Cabra", mensaje);
        await escribirTexto("Sei geniale...", mensaje);
        await escribirTexto("Non dubitarne mai.", mensaje);

        setTimeout(() => {
            contenedorConfetti.style.display = 'block';
        }, 1500);

        logo.classList.add("show");

        setTimeout(() => {
            linkingpark.classList.add("show");
        }, 800);

    } else {

        // 🔥 RESET TOTAL

        musica.pause();
        musica.currentTime = 0;

        mensaje.innerHTML = "";
        mensaje.style.display = 'none';
        titulo.style.display = 'block';
        contenedorConfetti.style.display = 'none';

        logo.classList.remove("show");
        linkingpark.classList.remove("show");

        clearInterval(intervaloColor);
        clearTimeout(timeoutLinking);

        visible = false;
    }
    
}

function masConfetti() {
    lanzarConfetti();
}

