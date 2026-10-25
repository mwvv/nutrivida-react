import { Link } from 'react-router-dom'

function Boton({ texto, variante = 'primario', to, onClick, type = 'button' }) {
    const clases = `boton boton--${variante}`
    if (to) return <Link className={clases} to={to}>{texto}</Link>
    return <button className={clases} onClick={onClick} type={type}>{texto}</button>
}
export default Boton