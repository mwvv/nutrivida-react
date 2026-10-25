import { describe, test, expect } from 'vitest'
import { formatearPesos } from './formato'

describe('formatearPesos', () => {
    test('formatea 18990 como "$18.990" con separador de miles chileno', () => {
        // ARRANGE
        const valor = 18990

        // ACT
        const texto = formatearPesos(valor)

        // ASSERT
        expect(texto).toBe('$18.990')
    })
})
