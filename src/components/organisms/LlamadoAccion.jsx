import Boton from '../atoms/Boton'

function LlamadoAccion() {
    return (
        <section className="seccion">
            <div className="contenedor">
                <div className="llamado">
                    <h2>¿Primera vez por acá?</h2>
                    <p>
                        Crea tu cuenta y te enviamos una guía de porciones descargable, además de
                        los precios preferentes para estudiantes y adultos mayores.
                    </p>
                    <div className="grupo-botones">
                        <Boton texto="Crear cuenta gratis" variante="claro" to="/registro" />
                        <Boton texto="Ya tengo cuenta" variante="borde-claro" to="/login" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LlamadoAccion
