import { Form } from 'react-bootstrap'

function CampoFormulario({ id, label, ayuda, error, ref, ...control }) {
    return (
        <Form.Group className="campo">
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
                id={id}
                name={id}
                ref={ref}
                className={error ? 'campo--error' : ''}
                {...control}
            />
            {ayuda && <span className="campo__ayuda">{ayuda}</span>}
            <p className="campo__error">{error}</p>
        </Form.Group>
    )
}

export default CampoFormulario
