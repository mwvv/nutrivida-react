const CORREO_PERMITIDO = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/

const LARGO_MAXIMO_CORREO = 100
const LARGO_MINIMO_CLAVE = 4
const LARGO_MAXIMO_CLAVE = 10

export function validarCorreo(valor) {
    const correo = valor.trim()

    if (correo === '') {
        return 'Escribe tu correo electrónico.'
    }
    if (correo.length > LARGO_MAXIMO_CORREO) {
        return 'El correo no puede tener más de ' + LARGO_MAXIMO_CORREO + ' caracteres.'
    }
    if (!CORREO_PERMITIDO.test(correo)) {
        return 'Usa un correo terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    }
    return ''
}

// En la contraseña no se usa trim(): un espacio puede ser parte de la clave.
export function validarContrasena(valor) {
    if (valor === '') {
        return 'Escribe tu contraseña.'
    }
    if (valor.length < LARGO_MINIMO_CLAVE || valor.length > LARGO_MAXIMO_CLAVE) {
        return 'La contraseña debe tener entre ' + LARGO_MINIMO_CLAVE + ' y ' + LARGO_MAXIMO_CLAVE + ' caracteres.'
    }
    return ''
}
