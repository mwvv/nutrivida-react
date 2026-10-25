import { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CampoFormulario from '../molecules/CampoFormulario'
import {
    validarNombreProducto,
    validarTipoProducto,
    validarPrecioProducto,
    validarUnidadProducto,
    validarResumenProducto,
} from '../../utils/validaciones'

const tiposProducto = ['Producto', 'Servicio']
const IMAGEN_GENERICA = '/img/producto-generico.svg'
const LARGO_MAXIMO_RESUMEN = 120

const validadores = {
    nombre: validarNombreProducto,
    tipo: validarTipoProducto,
    precio: validarPrecioProducto,
    unidad: validarUnidadProducto,
    resumen: validarResumenProducto,
}

// El orden de las claves es el orden del formulario: se usa para enfocar el primer error.
const valoresVacios = { nombre: '', tipo: '', precio: '', unidad: '', resumen: '' }
const erroresIniciales = { nombre: '', tipo: '', precio: '', unidad: '', resumen: '' }

function valoresDesde(producto) {
    if (!producto) {
        return valoresVacios
    }
    return {
        nombre: producto.nombre,
        tipo: producto.tipo,
        precio: String(producto.precio),
        unidad: producto.unidad,
        resumen: producto.resumen,
    }
}

function validarTodo(valores) {
    return Object.fromEntries(Object.keys(validadores).map((campo) => [campo, validadores[campo](valores[campo])]))
}

// "Proteína vegetal 1 kg" -> "proteina-vegetal-1-kg"; si ya existe, se agrega -2, -3...
function crearIdUnico(nombre, productos) {
    const base = nombre
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'producto'

    let id = base
    let numero = 2
    while (productos.some((item) => item.id === id)) {
        id = base + '-' + numero
        numero = numero + 1
    }
    return id
}

function FormularioProducto({ producto, productos, onGuardar, onCancelar }) {
    const [valores, setValores] = useState(() => valoresDesde(producto))
    const [errores, setErrores] = useState(erroresIniciales)
    const refFormulario = useRef(null)
    const editando = Boolean(producto)

    const cambiar = (evento) => {
        setValores({ ...valores, [evento.target.name]: evento.target.value })
    }

    const validarCampo = (evento) => {
        const { name, value } = evento.target
        setErrores({ ...errores, [name]: validadores[name](value) })
    }

    // El select se valida también al cambiar, igual que en el registro.
    const cambiarYValidar = (evento) => {
        cambiar(evento)
        validarCampo(evento)
    }

    const enviar = (evento) => {
        evento.preventDefault()

        const nuevosErrores = validarTodo(valores)
        setErrores(nuevosErrores)

        const primerError = Object.keys(nuevosErrores).find((campo) => nuevosErrores[campo])
        if (primerError) {
            refFormulario.current.elements[primerError].focus()
            return
        }

        const datos = {
            nombre: valores.nombre.trim(),
            tipo: valores.tipo,
            precio: parseInt(valores.precio.trim(), 10),
            unidad: valores.unidad.trim(),
            resumen: valores.resumen.trim(),
        }

        if (editando) {
            // Si la descripción era una copia del resumen, se actualiza junto con él.
            const descripcion = producto.descripcion === producto.resumen ? datos.resumen : producto.descripcion
            onGuardar({ ...producto, ...datos, descripcion })
            return
        }

        onGuardar({
            id: crearIdUnico(datos.nombre, productos),
            ...datos,
            imagenes: [{ archivo: IMAGEN_GENERICA, texto: 'Imagen genérica de ' + datos.nombre }],
            descripcion: datos.resumen,
            beneficios: [],
            ficha: [],
        })
        setValores(valoresVacios)
        setErrores(erroresIniciales)
    }

    return (
        <Form className="formulario" noValidate onSubmit={enviar} ref={refFormulario}>
            <CampoFormulario
                id="nombre"
                label="Nombre *"
                type="text"
                maxLength={60}
                value={valores.nombre}
                onChange={cambiar}
                onBlur={validarCampo}
                ayuda="Entre 3 y 60 caracteres."
                error={errores.nombre}
            />

            <Form.Group className="campo">
                <Form.Label htmlFor="tipo">Tipo *</Form.Label>
                <Form.Select
                    id="tipo"
                    name="tipo"
                    value={valores.tipo}
                    onChange={cambiarYValidar}
                    onBlur={validarCampo}
                    className={errores.tipo ? 'campo--error' : ''}
                >
                    <option value="">Selecciona un tipo</option>
                    {tiposProducto.map((tipo) => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                </Form.Select>
                <p className="campo__error">{errores.tipo}</p>
            </Form.Group>

            <div className="fila-campos">
                <CampoFormulario
                    id="precio"
                    label="Precio (CLP) *"
                    type="text"
                    inputMode="numeric"
                    maxLength={7}
                    placeholder="12990"
                    value={valores.precio}
                    onChange={cambiar}
                    onBlur={validarCampo}
                    ayuda="Número entero, sin puntos."
                    error={errores.precio}
                />

                <CampoFormulario
                    id="unidad"
                    label="Unidad *"
                    type="text"
                    maxLength={30}
                    placeholder="unidad, pack, sesión"
                    value={valores.unidad}
                    onChange={cambiar}
                    onBlur={validarCampo}
                    error={errores.unidad}
                />
            </div>

            <CampoFormulario
                id="resumen"
                label="Resumen *"
                as="textarea"
                rows={3}
                maxLength={LARGO_MAXIMO_RESUMEN}
                value={valores.resumen}
                onChange={cambiar}
                onBlur={validarCampo}
                ayuda={'Entre 10 y 120 caracteres. ' + valores.resumen.length + '/' + LARGO_MAXIMO_RESUMEN + '.'}
                error={errores.resumen}
            />

            <div className="grupo-botones">
                <Button bsPrefix="boton" variant="" className="boton--primario" type="submit">
                    {editando ? 'Guardar cambios' : 'Agregar producto'}
                </Button>
                {editando && (
                    <Button bsPrefix="boton" variant="" className="boton--secundario" type="button" onClick={onCancelar}>
                        Cancelar
                    </Button>
                )}
            </div>
        </Form>
    )
}

export default FormularioProducto
