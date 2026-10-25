import { useNavigate } from 'react-router-dom'
import Boton from '../components/atoms/Boton'
import CabeceraPagina from '../components/organisms/CabeceraPagina'
import DatosUsuario from '../components/organisms/DatosUsuario'

function Perfil({ sesion, onCerrarSesion }) {
    const navigate = useNavigate()

    const cerrarSesion = () => {
        onCerrarSesion()
        navigate('/')
    }

    return (
        <main id="contenido">
            <CabeceraPagina
                migas={[{ label: 'Inicio', to: '/' }, { label: 'Mi perfil' }]}
                titulo="Mi perfil"
                descripcion="Revisa los datos de tu cuenta y tu contexto de nutrición."
            />

            <section className="seccion">
                <div className="contenedor perfil">
                    <DatosUsuario usuario={sesion} />

                    <div className="grupo-botones">
                        <Boton texto="Ir al panel" to="/admin" />
                        <Boton texto="Ver carrito" variante="secundario" to="/carrito" />
                        <Boton texto="Cerrar sesión" variante="secundario" onClick={cerrarSesion} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Perfil
