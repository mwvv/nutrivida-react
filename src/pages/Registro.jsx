import { Link } from 'react-router-dom'
import PanelFormulario from '../components/organisms/PanelFormulario'
import FormularioRegistro from '../components/organisms/FormularioRegistro'

function Registro() {
    return (
        <PanelFormulario
            titulo="Crear cuenta"
            intro="Completa tus datos. Los campos marcados con * son obligatorios."
            enlaces={
                <>
                    <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>.</p>
                    <p><Link to="/">Volver al inicio</Link></p>
                </>
            }
        >
            <FormularioRegistro />
        </PanelFormulario>
    )
}

export default Registro
