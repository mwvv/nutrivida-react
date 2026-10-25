import { describe, test, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Boton from './Boton'

describe('Boton', () => {
    test('muestra el texto recibido y ejecuta onClick al hacer clic', () => {
        // ARRANGE
        const alHacerClic = vi.fn()
        render(<Boton texto="Agregar al carrito" onClick={alHacerClic} />)

        // ACT
        fireEvent.click(screen.getByRole('button', { name: 'Agregar al carrito' }))

        // ASSERT
        expect(screen.getByRole('button')).toHaveTextContent('Agregar al carrito')
        expect(alHacerClic).toHaveBeenCalledTimes(1)
    })
})
