import { useState } from 'react'
import { Link } from 'react-router-dom'
import Boton from '../atoms/Boton'
import FilaCarrito from '../molecules/FilaCarrito'
import { formatearPesos } from '../../utils/formato'
import { calcularTotal, contarUnidades } from '../../utils/carrito'

function ResumenCarrito({ carrito, productos, sesion, onCambiarCantidad, onQuitar, onVaciar }) {
    const [aviso, setAviso] = useState(null)

    const lineas = carrito
        .map((item) => ({ ...item, producto: productos.find((p) => p.id === item.id) }))
        .filter((linea) => linea.producto)

    const total = calcularTotal(carrito, productos)
    const unidades = contarUnidades(carrito)

    const finalizarCompra = () => {
        if (!sesion) {
            setAviso({ tipo: 'error' })
            return
        }

        // Simulación del pago: en una versión con servidor aquí se enviaría el pedido.
        setAviso({
            tipo: 'exito',
            texto: '¡Gracias por tu compra, ' + sesion.nombre + '! El pago de ' + formatearPesos(total) +
                ' se realizó correctamente. Te enviaremos el detalle del pedido a ' + sesion.correo + '.',
        })
        onVaciar()
    }

    const vaciar = () => {
        setAviso(null)
        onVaciar()
    }

    return (
        <>
            {aviso?.tipo === 'error' && (
                <p className="aviso aviso--error carrito__aviso">
                    Debes iniciar sesión para finalizar la compra. <Link to="/login">Inicia sesión aquí</Link>.
                </p>
            )}
            {aviso?.tipo === 'exito' && <p className="aviso aviso--exito carrito__aviso">{aviso.texto}</p>}

            {lineas.length === 0 ? (
                <div className="caja-compra carrito-vacio">
                    <h2>Tu carrito está vacío</h2>
                    <p className="texto-secundario">
                        Revisa nuestro catálogo y agrega los productos o servicios que necesites.
                    </p>
                    <div className="grupo-botones grupo-botones--centrado">
                        <Boton texto="Ver productos" to="/productos" />
                    </div>
                </div>
            ) : (
                <div className="carrito">
                    <ul className="lista-carrito">
                        {lineas.map((linea) => (
                            <FilaCarrito
                                key={linea.id}
                                producto={linea.producto}
                                cantidad={linea.cantidad}
                                onCambiarCantidad={onCambiarCantidad}
                                onQuitar={onQuitar}
                            />
                        ))}
                    </ul>

                    <aside className="caja-compra carrito__resumen">
                        <h2>Resumen</h2>
                        <p className="texto-secundario">
                            {unidades} {unidades === 1 ? 'unidad' : 'unidades'} en tu carrito.
                        </p>

                        <div className="subtotal">
                            <span className="subtotal__etiqueta">Total</span>
                            <span className="subtotal__monto">{formatearPesos(total)}</span>
                        </div>

                        <div className="grupo-botones">
                            <button className="boton boton--primario boton--ancho-total" type="button" onClick={finalizarCompra}>
                                Finalizar compra
                            </button>
                            <button className="boton boton--secundario boton--ancho-total" type="button" onClick={vaciar}>
                                Vaciar carrito
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </>
    )
}

export default ResumenCarrito
