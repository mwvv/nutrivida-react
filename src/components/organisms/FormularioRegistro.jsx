import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CampoFormulario from '../molecules/CampoFormulario'
import { regiones } from '../../data/regiones'
import {
    validarNombre,
    validarApellidos,
    validarRun,
    normalizarRun,
    validarCorreo,
    validarFechaNacimiento,
    validarRegion,
    validarComuna,
    validarObjetivo,
    validarTipoAlimentacion,
    validarRestricciones,
    validarContrasena,
    validarConfirmarContrasena,
    validarTerminos,
} from '../../utils/validaciones'

const objetivos = ['Bajar de peso', 'Ganar masa muscular', 'Mantener mi peso', 'Alimentarme más saludable']
const tiposAlimentacion = ['Omnívora', 'Vegetariana', 'Vegana', 'Otra']
const LARGO_MAXIMO_RESTRICCIONES = 200

// El orden de las claves es el orden del formulario: se usa para enfocar el primer error.
const valoresIniciales = {
    nombre: '',
    apellidos: '',
    run: '',
    correo: '',
    fechaNacimiento: '',
    region: '',
    comuna: '',
    objetivo: '',
    tipoAlimentacion: '',
    restricciones: '',
    contrasena: '',
    confirmarContrasena: '',
    terminos: false,
}

const erroresIniciales = Object.fromEntries(Object.keys(valoresIniciales).map((campo) => [campo, '']))

function validarTodo(valores) {
    return {
        nombre: validarNombre(valores.nombre),
        apellidos: validarApellidos(valores.apellidos),
        run: validarRun(valores.run),
        correo: validarCorreo(valores.correo),
        fechaNacimiento: validarFechaNacimiento(valores.fechaNacimiento),
        region: validarRegion(valores.region),
        comuna: validarComuna(valores.comuna),
        objetivo: validarObjetivo(valores.objetivo),
        tipoAlimentacion: validarTipoAlimentacion(valores.tipoAlimentacion),
        restricciones: validarRestricciones(valores.restricciones),
        contrasena: validarContrasena(valores.contrasena),
        confirmarContrasena: validarConfirmarContrasena(valores.contrasena, valores.confirmarContrasena),
        terminos: validarTerminos(valores.terminos),
    }
}

function FormularioRegistro() {
    const [valores, setValores] = useState(valoresIniciales)
    const [errores, setErrores] = useState(erroresIniciales)
    const [aviso, setAviso] = useState(null)
    const refFormulario = useRef(null)

    const comunas = regiones.find((region) => region.nombre === valores.region)?.comunas ?? []

    const validarCampo = (campo, nuevosValores = valores) => {
        setErrores((actuales) => ({ ...actuales, [campo]: validarTodo(nuevosValores)[campo] }))
    }

    const cambiar = (evento) => {
        const { name, value } = evento.target
        setValores({ ...valores, [name]: value })
    }

    const salir = (evento) => {
        validarCampo(evento.target.name)
    }

    // Igual que el original: si el RUN es válido, se deja escrito sin puntos ni guion.
    const salirRun = () => {
        if (validarRun(valores.run) === '') {
            setValores({ ...valores, run: normalizarRun(valores.run) })
        }
        validarCampo('run')
    }

    // Las fechas, selects y la casilla se validan también al cambiar, como en el original.
    const cambiarYValidar = (evento) => {
        const { name, value, type, checked } = evento.target
        const nuevosValores = { ...valores, [name]: type === 'checkbox' ? checked : value }
        setValores(nuevosValores)
        validarCampo(name, nuevosValores)
    }

    const cambiarRegion = (evento) => {
        const nuevosValores = { ...valores, region: evento.target.value, comuna: '' }
        setValores(nuevosValores)
        setErrores((actuales) => ({ ...actuales, region: validarRegion(nuevosValores.region), comuna: '' }))
    }

    const enviar = (evento) => {
        evento.preventDefault()

        const nuevosErrores = validarTodo(valores)
        setErrores(nuevosErrores)

        const primerError = Object.keys(nuevosErrores).find((campo) => nuevosErrores[campo])
        if (primerError) {
            setAviso({ tipo: 'error', texto: 'Revisa los campos marcados en rojo antes de continuar.' })
            refFormulario.current.elements[primerError].focus()
            return
        }

        setAviso({
            tipo: 'exito',
            texto: '¡Bienvenido/a, ' + valores.nombre.trim() + '! Tu registro se validó ' +
                'correctamente. En una versión con servidor, tu cuenta quedaría creada.',
        })
        setValores(valoresIniciales)
        setErrores(erroresIniciales)
    }

    return (
        <>
            {aviso && <p className={'aviso aviso--' + aviso.tipo}>{aviso.texto}</p>}

            <Form className="formulario" noValidate onSubmit={enviar} ref={refFormulario}>
                <div className="fila-campos">
                    <CampoFormulario
                        id="nombre"
                        label="Nombre *"
                        type="text"
                        maxLength={50}
                        value={valores.nombre}
                        onChange={cambiar}
                        onBlur={salir}
                        error={errores.nombre}
                    />

                    <CampoFormulario
                        id="apellidos"
                        label="Apellidos *"
                        type="text"
                        maxLength={100}
                        value={valores.apellidos}
                        onChange={cambiar}
                        onBlur={salir}
                        error={errores.apellidos}
                    />
                </div>

                <CampoFormulario
                    id="run"
                    label="RUN *"
                    type="text"
                    maxLength={12}
                    placeholder="19000001K"
                    value={valores.run}
                    onChange={cambiar}
                    onBlur={salirRun}
                    ayuda="Sin puntos ni guion, con el dígito verificador. Ejemplo: 19000001K."
                    error={errores.run}
                />

                <CampoFormulario
                    id="correo"
                    label="Correo electrónico *"
                    type="email"
                    maxLength={100}
                    placeholder="nombre@duoc.cl"
                    value={valores.correo}
                    onChange={cambiar}
                    onBlur={salir}
                    ayuda="Solo dominios @duoc.cl, @profesor.duoc.cl y @gmail.com."
                    error={errores.correo}
                />

                <CampoFormulario
                    id="fechaNacimiento"
                    label="Fecha de nacimiento"
                    type="date"
                    value={valores.fechaNacimiento}
                    onChange={cambiarYValidar}
                    onBlur={salir}
                    ayuda="Opcional. Nos sirve para ajustar las recomendaciones por edad."
                    error={errores.fechaNacimiento}
                />

                <div className="fila-campos">
                    <Form.Group className="campo">
                        <Form.Label htmlFor="region">Región *</Form.Label>
                        <Form.Select
                            id="region"
                            name="region"
                            value={valores.region}
                            onChange={cambiarRegion}
                            onBlur={salir}
                            className={errores.region ? 'campo--error' : ''}
                        >
                            <option value="">Selecciona una región</option>
                            {regiones.map((region) => (
                                <option key={region.nombre} value={region.nombre}>{region.nombre}</option>
                            ))}
                        </Form.Select>
                        <p className="campo__error">{errores.region}</p>
                    </Form.Group>

                    <Form.Group className="campo">
                        <Form.Label htmlFor="comuna">Comuna *</Form.Label>
                        <Form.Select
                            id="comuna"
                            name="comuna"
                            value={valores.comuna}
                            onChange={cambiarYValidar}
                            onBlur={salir}
                            disabled={valores.region === ''}
                            className={errores.comuna ? 'campo--error' : ''}
                        >
                            {valores.region === '' ? (
                                <option value="">Primero elige una región</option>
                            ) : (
                                <>
                                    <option value="">Selecciona una comuna</option>
                                    {comunas.map((comuna) => (
                                        <option key={comuna} value={comuna}>{comuna}</option>
                                    ))}
                                </>
                            )}
                        </Form.Select>
                        <p className="campo__error">{errores.comuna}</p>
                    </Form.Group>
                </div>

                <div className="fila-campos">
                    <Form.Group className="campo">
                        <Form.Label htmlFor="objetivo">Objetivo nutricional *</Form.Label>
                        <Form.Select
                            id="objetivo"
                            name="objetivo"
                            value={valores.objetivo}
                            onChange={cambiarYValidar}
                            onBlur={salir}
                            className={errores.objetivo ? 'campo--error' : ''}
                        >
                            <option value="">Selecciona tu objetivo</option>
                            {objetivos.map((objetivo) => (
                                <option key={objetivo} value={objetivo}>{objetivo}</option>
                            ))}
                        </Form.Select>
                        <p className="campo__error">{errores.objetivo}</p>
                    </Form.Group>

                    <Form.Group className="campo">
                        <Form.Label htmlFor="tipoAlimentacion">Tipo de alimentación *</Form.Label>
                        <Form.Select
                            id="tipoAlimentacion"
                            name="tipoAlimentacion"
                            value={valores.tipoAlimentacion}
                            onChange={cambiarYValidar}
                            onBlur={salir}
                            className={errores.tipoAlimentacion ? 'campo--error' : ''}
                        >
                            <option value="">Selecciona un tipo</option>
                            {tiposAlimentacion.map((tipo) => (
                                <option key={tipo} value={tipo}>{tipo}</option>
                            ))}
                        </Form.Select>
                        <p className="campo__error">{errores.tipoAlimentacion}</p>
                    </Form.Group>
                </div>

                <CampoFormulario
                    id="restricciones"
                    label="Restricciones o alergias alimentarias"
                    as="textarea"
                    rows={3}
                    maxLength={LARGO_MAXIMO_RESTRICCIONES}
                    placeholder="Por ejemplo: intolerancia a la lactosa, alergia al maní."
                    value={valores.restricciones}
                    onChange={cambiar}
                    onBlur={salir}
                    ayuda={'Opcional. ' + valores.restricciones.length + '/' + LARGO_MAXIMO_RESTRICCIONES + ' caracteres.'}
                    error={errores.restricciones}
                />

                <div className="fila-campos">
                    <CampoFormulario
                        id="contrasena"
                        label="Contraseña *"
                        type="password"
                        maxLength={10}
                        value={valores.contrasena}
                        onChange={cambiar}
                        onBlur={salir}
                        ayuda="Entre 4 y 10 caracteres."
                        error={errores.contrasena}
                    />

                    <CampoFormulario
                        id="confirmarContrasena"
                        label="Repetir contraseña *"
                        type="password"
                        maxLength={10}
                        value={valores.confirmarContrasena}
                        onChange={cambiar}
                        onBlur={salir}
                        error={errores.confirmarContrasena}
                    />
                </div>

                <Form.Group className="campo">
                    {/* bsPrefix propios para que no se apliquen los estilos de Bootstrap y se vea como el original */}
                    <Form.Check bsPrefix="casilla">
                        <Form.Check.Input
                            bsPrefix="casilla__input"
                            id="terminos"
                            name="terminos"
                            checked={valores.terminos}
                            onChange={cambiarYValidar}
                            onBlur={salir}
                            className={errores.terminos ? 'campo--error' : ''}
                        />
                        <Form.Check.Label bsPrefix="casilla__texto" htmlFor="terminos">
                            Acepto los términos de uso y el tratamiento de mis datos para
                            fines de despacho y atención nutricional. *
                        </Form.Check.Label>
                    </Form.Check>
                    <p className="campo__error">{errores.terminos}</p>
                </Form.Group>

                <Button bsPrefix="boton" variant="" className="boton--primario boton--ancho-total" type="submit">
                    Registrarme
                </Button>
            </Form>
        </>
    )
}

export default FormularioRegistro
