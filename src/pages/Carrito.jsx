import CabeceraPagina from '../components/organisms/CabeceraPagina'
import ResumenCarrito from '../components/organisms/ResumenCarrito'

function Carrito({ carrito, productos, sesion, cambiarCantidad, quitarDelCarrito, vaciarCarrito }) {
    return (
        <main id="contenido">
            <CabeceraPagina
                migas={[{ label: 'Inicio', to: '/' }, { label: 'Carrito' }]}
                titulo="Tu carrito"
                descripcion="Revisa los productos y servicios que elegiste, ajusta las cantidades y finaliza tu compra."
            />

            <section className="seccion">
                <div className="contenedor">
                    <ResumenCarrito
                        carrito={carrito}
                        productos={productos}
                        sesion={sesion}
                        onCambiarCantidad={cambiarCantidad}
                        onQuitar={quitarDelCarrito}
                        onVaciar={vaciarCarrito}
                    />
                </div>
            </section>
        </main>
    )
}

export default Carrito
