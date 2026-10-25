import Boton from '../atoms/Boton'

function LlamadoAccion({ titulo, texto, botones, variante }) {
    return (
        <section className={variante ? `seccion seccion--${variante}` : 'seccion'}>
            <div className="contenedor">
                <div className="llamado">
                    <h2>{titulo}</h2>
                    <p>{texto}</p>
                    <div className="grupo-botones">
                        {botones.map((boton) => (
                            <Boton key={boton.texto} texto={boton.texto} variante={boton.variante} to={boton.to} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LlamadoAccion
