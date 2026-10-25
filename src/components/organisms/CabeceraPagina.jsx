import Migas from '../molecules/Migas'

function CabeceraPagina({ migas, titulo, descripcion }) {
    return (
        <section className="cabecera-pagina">
            <div className="contenedor">
                <Migas migas={migas} />
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </section>
    )
}

export default CabeceraPagina
