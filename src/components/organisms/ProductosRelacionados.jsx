import TarjetaProducto from '../molecules/TarjetaProducto'

function ProductosRelacionados({ productos }) {
    return (
        <section className="seccion seccion--verde">
            <div className="contenedor">
                <div className="seccion__encabezado seccion__encabezado--centrado">
                    <h2>También te puede servir</h2>
                </div>
                <div className="rejilla-productos">
                    {productos.map((producto) => (
                        <TarjetaProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductosRelacionados
