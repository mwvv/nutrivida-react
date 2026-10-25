function Beneficio({ titulo, texto, trazos }) {
    return (
        <article className="beneficio">
            <div className="beneficio__icono">
                <svg viewBox="0 0 24 24">
                    {trazos.map((d) => (
                        <path key={d} d={d} />
                    ))}
                </svg>
            </div>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </article>
    )
}

export default Beneficio
