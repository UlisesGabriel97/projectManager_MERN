import React from "react";
import { Button, Form } from 'react-bootstrap'

export const FormProject = () => {
    return (

        <Form /* onSubmit={} */ className='p-3 bg-white me-4' >

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="name">Nombre Proyecto</Form.Label>
                <Form.Control type="text" id="name" placeholder="Nombre del proyecto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="description">Descripción</Form.Label>
                <Form.Control type="text" id="description" as="textarea" rows={3} style={{ resize: "none" }} placeholder="Descripción del proyecto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="date-expire">Fecha de entrega</Form.Label>
                <Form.Control type="date" id="date-expire" placeholder="Descripción del proyecto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="client">Nombre Cliente</Form.Label>
                <Form.Control type="text" id="client" placeholder="Nombre del cliente" />
            </Form.Group>

            <Button variant="primary" type="submit">
                actualizar/guardar
            </Button>
        </Form>
    );
};