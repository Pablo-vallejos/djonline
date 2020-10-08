function reproducir(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // guarda en la variable el boton asociado al audio
    const boton = document.querySelector(`.boton[data-key="${e.keyCode}"]`); // guarda el boton asociado a la botonera
    if (!audio) return; // Para la función
    audio.currentTime = 0; // rebobina al inicio
    audio.play();
    boton.classList.add('sonando');

};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // lo saltea si no esta "transformado"
    this.classList.remove('sonando');
};

const botones = document.querySelectorAll(".boton");
botones.forEach(boton => boton.addEventListener('transitionend', removeTransition));

window.addEventListener('keyup', reproducir);
