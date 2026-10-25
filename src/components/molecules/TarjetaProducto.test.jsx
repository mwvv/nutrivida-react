import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TarjetaProducto from './TarjetaProducto'

const producto = {
    id: 'proteina-vegetal',
    nombre: 'Proteína vegetal 1 kg',
    tipo: 'Producto',
    precio: 18990,
    resumen: 'Mezcla de arveja y arroz integral con 24 g de proteína por porción.',
    imagenes: [{ archivo: '/img/Image_proteina.jpg', texto: 'Tarro de proteína vegetal de 1 kilo' }],
}

describe('TarjetaProducto', () => {
    test('muestra nombre, precio formateado y enlace al detalle del producto', () => {
        // ARRANGE
        render(
            <MemoryRouter>
                <TarjetaProducto producto={producto} />
            </MemoryRouter>
        )

        // ACT
        const enlace = screen.getByRole('link', { name: 'Ver detalle' })

        // ASSERT
        expect(screen.getByRole('heading', { name: 'Proteína vegetal 1 kg' })).toBeInTheDocument()
        expect(screen.getByText('$18.990')).toBeInTheDocument()
        expect(enlace).toHaveAttribute('href', '/producto?id=proteina-vegetal')
    })
})
