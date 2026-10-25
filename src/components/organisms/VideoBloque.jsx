function VideoBloque() {
    return (
        <section className="seccion seccion--verde">
            <div className="contenedor video-bloque">
                <div>
                    <span className="etiqueta-superior">Conócenos</span>
                    <h2>Así trabajamos en NutriVida</h2>
                    <p className="texto-secundario">
                        Conoce nuestra forma de trabajo: cómo seleccionamos productos de calidad y cómo acompañamos a cada persona
                        en su proceso de nutrición.
                    </p>
                    <ul className="lista-marcada">
                        <li>Seleccionamos proveedores y productos con sello nutricional.</li>
                        <li>Atención personalizada con nutricionistas colegiados.</li>
                        <li>Planes y seguimiento pensados para tu día a día.</li>
                    </ul>
                </div>

                <div className="video-marco">
                    <video controls width="1280" height="720">
                        <source src="/img/exten.mp4" type="video/mp4" />
                        <p className="video-marco__respaldo">
                            Tu navegador no puede reproducir este video.
                            Puedes ver la versión en texto en la sección{' '}
                            <a href="#contenido">Por qué NutriVida</a>.
                        </p>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default VideoBloque
