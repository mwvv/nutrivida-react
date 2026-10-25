

function Precio({ valor }) {
  return <span className="precio">${valor.toLocaleString('es-CL')}</span>
}
export default Precio