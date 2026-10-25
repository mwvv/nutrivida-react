function SelectorCantidad({ id = 'cantidad', etiqueta, cantidad, min, max, onEscribir, onPaso }) {
    return (
        <div className="selector-cantidad">
            <label htmlFor={id}>{etiqueta}</label>
            <div className="selector-cantidad__control">
                <button
                    className="selector-cantidad__boton"
                    type="button"
                    disabled={cantidad <= min}
                    onClick={() => onPaso(-1)}
                >
                    &minus;
                </button>
                <input
                    className="selector-cantidad__campo"
                    type="number"
                    id={id}
                    name="cantidad"
                    value={cantidad}
                    min={min}
                    max={max}
                    step="1"
                    onChange={(evento) => onEscribir(evento.target.value)}
                />
                <button
                    className="selector-cantidad__boton"
                    type="button"
                    disabled={cantidad >= max}
                    onClick={() => onPaso(1)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default SelectorCantidad
