import { describe, test, expect } from 'vitest'
import { validarCorreo, validarContrasena, validarRun, validarPrecioProducto } from './validaciones'

describe('validarCorreo', () => {
    test('acepta un correo con dominio @duoc.cl', () => {
        // ARRANGE
        const correo = 'alumno@duoc.cl'

        // ACT
        const error = validarCorreo(correo)

        // ASSERT
        expect(error).toBe('')
    })

    test('rechaza un correo con dominio @hotmail.com', () => {
        // ARRANGE
        const correo = 'persona@hotmail.com'

        // ACT
        const error = validarCorreo(correo)

        // ASSERT
        expect(error).toBe('Usa un correo terminado en @duoc.cl, @profesor.duoc.cl o @gmail.com.')
    })
})

describe('validarContrasena', () => {
    test('rechaza una contraseña de menos de 4 caracteres', () => {
        // ARRANGE
        const clave = 'abc'

        // ACT
        const error = validarContrasena(clave)

        // ASSERT
        expect(error).toBe('La contraseña debe tener entre 4 y 10 caracteres.')
    })

    test('rechaza una contraseña de más de 10 caracteres', () => {
        // ARRANGE
        const clave = 'abcdefghijk'

        // ACT
        const error = validarContrasena(clave)

        // ASSERT
        expect(error).toBe('La contraseña debe tener entre 4 y 10 caracteres.')
    })
})

describe('validarRun', () => {
    test('acepta el RUN 19000001K con dígito verificador correcto', () => {
        // ARRANGE
        const run = '19000001K'

        // ACT
        const error = validarRun(run)

        // ASSERT
        expect(error).toBe('')
    })

    test('rechaza un RUN cuyo dígito verificador no corresponde', () => {
        // ARRANGE
        const run = '190000015'

        // ACT
        const error = validarRun(run)

        // ASSERT
        expect(error).toBe('El RUN no es válido: revisa el dígito verificador.')
    })
})

describe('validarPrecioProducto', () => {
    test.each(['abc', '12.5'])('rechaza "%s" porque no es un número entero', (precio) => {
        // ARRANGE
        const mensajeEsperado = 'El precio debe ser un número entero, sin puntos, comas ni letras.'

        // ACT
        const error = validarPrecioProducto(precio)

        // ASSERT
        expect(error).toBe(mensajeEsperado)
    })

    test('rechaza "0" porque está bajo el precio mínimo', () => {
        // ARRANGE
        const precio = '0'

        // ACT
        const error = validarPrecioProducto(precio)

        // ASSERT
        expect(error).toBe('El precio debe estar entre 1 y 9.999.999.')
    })

    test('acepta "9999999", el precio máximo permitido', () => {
        // ARRANGE
        const precio = '9999999'

        // ACT
        const error = validarPrecioProducto(precio)

        // ASSERT
        expect(error).toBe('')
    })
})
