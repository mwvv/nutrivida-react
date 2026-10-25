function FichaProducto({ ficha }) {
    if (!ficha || ficha.length === 0) {
        return null
    }

    return (
        <table className="tabla-ficha">
            <tbody>
                {ficha.map(([dato, valor]) => (
                    <tr key={dato}>
                        <th scope="row">{dato}</th>
                        <td>{valor}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default FichaProducto
