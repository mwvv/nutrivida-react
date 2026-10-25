function EncabezadoSeccion({ etiqueta, titulo, texto }) {
    return (
        <div className="seccion__encabezado seccion__encabezado--centrado">
            <span className="etiqueta-superior">{etiqueta}</span>
            <h2>{titulo}</h2>
            <p className="texto-secundario">{texto}</p>
        </div>
    )
}

export default EncabezadoSeccion
