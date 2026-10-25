import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { itemsMenu, itemsMenuSesion } from '../../data/itemsMenu'

function renderizarNavbar(sesion) {
    render(
        <MemoryRouter>
            <Navbar
                itemsMenu={sesion ? itemsMenuSesion : itemsMenu}
                sesion={sesion}
                onCerrarSesion={vi.fn()}
                unidadesCarrito={0}
            />
        </MemoryRouter>
    )
}

describe('Navbar', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    test('sin sesión muestra "Iniciar sesión" y no muestra "Cerrar sesión"', () => {
        // ARRANGE
        const sesion = null

        // ACT
        renderizarNavbar(sesion)

        // ASSERT
        expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
        expect(screen.queryByRole('button', { name: 'Cerrar sesión' })).not.toBeInTheDocument()
    })

    test('con sesión muestra "Cerrar sesión" y no muestra "Iniciar sesión"', () => {
        // ARRANGE
        const sesion = { correo: 'cliente@gmail.com', nombre: 'Cliente' }

        // ACT
        renderizarNavbar(sesion)

        // ASSERT
        expect(screen.getByRole('button', { name: 'Cerrar sesión' })).toBeInTheDocument()
        expect(screen.queryByRole('link', { name: 'Iniciar sesión' })).not.toBeInTheDocument()
    })
})
