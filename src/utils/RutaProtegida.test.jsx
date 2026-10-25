import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import RutaProtegida from './RutaProtegida'

function renderizarEnPerfil(sesion) {
    render(
        <MemoryRouter initialEntries={['/perfil']}>
            <Routes>
                <Route path="/login" element={<p>Página de login</p>} />
                <Route
                    path="/perfil"
                    element={
                        <RutaProtegida sesion={sesion}>
                            <p>Contenido privado</p>
                        </RutaProtegida>
                    }
                />
            </Routes>
        </MemoryRouter>
    )
}

describe('RutaProtegida', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    test('sin sesión redirige a /login y no muestra el contenido', () => {
        // ARRANGE
        const sesion = null

        // ACT
        renderizarEnPerfil(sesion)

        // ASSERT
        expect(screen.getByText('Página de login')).toBeInTheDocument()
        expect(screen.queryByText('Contenido privado')).not.toBeInTheDocument()
    })

    test('con sesión muestra el contenido protegido', () => {
        // ARRANGE
        const sesion = { correo: 'cliente@gmail.com', nombre: 'Cliente' }

        // ACT
        renderizarEnPerfil(sesion)

        // ASSERT
        expect(screen.getByText('Contenido privado')).toBeInTheDocument()
        expect(screen.queryByText('Página de login')).not.toBeInTheDocument()
    })
})
