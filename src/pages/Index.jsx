import Hero from '../components/organisms/Hero'
import Beneficios from '../components/organisms/Beneficios'
import VideoBloque from '../components/organisms/VideoBloque'
import ProductosDestacados from '../components/organisms/ProductosDestacados'
import LlamadoAccion from '../components/organisms/LlamadoAccion'
import { datosHero } from '../data/datosHero'
import { beneficios } from '../data/beneficios'
import { productos } from '../data/productos'

const idsDestacados = ['proteina-vegetal', 'consulta-online', 'pack-snacks']
const destacados = idsDestacados.map((id) => productos.find((producto) => producto.id === id))

function Index() {
    return (
        <main id="contenido">
            <Hero datos={datosHero} />
            <Beneficios beneficios={beneficios} />
            <VideoBloque />
            <ProductosDestacados productos={destacados} />
            <LlamadoAccion />
        </main>
    )
}

export default Index
