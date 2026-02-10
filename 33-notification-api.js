// Notification API
// La notificatons api es una interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña no esta activa
const button = document.querySelector(".button")

button,addEventListener('click', () =>{
    console.log("You made click")
    Notification.requestPermission().then(Permission =>{
        if (Permission === "granted") {
            new Notification ("Esta es una notificación",{
                body : "Aprendiendo JS en el SENA"
            });
            
        }else{
            console.log("permiso denegado")
        }
    });
});