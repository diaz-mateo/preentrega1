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

let producto = ''
let precio = 0
let cantidad = 0
let precioTotal = 0
let cantidadTotal = 0
let seguirComprando = true

do {
    producto = prompt(
        'Ahora dime ¿En qué tratamiento estás interesado(a)?\n - Psicología\n - Psicoterapia\n - Hipnoterapia\n - Terapia EMDR\n - Terapia ACT\n - Mindfulness'
    );

    // Validar que la entrada no esté vacía ni contenga números
    if (producto === '' || /\d/.test(producto)) {
        alert('¡Ups! Por favor ingresa el tratamiento en el que te encuentras interesado(a) (sin números) 😣');
        continue; // Vuelve al inicio del bucle
    }

    switch (producto) {
        case "Psicología":
            precio = 45;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        case "Psicoterapia":
            precio = 47;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        case "Hipnoterapia":
            precio = 49;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        case "Terapia EMDR":
            precio = 51;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        case "Terapia ACT":
            precio = 53;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        case "Mindfulness":
            precio = 55;
            alert(`Elegiste ${producto}. El precio es ${precio} soles.`);
            seguirComprando = false;
            break;

        default:
            alert("Producto no disponible. Por favor elige una de las opciones indicadas.");
            break;
    }
} while (seguirComprando);

alert(`Gracias por elegir el tratamiento: ${producto}`);

do {
    cantidad = parseInt(prompt('¡Genial! Ahora dime: ¿Para cuántas personas deseas el tratamiento indicado?'));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('¡Ups! La cantidad que ingresaste no es válida 😣');
    } else {
        break
    }

} while (seguirComprando);

alert(`¡Genial! Elegiste que el tratamiento de ${cantidad}`)