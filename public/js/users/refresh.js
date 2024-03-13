// refresh.js
var auth = firebase.apps[0].auth();

function refreshPage() {
    window.location.reload(true); // Refrescar la página
}
function salir(){
    auth.signOut().then(() => {
        document.location.href ='login.html';
    }).catch((error)=>{
        alert('Error al cerrar la sesión: ' + error.message);
    });
}

function setupRefresh() {
    var idleTime = 0;
    var idleInterval = setInterval(timerIncrement, 1000); // Cada segundo

    // Función para incrementar el contador de inactividad
    function timerIncrement() {
        idleTime++;
        if (idleTime > 180) { // 180 segundos = 3 minutos
            salir(); // Llamar a la función salir para cerrar sesión
            idleTime = 0; // Restablecer contador de inactividad
        }
    }

    // Evento para detectar la actividad del usuario (movimiento del ratón)
    document.addEventListener('mousemove', function() {
        idleTime = 0; // Restablecer contador de inactividad al mover el ratón
    });

    // Evento para detectar la actividad del usuario (tocar la pantalla)
    document.addEventListener('touchstart', function() {
        idleTime = 0; // Restablecer contador de inactividad al tocar la pantalla
    });
}

setupRefresh(); // Llamar a la función de configuración cuando se cargue el script