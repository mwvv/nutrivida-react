import FiltroTipos from '../molecules/FiltroTipos'

function BarraCatalogo({ total, opciones, seleccionado, onCambiar }) {
    return (
        <div className="barra-catalogo">
            <p className="texto-secundario"><strong>{total} ítems</strong> disponibles</p>
            <FiltroTipos opciones={opciones} seleccionado={seleccionado} onCambiar={onCambiar} />
            <div className="leyenda-tipos">
                <span className="insignia insignia--producto">Producto</span>
                <span>llega a tu domicilio</span>
                <span className="insignia insignia--servicio">Servicio</span>
                <span>se agenda o se descarga</span>
            </div>
        </div>
    )
}

export default BarraCatalogo
