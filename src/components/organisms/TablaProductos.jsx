import { Link } from 'react-router-dom'
import Insignia from '../atoms/Insignia'
import { formatearPesos } from '../../utils/formato'

function TablaProductos({ productos, onEditar, onEliminar }) {
    const eliminar = (producto) => {
        if (window.confirm('¿Eliminar "' + producto.nombre + '" del catálogo? Esta acción no se puede deshacer.')) {
            onEliminar(producto.id)
        }
    }

    if (productos.length === 0) {
        return <p className="texto-secundario">El catálogo está vacío. Agrega un producto con el formulario.</p>
    }

    return (
        <div className="tabla-productos__marco">
            <table className="tabla-productos">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <img
                                    className="tabla-productos__imagen"
                                    src={producto.imagenes[0].archivo}
                                    alt={producto.imagenes[0].texto}
                                    width="56"
                                    height="56"
                                />
                            </td>
                            <td>
                                <Link className="fila-carrito__nombre" to={`/producto?id=${producto.id}`}>
                                    {producto.nombre}
                                </Link>
                            </td>
                            <td><Insignia tipo={producto.tipo} /></td>
                            <td className="fila-carrito__subtotal">{formatearPesos(producto.precio)}</td>
                            <td>
                                <div className="tabla-productos__acciones">
                                    <button
                                        className="fila-carrito__quitar tabla-productos__editar"
                                        type="button"
                                        onClick={() => onEditar(producto)}
                                    >
                                        Editar
                                    </button>
                                    <button className="fila-carrito__quitar" type="button" onClick={() => eliminar(producto)}>
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaProductos
