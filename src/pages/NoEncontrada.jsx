import Boton from '../components/atoms/Boton'

function NoEncontrada() {
    return (
        <main id="contenido">
            <section className="seccion">
                <div className="contenedor no-encontrada">
                    <p className="no-encontrada__codigo">404</p>
                    <h1>Página no encontrada</h1>
                    <p className="texto-secundario">
                        La página que buscas no existe o cambió de dirección. Revisa el enlace o
                        sigue navegando desde el inicio o el catálogo.
                    </p>
                    <div className="grupo-botones grupo-botones--centrado">
                        <Boton texto="Ir al inicio" to="/" />
                        <Boton texto="Ver productos" variante="secundario" to="/productos" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NoEncontrada
