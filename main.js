let ingreseNombre = prompt("¡Bienvenido a Harmony Psicoterapia! 😊 Por favor ingrese su nombre:")
console.log(ingreseNombre)

if (ingreseNombre == '') {
    alert('¡No te preocupes, no es necesario indicar tu nombre!')
} else {
    alert('¡Bienvenido(a) '+ingreseNombre+' a Harmony Psicoterapia!')
}

let userName = '';
let password = '';
let confirmUserName = '';
let confirmPassword = '';
let continuar = true;

do {
    // Solicitar nombre de usuario
    userName = prompt('Por favor, ingresa tu nombre de usuario (¡Sólo si tienes uno!)');

    if (userName === '' || userName === null) {
        alert('¡No te preocupes! Continuarás como invitado en la página.');
        continuar = false; // Sale del bucle si el usuario decide ser invitado.
    } else {
        alert('¡Bienvenido usuario: ' + userName + '!');

        // Confirmar nombre de usuario
        do {
            confirmUserName = prompt('Por favor, confirma tu nombre de usuario:');
            if (confirmUserName !== userName) {
                alert('El nombre de usuario no coincide. Intenta de nuevo.');
            }
        } while (confirmUserName !== userName);

        // Solicitar contraseña
        password = prompt('Ahora, ¿puedes ingresar tu contraseña?');
        if (password === '' || password === null) {
            alert('¡No olvides ingresar tu contraseña!');
        } else {
            // Confirmar contraseña
            do {
                confirmPassword = prompt('Por favor, confirma tu contraseña:');
                if (confirmPassword !== password) {
                    alert('La contraseña no coincide. Intenta de nuevo.');
                }
            } while (confirmPassword !== password);

            // Finalizar si todo está correcto
            alert('¡Perfecto! Tu usuario es: ' + userName + ' y tu contraseña es: ' + password + '. ¡Bienvenido(a) a mi página!');
            continuar = false; // Sale del bucle.
        }
    }
} while (continuar);