const socket = io('https://prueba-socket-dev-bgjk.2.us-1.fl0.io');
const formulario = document.querySelector('#formulario');
const mensajeInput = document.querySelector('#mensjae-input');
const mensajes = document.querySelector('#mensajes');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const mensaje = { mensaje: mensajeInput.value };

    socket.emit('mensaje-frontend', mensaje);

    formulario.reset();


});

socket.on('mensaje-backend', data => {
    const { mensaje } = data;

    mensajes.innerHTML += `<li>${mensaje}</li>`;
});