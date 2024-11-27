let ingreseNombre = prompt("¡Bienvenido a Harmony Psicoterapia! 😊 Por favor ingrese su nombre:")
console.log(ingreseNombre)

alert('¡Bienvenido(a) '+ingreseNombre+' a Harmony Psicoterapia!')

let nombreUsuario = prompt('Ahora ingrese su nombre de usuario (Si no tiene uno ¡No se preocupe! Sólo presione la tecla "Enter"')

if (nombreUsuario == '') {
    alert('¡No se preocupe! Continuaremos sin un nombre de usuario')
} else {
    alert(`¡Gracias! Se ha identificado como el usuario es: ${nombreUsuario}`)
}

console.log(nombreUsuario)

if (nombreUsuario != '') {
    let contra = prompt('Ahora ingrese su contraseña') 
    if (contra == '') {
        alert('Por favor ingrese su contraseña')
    } else {
        alert('¡Gracias por ingresar su contrseña!')
        alert('Su contraseña es: '+contra)
    }
}

prompt('¿En qué terapias y/o tramtamientos está interesado?')