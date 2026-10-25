import Boton from '../atoms/Boton'

function FiltroTipos({ opciones, seleccionado, onCambiar }) {
    return (
        <div className="grupo-botones">
            {opciones.map((opcion) => (
                <Boton
                    key={opcion}
                    texto={opcion}
                    variante={opcion === seleccionado ? 'primario' : 'secundario'}
                    onClick={() => onCambiar(opcion)}
                />
            ))}
        </div>
    )
}

export default FiltroTipos
