import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import FormularioLogin from './FormularioLogin'

function escribir(etiqueta, valor) {
    fireEvent.change(screen.getByLabelText(etiqueta), { target: { value: valor } })
}

describe('FormularioLogin', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    test('con los campos vacíos muestra los errores y no inicia sesión', () => {
        // ARRANGE
        const onLogin = vi.fn()
        render(<FormularioLogin onLogin={onLogin} />)

        // ACT
        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }))

        // ASSERT
        expect(screen.getByText('Escribe tu correo electrónico.')).toBeInTheDocument()
        expect(screen.getByText('Escribe tu contraseña.')).toBeInTheDocument()
        expect(onLogin).not.toHaveBeenCalled()
        expect(localStorage.getItem('sesion')).toBeNull()
    })

    test('con credenciales válidas guarda la sesión sin contraseña y llama a onLogin', () => {
        // ARRANGE
        const onLogin = vi.fn()
        render(<FormularioLogin onLogin={onLogin} />)
        escribir('Correo electrónico', 'cliente@gmail.com')
        escribir('Contraseña', 'cliente123')

        // ACT
        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }))

        // ASSERT
        const sesionGuardada = JSON.parse(localStorage.getItem('sesion'))
        expect(sesionGuardada).toMatchObject({ correo: 'cliente@gmail.com', nombre: 'Cliente' })
        expect(sesionGuardada).not.toHaveProperty('contrasena')
        expect(onLogin).toHaveBeenCalledWith(sesionGuardada)
    })

    test('con credenciales incorrectas muestra el aviso de error y no guarda sesión', () => {
        // ARRANGE
        const onLogin = vi.fn()
        render(<FormularioLogin onLogin={onLogin} />)
        escribir('Correo electrónico', 'cliente@gmail.com')
        escribir('Contraseña', 'incorrecta')

        // ACT
        fireEvent.click(screen.getByRole('button', { name: 'Entrar' }))

        // ASSERT
        expect(screen.getByText('Correo o contraseña incorrectos.')).toBeInTheDocument()
        expect(onLogin).not.toHaveBeenCalled()
        expect(localStorage.getItem('sesion')).toBeNull()
    })
})
