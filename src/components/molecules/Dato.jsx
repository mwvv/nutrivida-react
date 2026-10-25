function Dato({ numero, texto }) {
    return (
        <div className="dato">
            <span className="dato__numero">{numero}</span>
            <span className="dato__texto">{texto}</span>
        </div>
    )
}

export default Dato
