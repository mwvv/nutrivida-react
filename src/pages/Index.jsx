import Hero from '../components/organisms/Hero'
import Beneficios from '../components/organisms/Beneficios'
import VideoBloque from '../components/organisms/VideoBloque'
import ProductosDestacados from '../components/organisms/ProductosDestacados'
import LlamadoAccion from '../components/organisms/LlamadoAccion'
import { datosHero } from '../data/datosHero'
import { beneficios } from '../data/beneficios'

const idsDestacados = ['proteina-vegetal', 'consulta-online', 'pack-snacks']

function Index({ productos }) {
    // filter(Boolean) descarta los destacados que se hayan eliminado desde el panel.
    const destacados = idsDestacados
        .map((id) => productos.find((producto) => producto.id === id))
        .filter(Boolean)

    return (
        <main id="contenido">
            <Hero datos={datosHero} />
            <Beneficios beneficios={beneficios} />
            <VideoBloque />
            <ProductosDestacados productos={destacados} />
            <LlamadoAccion
                titulo="¿Primera vez por acá?"
                texto="Crea tu cuenta y te enviamos una guía de porciones descargable, además de los precios preferentes para estudiantes y adultos mayores."
                botones={[
                    { texto: 'Crear cuenta gratis', variante: 'claro', to: '/registro' },
                    { texto: 'Ya tengo cuenta', variante: 'borde-claro', to: '/login' },
                ]}
            />
        </main>
    )
}

export default Index
