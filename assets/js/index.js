const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const sec = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let data = new Date()
    let hr = data.getHours();
    let min = data.getMinutes();
    let s = data.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    sec.textContent = s;
})