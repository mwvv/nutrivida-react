import { useState } from 'react'
import SelectorCantidad from '../molecules/SelectorCantidad'
import { formatearPesos } from '../../utils/formato'
import { normalizarCantidad } from '../../utils/cantidad'

const CANTIDAD_MINIMA = 1
const CANTIDAD_MAXIMA = 20

function CajaCompra({ producto, onAgregar }) {
    const [cantidad, setCantidad] = useState(CANTIDAD_MINIMA)
    const [aviso, setAviso] = useState('')
    const [mensajeCompra, setMensajeCompra] = useState('')

    const subtotal = producto.precio * cantidad

    const actualizarCantidad = (valor) => {
        const resultado = normalizarCantidad(valor, CANTIDAD_MINIMA, CANTIDAD_MAXIMA)
        setCantidad(resultado.cantidad)
        setAviso(resultado.mensaje)
    }

    const agregar = () => {
        onAgregar(producto.id, cantidad)
        setAviso('')
        setMensajeCompra('Agregaste ' + cantidad + ' x ' + producto.nombre + ' por ' + formatearPesos(subtotal) + '.')
    }

    return (
        <div className="caja-compra">
            <SelectorCantidad
                etiqueta={'Cantidad (' + producto.unidad + ')'}
                cantidad={cantidad}
                min={CANTIDAD_MINIMA}
                max={CANTIDAD_MAXIMA}
                onEscribir={actualizarCantidad}
                onPaso={(paso) => actualizarCantidad(cantidad + paso)}
            />

            <p className="aviso-cantidad">{aviso}</p>

            <div className="subtotal">
                <span className="subtotal__etiqueta">Subtotal</span>
                <span className="subtotal__monto">{formatearPesos(subtotal)}</span>
            </div>

            <div className="grupo-botones">
                <button className="boton boton--primario boton--ancho-total" type="button" onClick={agregar}>
                    Agregar al pedido
                </button>
            </div>
            <p className="campo__ayuda">{mensajeCompra}</p>
        </div>
    )
}

export default CajaCompra
