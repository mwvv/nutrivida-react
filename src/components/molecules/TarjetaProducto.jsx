import Insignia from '../atoms/Insignia'
import Precio from '../atoms/Precio'
import Boton from '../atoms/Boton'

function TarjetaProducto({ producto }) {
    return (
        <article className="tarjeta">
            <figure className="tarjeta__figura">
                <img
                    src={producto.imagenes[0].archivo}
                    alt={producto.imagenes[0].texto}
                    width="800"
                    height="600"
                />
            </figure>
            <div className="tarjeta__cuerpo">
                <Insignia tipo={producto.tipo} />
                <h3 className="tarjeta__titulo">{producto.nombre}</h3>
                <p className="tarjeta__descripcion">{producto.resumen}</p>
                <div className="tarjeta__pie">
                    <Precio valor={producto.precio} />
                    <Boton
                        texto="Ver detalle"
                        variante="secundario"
                        to={`/producto?id=${producto.id}`}
                    />
                </div>
            </div>
        </article>
    )
}

export default TarjetaProducto