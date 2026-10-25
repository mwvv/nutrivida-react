import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Insignia from '../components/atoms/Insignia'
import Migas from '../components/molecules/Migas'
import GaleriaProducto from '../components/organisms/GaleriaProducto'
import CajaCompra from '../components/organisms/CajaCompra'
import FichaProducto from '../components/organisms/FichaProducto'
import ProductosRelacionados from '../components/organisms/ProductosRelacionados'
import NoEncontrada from './NoEncontrada'
import { formatearPesos } from '../utils/formato'

const ID_POR_DEFECTO = 'proteina-vegetal'

function Producto({ productos, agregarAlCarrito }) {
    const [parametros] = useSearchParams()
    const idPedido = parametros.get('id')

    const producto =
        productos.find((item) => item.id === idPedido) ||
        productos.find((item) => item.id === ID_POR_DEFECTO) ||
        productos[0]

    useEffect(() => {
        if (producto) {
            document.title = producto.nombre + ' — NutriVida'
        }
    }, [producto])

    // Desde el panel se pueden eliminar todos los productos.
    if (!producto) {
        return <NoEncontrada />
    }

    const relacionados = productos.filter((item) => item.id !== producto.id).slice(0, 3)
    // Los productos creados en el panel no traen beneficios ni ficha.
    const tieneBeneficios = producto.beneficios?.length > 0
    const tieneFicha = producto.ficha?.length > 0

    return (
        <main id="contenido">
            <div className="contenedor">
                <Migas
                    migas={[
                        { label: 'Inicio', to: '/' },
                        { label: 'Productos', to: '/productos' },
                        { label: producto.nombre },
                    ]}
                />
            </div>

            <section className="seccion">
                <div className="contenedor detalle">
                    <GaleriaProducto key={producto.id} imagenes={producto.imagenes} />

                    <div className="detalle__info">
                        <Insignia tipo={producto.tipo} />
                        <h1>{producto.nombre}</h1>
                        <p className="detalle__precio">{formatearPesos(producto.precio)}</p>
                        <p className="detalle__descripcion">{producto.descripcion}</p>

                        <CajaCompra key={producto.id} producto={producto} onAgregar={agregarAlCarrito} />

                        {tieneBeneficios && (
                            <ul className="lista-marcada">
                                {producto.beneficios.map((beneficio) => (
                                    <li key={beneficio}>{beneficio}</li>
                                ))}
                            </ul>
                        )}

                        <p>
                            <Link to="/productos">&larr; Volver al catálogo completo</Link>
                        </p>
                    </div>
                </div>
            </section>

            {tieneFicha && (
                <section className="seccion seccion--clara">
                    <div className="contenedor">
                        <div className="seccion__encabezado">
                            <span className="etiqueta-superior">Información adicional</span>
                            <h2>Ficha del producto</h2>
                            <p className="texto-secundario">
                                Datos de referencia declarados por el proveedor. Ante cualquier duda,
                                consulta con tu nutricionista antes de incorporar un suplemento.
                            </p>
                        </div>

                        <FichaProducto ficha={producto.ficha} />
                    </div>
                </section>
            )}

            <ProductosRelacionados productos={relacionados} />
        </main>
    )
}

export default Producto
