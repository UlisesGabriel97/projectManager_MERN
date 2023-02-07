import React from "react";
import { Button, Form } from 'react-bootstrap'
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";

export const FormProject = () => {

    const { formValues, handleInputChange, reset } = useForm({
        name: '',
        description: '',
        dateExpire: '',
        client: ''
    })

    const { name, description, dateExpire, client } = formValues

    const { alert, showAlert, storeProject } = useProjects()

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, description, dateExpire, client].includes("")) {
            showAlert("Todos los campos son obligatorios", true);
            return null
        }

        storeProject({
            name,
            description,
            dateExpire,
            client
        })
    }

    return (

        <Form onSubmit={handleSubmit} className='p-3 bg-white me-4' >

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="name">Nombre Proyecto</Form.Label>
                <Form.Control type="text" id="name" placeholder="Nombre del proyecto"
                    value={name}
                    onChange={handleInputChange}
                    name="name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="description">Descripción</Form.Label>
                <Form.Control type="text" id="description" as="textarea" rows={3} style={{ resize: "none" }} placeholder="Descripción del proyecto"
                    value={description}
                    onChange={handleInputChange}
                    name="description"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="date-expire">Fecha de entrega</Form.Label>
                <Form.Control type="date" id="date-expire" placeholder="Descripción del proyecto"
                    value={date - expire}
                    onChange={handleInputChange}
                    name="date-expire"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="client">Nombre Cliente</Form.Label>
                <Form.Control type="text" id="client" placeholder="Nombre del cliente"
                    value={client}
                    onChange={handleInputChange}
                    name="client"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                actualizar/guardar
            </Button>
        </Form>
    );
};