import { Fragment } from 'react'
import Insignia from '../atoms/Insignia'

function FiltroTipos({ opciones, seleccionado, onCambiar }) {
    return (
        <div className="leyenda-tipos">
            {opciones.map((opcion) => (
                <Fragment key={opcion.tipo}>
                    <button
                        type="button"
                        className="filtro-insignia"
                        aria-pressed={opcion.tipo === seleccionado}
                        onClick={() => onCambiar(opcion.tipo)}
                    >
                        <Insignia tipo={opcion.tipo} />
                    </button>
                    <span>{opcion.descripcion}</span>
                </Fragment>
            ))}
        </div>
    )
}

export default FiltroTipos
