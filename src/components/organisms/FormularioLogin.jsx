import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CampoFormulario from '../molecules/CampoFormulario'
import { usuarios } from '../../data/usuarios'
import { validarCorreo, validarContrasena } from '../../utils/validaciones'

const validadores = {
    correo: validarCorreo,
    contrasena: validarContrasena,
}

function FormularioLogin({ onLogin }) {
    const [valores, setValores] = useState({ correo: '', contrasena: '' })
    const [errores, setErrores] = useState({ correo: '', contrasena: '' })
    const [avisoError, setAvisoError] = useState('')
    const refCorreo = useRef(null)
    const refContrasena = useRef(null)

    const cambiar = (evento) => {
        setValores({ ...valores, [evento.target.name]: evento.target.value })
    }

    const validarCampo = (evento) => {
        const { name, value } = evento.target
        setErrores({ ...errores, [name]: validadores[name](value) })
    }

    const enviar = (evento) => {
        evento.preventDefault()

        const nuevosErrores = {
            correo: validarCorreo(valores.correo),
            contrasena: validarContrasena(valores.contrasena),
        }
        setErrores(nuevosErrores)

        const primerError = Object.keys(nuevosErrores).find((campo) => nuevosErrores[campo])
        if (primerError) {
            setAvisoError('')
            const campo = primerError === 'correo' ? refCorreo : refContrasena
            campo.current.focus()
            return
        }

        const correo = valores.correo.trim()
        const usuario = usuarios.find((u) => u.correo === correo && u.contrasena === valores.contrasena)
        if (!usuario) {
            setAvisoError('Correo o contraseña incorrectos.')
            return
        }

        // Se guardan todos los datos del usuario menos la contraseña.
        const sesion = {
            correo: usuario.correo,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            region: usuario.region,
            comuna: usuario.comuna,
            objetivo: usuario.objetivo,
            alimentacion: usuario.alimentacion,
        }
        localStorage.setItem('sesion', JSON.stringify(sesion))
        onLogin(sesion)
    }

    return (
        <>
            {avisoError && <p className="aviso aviso--error">{avisoError}</p>}

            <Form className="formulario" noValidate onSubmit={enviar}>
                <CampoFormulario
                    id="correo"
                    label="Correo electrónico"
                    type="email"
                    maxLength={100}
                    placeholder="nombre@duoc.cl"
                    value={valores.correo}
                    onChange={cambiar}
                    onBlur={validarCampo}
                    ayuda="Solo aceptamos dominios @duoc.cl, @profesor.duoc.cl y @gmail.com."
                    error={errores.correo}
                    ref={refCorreo}
                />

                <CampoFormulario
                    id="contrasena"
                    label="Contraseña"
                    type="password"
                    maxLength={10}
                    value={valores.contrasena}
                    onChange={cambiar}
                    onBlur={validarCampo}
                    ayuda="Entre 4 y 10 caracteres."
                    error={errores.contrasena}
                    ref={refContrasena}
                />

                <Button bsPrefix="boton" variant="" className="boton--primario boton--ancho-total" type="submit">
                    Entrar
                </Button>
            </Form>
        </>
    )
}

export default FormularioLogin
