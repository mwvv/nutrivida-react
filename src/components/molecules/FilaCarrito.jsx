import { useState } from 'react'
import { Link } from 'react-router-dom'
import SelectorCantidad from './SelectorCantidad'
import { formatearPesos } from '../../utils/formato'
import { CANTIDAD_MINIMA, CANTIDAD_MAXIMA } from '../../utils/carrito'

function FilaCarrito({ producto, cantidad, onCambiarCantidad, onQuitar }) {
    const [aviso, setAviso] = useState('')

    const actualizarCantidad = (valor) => {
        setAviso(onCambiarCantidad(producto.id, valor))
    }

    return (
        <li className="fila-carrito">
            <img
                className="fila-carrito__imagen"
                src={producto.imagenes[0].archivo}
                alt={producto.imagenes[0].texto}
                width="88"
                height="88"
            />

            <div>
                <Link className="fila-carrito__nombre" to={`/producto?id=${producto.id}`}>
                    {producto.nombre}
                </Link>
                <p className="fila-carrito__precio">
                    {formatearPesos(producto.precio)} c/u ({producto.unidad})
                </p>
            </div>

            <div className="fila-carrito__cantidad">
                <SelectorCantidad
                    id={'cantidad-' + producto.id}
                    etiqueta="Cantidad"
                    cantidad={cantidad}
                    min={CANTIDAD_MINIMA}
                    max={CANTIDAD_MAXIMA}
                    onEscribir={actualizarCantidad}
                    onPaso={(paso) => actualizarCantidad(cantidad + paso)}
                />
                {aviso && <p className="aviso-cantidad">{aviso}</p>}
            </div>

            <div className="fila-carrito__cierre">
                <span className="fila-carrito__subtotal">{formatearPesos(producto.precio * cantidad)}</span>
                <button className="fila-carrito__quitar" type="button" onClick={() => onQuitar(producto.id)}>
                    Quitar
                </button>
            </div>
        </li>
    )
}

export default FilaCarrito
