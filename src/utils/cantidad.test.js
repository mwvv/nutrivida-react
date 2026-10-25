import { describe, test, expect } from 'vitest'
import { normalizarCantidad } from './cantidad'
import { CANTIDAD_MINIMA, CANTIDAD_MAXIMA } from './carrito'

describe('normalizarCantidad', () => {
    test('sube 0 a la cantidad mínima y avisa con un mensaje', () => {
        // ARRANGE
        const valor = 0

        // ACT
        const resultado = normalizarCantidad(valor, CANTIDAD_MINIMA, CANTIDAD_MAXIMA)

        // ASSERT
        expect(resultado).toEqual({ cantidad: 1, mensaje: 'La cantidad mínima es 1.' })
    })

    test('baja 50 a la cantidad máxima y avisa con un mensaje', () => {
        // ARRANGE
        const valor = 50

        // ACT
        const resultado = normalizarCantidad(valor, CANTIDAD_MINIMA, CANTIDAD_MAXIMA)

        // ASSERT
        expect(resultado).toEqual({ cantidad: 20, mensaje: 'Por compra en línea el máximo es 20 unidades.' })
    })
})
