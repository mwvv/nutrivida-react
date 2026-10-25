function PanelFormulario({ titulo, intro, enlaces, children }) {
    return (
        <main id="contenido" className="pagina-cuenta">
            <div className="contenedor cuenta-rejilla">
                <section className="panel-formulario">
                    <h1>{titulo}</h1>
                    <p className="panel-formulario__intro">{intro}</p>

                    {children}

                    <div className="enlaces-formulario">{enlaces}</div>
                </section>
            </div>
        </main>
    )
}

export default PanelFormulario
