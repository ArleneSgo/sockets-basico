var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//on => escuchar
socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});
//emit => Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    // console.log('Se disparó el callback');
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})