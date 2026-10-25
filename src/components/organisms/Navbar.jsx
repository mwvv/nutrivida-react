import { Link, NavLink } from 'react-router-dom'

function Navbar({ itemsMenu, sesion, onCerrarSesion, unidadesCarrito }) {
    return (
        <header className="encabezado">
            <div className="contenedor encabezado__barra">
                <Link className="logo" to="/">
                    <img src="/img/logo.svg" alt="Logotipo de NutriVida" width="42" height="42" />
                    <span>
                        <span className="logo__texto">NutriVida</span>
                        <span className="logo__lema">Nutrición consciente</span>
                    </span>
                </Link>

                <nav className="navegacion" id="menuPrincipal">
                    <ul className="navegacion__lista">
                        {itemsMenu.map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.to === '/'}
                                    className={`navegacion__enlace ${item.destacado ? 'navegacion__enlace--destacado' : ''}`}
                                >
                                    {item.carrito ? item.label + ' (' + unidadesCarrito + ')' : item.label}
                                </NavLink>
                            </li>
                        ))}
                        {sesion && (
                            <li>
                                <button
                                    type="button"
                                    className="navegacion__enlace navegacion__enlace--destacado"
                                    onClick={onCerrarSesion}
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
