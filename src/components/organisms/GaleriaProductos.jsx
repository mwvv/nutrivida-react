import TarjetaProducto from '../molecules/TarjetaProducto'

function GaleriaProductos({ productos }) {
    return (
        <div className="rejilla-productos">
            {productos.map((producto) => (
                <TarjetaProducto key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default GaleriaProductos
