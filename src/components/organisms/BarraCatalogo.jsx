import FiltroTipos from '../molecules/FiltroTipos'

function BarraCatalogo({ total, opciones, seleccionado, onCambiar }) {
    return (
        <div className="barra-catalogo">
            <p className="texto-secundario"><strong>{total} ítems</strong> disponibles</p>
            <FiltroTipos opciones={opciones} seleccionado={seleccionado} onCambiar={onCambiar} />
        </div>
    )
}

export default BarraCatalogo
