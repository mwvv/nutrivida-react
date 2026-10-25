import Boton from '../atoms/Boton'
import EncabezadoSeccion from '../molecules/EncabezadoSeccion'
import TarjetaProducto from '../molecules/TarjetaProducto'

function ProductosDestacados({ productos }) {
    return (
        <section className="seccion seccion--clara">
            <div className="contenedor">
                <EncabezadoSeccion
                    etiqueta="Lo más pedido"
                    titulo="Productos destacados"
                    texto="Una muestra del catálogo. Puedes ver el detalle de cada uno con su información nutricional y precio."
                />

                <div className="rejilla-productos">
                    {productos.map((producto) => (
                        <TarjetaProducto key={producto.id} producto={producto} />
                    ))}
                </div>

                <div className="grupo-botones grupo-botones--centrado">
                    <Boton texto="Ver todo el catálogo" variante="primario" to="/productos" />
                </div>
            </div>
        </section>
    )
}

export default ProductosDestacados
