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

    setInterval(() => {
        lbl.style.color = colores[i];
        i = (i + 1) % colores.length;
    }, 500);
}


let visible = false;

function mostrarMensaje() {
    const mensaje = document.getElementById('lblCompleanno');
    const titulo = document.getElementById('titulo');
    const logo = document.getElementById('comunismo');
    
    if (!visible) {
        mensaje.style.display = 'block';
        titulo.style.display = 'none';
        logo.style.display = 'block';
        
        cambiarColor();
        lanzarConfetti();
        musica.play().catch(() => {});
        
        visible = true;
    } else {
        mensaje.style.display = 'none';
        titulo.style.display = 'block';
        logo.style.display = 'none';
        
        visible = false;
    }
}

