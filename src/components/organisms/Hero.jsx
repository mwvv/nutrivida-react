import Boton from '../atoms/Boton'
import Dato from '../molecules/Dato'

function Hero({ datos }) {
    return (
        <section className="hero">
            <div className="contenedor hero__rejilla">
                <div>
                    <span className="etiqueta-superior">Tienda en línea · Envíos a todo Chile</span>
                    <h1>Come mejor, sin complicarte la vida</h1>
                    <p className="hero__texto">
                        En <strong>NutriVida</strong> reunimos lo que necesitas para sostener una
                        alimentación saludable en el tiempo: suplementos y snacks seleccionados uno
                        a uno, y también planes y consultas con nutricionistas colegiados. Compras
                        en línea, recibes en tu casa y te acompañamos en el proceso.
                    </p>
                    <div className="grupo-botones">
                        <Boton texto="Ver productos" variante="primario" to="/productos" />
                        <Boton texto="Crear una cuenta" variante="secundario" to="/registro" />
                    </div>

                    <div className="hero__datos">
                        {datos.map((dato) => (
                            <Dato key={dato.numero} numero={dato.numero} texto={dato.texto} />
                        ))}
                    </div>
                </div>

                <figure className="hero__figura">
                    <img
                        src="/img/Image_inicio.jpg"
                        alt="Ilustración de un bowl con frutas, verduras y semillas sobre fondo verde"
                        width="800"
                        height="600"
                    />
                </figure>
            </div>
        </section>
    )
}

export default Hero
