import { Link } from 'react-router-dom'

function Migas({ migas }) {
    return (
        <nav className="migas">
            <ol>
                {migas.map((miga) => (
                    <li key={miga.label}>
                        {miga.to ? <Link to={miga.to}>{miga.label}</Link> : miga.label}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Migas
