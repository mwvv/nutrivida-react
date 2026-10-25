import { useState } from 'react'

function GaleriaProducto({ imagenes }) {
    const [imagenActiva, setImagenActiva] = useState(0)
    const principal = imagenes[imagenActiva]

    return (
        <div className="galeria">
            <figure className="galeria__principal">
                <img src={principal.archivo} alt={principal.texto} width="800" height="600" />
            </figure>
            <div className="galeria__miniaturas">
                {imagenes.map((imagen, indice) => (
                    <button
                        key={indice}
                        className={indice === imagenActiva ? 'galeria__miniatura activa' : 'galeria__miniatura'}
                        type="button"
                        onClick={() => setImagenActiva(indice)}
                    >
                        <img src={imagen.archivo} alt={imagen.texto} width="800" height="600" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default GaleriaProducto
