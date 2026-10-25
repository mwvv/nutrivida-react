import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="pie">
            <div className="contenedor">
                <div className="pie__rejilla">
                    <div>
                        <p className="pie__marca">NutriVida</p>
                        <p className="pie__texto">
                            Tienda en línea de suplementos, snacks saludables y servicios de nutrición.
                        </p>
                    </div>

                    <div>
                        <h3>Navegación</h3>
                        <ul className="pie__lista">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/productos">Productos</Link></li>
                            <li><Link to="/producto">Detalle de producto</Link></li>
                            <li><Link to="/login">Iniciar sesión</Link></li>
                            <li><Link to="/registro">Crear cuenta</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contacto</h3>
                        <ul className="pie__lista">
                            <li>Av. Alemania 0671, Temuco</li>
                            <li>+56 45 2234 567</li>
                            <li><a href="mailto:contacto@nutrivida.cl">contacto@nutrivida.cl</a></li>
                            <li>Lunes a viernes, 09:00 a 18:00</li>
                        </ul>
                    </div>
                </div>

                <div className="pie__legal">
                    <p>&copy; 2026 NutriVida. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer