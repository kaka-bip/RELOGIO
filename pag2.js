function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Inicia a música de fundo
const music = document.getElementById('background-music');
music.play();

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Chama a função uma vez para evitar atraso