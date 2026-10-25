import { describe, test, expect } from 'vitest'
import { calcularTotal, contarUnidades } from './carrito'

const productos = [
    { id: 'proteina-vegetal', precio: 18990 },
    { id: 'pack-snacks', precio: 12500 },
]

const carrito = [
    { id: 'proteina-vegetal', cantidad: 2 },
    { id: 'pack-snacks', cantidad: 3 },
]

describe('calcularTotal', () => {
    test('suma precio por cantidad de cada línea del carrito', () => {
        // ARRANGE
        const esperado = 18990 * 2 + 12500 * 3

        // ACT
        const total = calcularTotal(carrito, productos)

        // ASSERT
        expect(total).toBe(esperado)
    })

    test('no suma las líneas cuyo producto ya no está en el catálogo', () => {
        // ARRANGE
        const carritoConEliminado = [...carrito, { id: 'producto-eliminado', cantidad: 5 }]

        // ACT
        const total = calcularTotal(carritoConEliminado, productos)

        // ASSERT
        expect(total).toBe(75480)
    })
})

describe('contarUnidades', () => {
    test('cuenta las unidades de todas las líneas del carrito', () => {
        // ARRANGE
        const esperado = 5

        // ACT
        const unidades = contarUnidades(carrito)

        // ASSERT
        expect(unidades).toBe(esperado)
    })
})
