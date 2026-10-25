import { useState } from 'react'
import CabeceraPagina from '../components/organisms/CabeceraPagina'
import FormularioProducto from '../components/organisms/FormularioProducto'
import TablaProductos from '../components/organisms/TablaProductos'

const AVISO_MEMORIA = ' Los cambios se mantienen solo mientras la página siga abierta.'

function Admin({ productos, agregarProducto, editarProducto, eliminarProducto }) {
    const [productoEditando, setProductoEditando] = useState(null)
    const [aviso, setAviso] = useState('')

    const guardar = (producto) => {
        if (productoEditando) {
            editarProducto(producto)
            setProductoEditando(null)
            setAviso('Producto actualizado.' + AVISO_MEMORIA)
        } else {
            agregarProducto(producto)
            setAviso('Producto agregado al catálogo.' + AVISO_MEMORIA)
        }
    }

    const empezarEdicion = (producto) => {
        setProductoEditando(producto)
        setAviso('')
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const eliminar = (id) => {
        eliminarProducto(id)
        if (productoEditando?.id === id) {
            setProductoEditando(null)
        }
        setAviso('Producto eliminado del catálogo.' + AVISO_MEMORIA)
    }

    return (
        <main id="contenido">
            <CabeceraPagina
                migas={[{ label: 'Inicio', to: '/' }, { label: 'Panel de Control' }]}
                titulo="Panel de Control"
                descripcion="Agrega, edita o elimina los productos y servicios del catálogo."
            />

            <section className="seccion">
                <div className="contenedor">
                    {aviso && <p className="aviso aviso--exito carrito__aviso">{aviso}</p>}

                    <div className="panel-admin">
                        <section className="panel-formulario">
                            <h2>{productoEditando ? 'Editar producto' : 'Nuevo producto'}</h2>
                            <p className="panel-formulario__intro">Los campos marcados con * son obligatorios.</p>

                            {/* La key reinicia el formulario al cambiar entre crear y editar */}
                            <FormularioProducto
                                key={productoEditando ? productoEditando.id : 'nuevo'}
                                producto={productoEditando}
                                productos={productos}
                                onGuardar={guardar}
                                onCancelar={() => setProductoEditando(null)}
                            />
                        </section>

                        <section>
                            <h2>Catálogo ({productos.length})</h2>
                            <TablaProductos productos={productos} onEditar={empezarEdicion} onEliminar={eliminar} />
                        </section>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Admin
