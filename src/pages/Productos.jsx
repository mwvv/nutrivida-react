import { useState } from 'react'
import CabeceraPagina from '../components/organisms/CabeceraPagina'
import BarraCatalogo from '../components/organisms/BarraCatalogo'
import GaleriaProductos from '../components/organisms/GaleriaProductos'
import LlamadoAccion from '../components/organisms/LlamadoAccion'

const opcionesFiltro = [
    { tipo: 'Producto', descripcion: 'llega a tu domicilio' },
    { tipo: 'Servicio', descripcion: 'se agenda o se descarga' },
]

function Productos({ productos }) {
    const [filtro, setFiltro] = useState('Todos')
    const filtrados = filtro === 'Todos' ? productos : productos.filter((producto) => producto.tipo === filtro)

    const cambiarFiltro = (tipo) => setFiltro((actual) => (actual === tipo ? 'Todos' : tipo))

    return (
        <main id="contenido">
            <CabeceraPagina
                migas={[{ texto: 'Inicio', to: '/' }, { texto: 'Productos' }]}
                titulo="Catálogo NutriVida"
                descripcion="Seis alternativas para armar tu rutina: suplementos y snacks que llegan a tu casa, y servicios de nutrición que puedes tomar desde donde estés. Todos los precios están en pesos chilenos e incluyen IVA."
            />

            <section className="seccion seccion--clara">
                <div className="contenedor">
                    <BarraCatalogo
                        total={filtrados.length}
                        opciones={opcionesFiltro}
                        seleccionado={filtro}
                        onCambiar={cambiarFiltro}
                    />
                    <GaleriaProductos productos={filtrados} />
                </div>
            </section>

            <LlamadoAccion
                titulo="¿No sabes por dónde partir?"
                texto="Si es tu primera compra, la consulta nutricional online te ordena las prioridades antes de gastar en suplementos que quizás no necesitas."
                botones={[
                    { texto: 'Ver la consulta', variante: 'claro', to: '/producto?id=consulta-online' },
                    { texto: 'Volver al inicio', variante: 'borde-claro', to: '/' },
                ]}
                variante="verde"
            />
        </main>
    )
}

export default Productos
