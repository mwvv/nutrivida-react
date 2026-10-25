// Las sesiones guardadas antes de agregar estos datos pueden no tenerlos.
const SIN_DATO = 'Sin información'

function DatosUsuario({ usuario }) {
    const datos = [
        ['Nombre', usuario.nombre],
        ['Apellidos', usuario.apellidos],
        ['Correo electrónico', usuario.correo],
        ['Región', usuario.region],
        ['Comuna', usuario.comuna],
        ['Objetivo nutricional', usuario.objetivo],
        ['Tipo de alimentación', usuario.alimentacion],
    ]

    return (
        <div className="caja-compra">
            <h2>{[usuario.nombre, usuario.apellidos].filter(Boolean).join(' ')}</h2>
            <p className="texto-secundario">{usuario.correo}</p>

            <table className="tabla-ficha">
                <tbody>
                    {datos.map(([dato, valor]) => (
                        <tr key={dato}>
                            <th scope="row">{dato}</th>
                            <td>{valor || SIN_DATO}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DatosUsuario
