export function normalizarCantidad(valor, min, max) {
    const numero = parseInt(valor, 10)

    if (isNaN(numero)) {
        return { cantidad: min, mensaje: 'Escribe un número de unidades.' }
    }
    if (numero < min) {
        return { cantidad: min, mensaje: 'La cantidad mínima es ' + min + '.' }
    }
    if (numero > max) {
        return { cantidad: max, mensaje: 'Por compra en línea el máximo es ' + max + ' unidades.' }
    }
    return { cantidad: numero, mensaje: '' }
}
