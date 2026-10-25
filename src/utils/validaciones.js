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

const SOLO_LETRAS = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/
const FORMATO_RUN = /^\d{6,8}[0-9K]$/

const LARGO_MAXIMO_NOMBRE = 50
const LARGO_MAXIMO_APELLIDOS = 100
const LARGO_MINIMO_RUN = 7
const LARGO_MAXIMO_RUN = 9
const EDAD_MINIMA = 14
const EDAD_MAXIMA = 120
const LARGO_MAXIMO_RESTRICCIONES = 200

export function validarNombre(valor) {
    const nombre = valor.trim()

    if (nombre === '') {
        return 'Escribe tu nombre.'
    }
    if (nombre.length > LARGO_MAXIMO_NOMBRE) {
        return 'El nombre no puede superar los ' + LARGO_MAXIMO_NOMBRE + ' caracteres.'
    }
    if (!SOLO_LETRAS.test(nombre)) {
        return 'El nombre solo puede tener letras y espacios.'
    }
    return ''
}

export function validarApellidos(valor) {
    const apellidos = valor.trim()

    if (apellidos === '') {
        return 'Escribe tus apellidos.'
    }
    if (apellidos.length > LARGO_MAXIMO_APELLIDOS) {
        return 'Los apellidos no pueden superar los ' + LARGO_MAXIMO_APELLIDOS + ' caracteres.'
    }
    if (!SOLO_LETRAS.test(apellidos)) {
        return 'Los apellidos solo pueden tener letras y espacios.'
    }
    return ''
}

// Deja el RUN sin puntos, guion ni espacios y con la K en mayúscula.
export function normalizarRun(valor) {
    return valor.trim().toUpperCase().replace(/[.\-\s]/g, '')
}

// Algoritmo módulo 11: recorre el cuerpo de derecha a izquierda multiplicando por 2..7.
export function calcularDigitoVerificador(cuerpo) {
    let suma = 0
    let multiplo = 2

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma = suma + parseInt(cuerpo.charAt(i), 10) * multiplo
        multiplo = multiplo < 7 ? multiplo + 1 : 2
    }

    const resto = 11 - (suma % 11)

    if (resto === 11) {
        return '0'
    }
    if (resto === 10) {
        return 'K'
    }
    return String(resto)
}

export function validarRun(valor) {
    const run = normalizarRun(valor)

    if (run === '') {
        return 'Escribe tu RUN.'
    }
    if (run.length < LARGO_MINIMO_RUN || run.length > LARGO_MAXIMO_RUN) {
        return 'El RUN debe tener entre ' + LARGO_MINIMO_RUN + ' y ' + LARGO_MAXIMO_RUN + ' caracteres, sin puntos ni guion.'
    }
    if (!FORMATO_RUN.test(run)) {
        return 'Escribe solo números y, al final, el dígito verificador (por ejemplo 19011022K).'
    }
    if (run.slice(-1) !== calcularDigitoVerificador(run.slice(0, -1))) {
        return 'El RUN no es válido: revisa el dígito verificador.'
    }
    return ''
}

// Es opcional: vacía es válida. El valor llega como "AAAA-MM-DD" (input type="date").
export function validarFechaNacimiento(valor, hoy = new Date()) {
    if (valor === '') {
        return ''
    }

    const [anio, mes, dia] = valor.split('-').map((parte) => parseInt(parte, 10))
    const fecha = new Date(anio, mes - 1, dia)

    const fechaExiste = fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia
    if (!fechaExiste) {
        return 'Esa fecha no existe.'
    }
    if (fecha > hoy) {
        return 'La fecha de nacimiento no puede ser futura.'
    }

    let edad = hoy.getFullYear() - anio
    const cumpleEsteAnio = new Date(hoy.getFullYear(), mes - 1, dia)
    if (hoy < cumpleEsteAnio) {
        edad = edad - 1
    }

    if (edad < EDAD_MINIMA) {
        return 'Debes tener al menos ' + EDAD_MINIMA + ' años para registrarte.'
    }
    if (edad > EDAD_MAXIMA) {
        return 'Revisa el año de nacimiento.'
    }
    return ''
}

export function validarRegion(valor) {
    return valor === '' ? 'Selecciona tu región.' : ''
}

export function validarComuna(valor) {
    return valor === '' ? 'Selecciona tu comuna.' : ''
}

export function validarObjetivo(valor) {
    return valor === '' ? 'Selecciona tu objetivo nutricional.' : ''
}

export function validarTipoAlimentacion(valor) {
    return valor === '' ? 'Selecciona tu tipo de alimentación.' : ''
}

// Es opcional: solo se revisa el largo.
export function validarRestricciones(valor) {
    if (valor.trim().length > LARGO_MAXIMO_RESTRICCIONES) {
        return 'Las restricciones o alergias no pueden superar los ' + LARGO_MAXIMO_RESTRICCIONES + ' caracteres.'
    }
    return ''
}

export function validarConfirmarContrasena(clave, repetida) {
    if (repetida === '') {
        return 'Repite la contraseña.'
    }
    if (clave !== repetida) {
        return 'Las dos contraseñas no son iguales.'
    }
    return ''
}

export function validarTerminos(marcado) {
    return marcado ? '' : 'Debes aceptar los términos para continuar.'
}

const TIPOS_PRODUCTO = ['Producto', 'Servicio']
const SOLO_DIGITOS = /^\d+$/

const LARGO_MINIMO_NOMBRE_PRODUCTO = 3
const LARGO_MAXIMO_NOMBRE_PRODUCTO = 60
const PRECIO_MINIMO = 1
const PRECIO_MAXIMO = 9999999
const LARGO_MAXIMO_UNIDAD = 30
const LARGO_MINIMO_RESUMEN = 10
const LARGO_MAXIMO_RESUMEN = 120

export function validarNombreProducto(valor) {
    const nombre = valor.trim()

    if (nombre === '') {
        return 'Escribe el nombre del producto.'
    }
    if (nombre.length < LARGO_MINIMO_NOMBRE_PRODUCTO || nombre.length > LARGO_MAXIMO_NOMBRE_PRODUCTO) {
        return 'El nombre debe tener entre ' + LARGO_MINIMO_NOMBRE_PRODUCTO + ' y ' + LARGO_MAXIMO_NOMBRE_PRODUCTO + ' caracteres.'
    }
    return ''
}

export function validarTipoProducto(valor) {
    return TIPOS_PRODUCTO.includes(valor) ? '' : 'Selecciona si es un producto o un servicio.'
}

// Solo dígitos: así se rechazan textos, decimales, signos y notación como "1e5".
export function validarPrecioProducto(valor) {
    const precio = String(valor).trim()

    if (precio === '') {
        return 'Escribe el precio.'
    }
    if (!SOLO_DIGITOS.test(precio)) {
        return 'El precio debe ser un número entero, sin puntos, comas ni letras.'
    }
    const numero = parseInt(precio, 10)
    if (numero < PRECIO_MINIMO || numero > PRECIO_MAXIMO) {
        return 'El precio debe estar entre ' + PRECIO_MINIMO + ' y ' + PRECIO_MAXIMO.toLocaleString('es-CL') + '.'
    }
    return ''
}

export function validarUnidadProducto(valor) {
    const unidad = valor.trim()

    if (unidad === '') {
        return 'Escribe la unidad de venta (por ejemplo: unidad, pack o sesión).'
    }
    if (unidad.length > LARGO_MAXIMO_UNIDAD) {
        return 'La unidad no puede superar los ' + LARGO_MAXIMO_UNIDAD + ' caracteres.'
    }
    return ''
}

export function validarResumenProducto(valor) {
    const resumen = valor.trim()

    if (resumen === '') {
        return 'Escribe un resumen del producto.'
    }
    if (resumen.length < LARGO_MINIMO_RESUMEN || resumen.length > LARGO_MAXIMO_RESUMEN) {
        return 'El resumen debe tener entre ' + LARGO_MINIMO_RESUMEN + ' y ' + LARGO_MAXIMO_RESUMEN + ' caracteres.'
    }
    return ''
}
