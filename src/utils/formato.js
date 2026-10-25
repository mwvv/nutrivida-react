export function formatearPesos(valor) {
    const entero = Math.round(valor)
    return '$' + entero.toLocaleString('es-CL')
}
