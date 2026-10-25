import { formatearPesos } from '../../utils/formato'

function Precio({ valor }) {
  return <span className="precio">{formatearPesos(valor)}</span>
}
export default Precio
