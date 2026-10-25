import { Link } from 'react-router-dom'
import PanelFormulario from '../components/organisms/PanelFormulario'
import FormularioLogin from '../components/organisms/FormularioLogin'

function Login({ onLogin }) {
    return (
        <PanelFormulario
            titulo="Iniciar sesión"
            intro="Ingresa con el correo que usaste al crear tu cuenta."
            enlaces={
                <>
                    <p>¿Todavía no tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.</p>
                    <p><Link to="/">Volver al inicio</Link></p>
                </>
            }
        >
            <FormularioLogin onLogin={onLogin} />
        </PanelFormulario>
    )
}

export default Login
