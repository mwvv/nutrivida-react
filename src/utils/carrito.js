export const CANTIDAD_MINIMA = 1
export const CANTIDAD_MAXIMA = 20

// Las líneas cuyo producto ya no existe en el catálogo no suman.
export function calcularTotal(carrito, productos) {
    return carrito.reduce((total, item) => {
        const producto = productos.find((p) => p.id === item.id)
        return producto ? total + producto.precio * item.cantidad : total
    }, 0)
}

export function contarUnidades(carrito) {
    return carrito.reduce((total, item) => total + item.cantidad, 0)
}
