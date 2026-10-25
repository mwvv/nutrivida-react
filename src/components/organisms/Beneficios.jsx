import Beneficio from '../molecules/Beneficio'
import EncabezadoSeccion from '../molecules/EncabezadoSeccion'

function Beneficios({ beneficios }) {
    return (
        <section className="seccion seccion--clara">
            <div className="contenedor">
                <EncabezadoSeccion
                    etiqueta="Por qué NutriVida"
                    titulo="Productos y servicios que se complementan"
                    texto="No vendemos solo frascos: combinamos lo que comes con quien te orienta. Esa mezcla es lo que hace que los cambios duren."
                />

                <div className="rejilla-beneficios">
                    {beneficios.map((beneficio) => (
                        <Beneficio
                            key={beneficio.titulo}
                            titulo={beneficio.titulo}
                            texto={beneficio.texto}
                            trazos={beneficio.trazos}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Beneficios
