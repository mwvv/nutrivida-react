import { Link } from 'react-router-dom'

function CabeceraPagina({ migas, titulo, descripcion }) {
    return (
        <section className="cabecera-pagina">
            <div className="contenedor">
                <nav className="migas">
                    <ol>
                        {migas.map((miga) => (
                            <li key={miga.texto}>
                                {miga.to ? <Link to={miga.to}>{miga.texto}</Link> : miga.texto}
                            </li>
                        ))}
                    </ol>
                </nav>
                <h1>{titulo}</h1>
                <p>{descripcion}</p>
            </div>
        </section>
    )
}

export default CabeceraPagina
