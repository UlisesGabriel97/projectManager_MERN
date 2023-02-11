import React, { useEffect, useRef } from "react";
import { Button, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useProjects } from "../hooks/useProjects";
import { Alert } from "./Alert";

export const FormProject = () => {

    const { formValues, handleInputChange, reset, loading, setFormValues } = useForm({
        name: '',
        description: '',
        dateExpire: '',
        client: ''
    })

    const { id } = useParams()
    let { name, description, dateExpire, client } = formValues
    const { alert, showAlert, storeProject, project } = useProjects()

    const inputName = useRef(null)
    const inputDescription = useRef(null)
    const inputDateExpire = useRef(null)
    const inputClient = useRef(null)

    useEffect(() => {
        if (id) {
            inputName.current.value = project.name
            inputDescription.current.value = project.description
            inputDateExpire.current.value = project.dateExpire && project.dateExpire.split("T")[0]
            inputClient.current.value = project.client

            setFormValues({
                name: project.name,
                description: project.description,
                dateExpire: project.dateExpire.split('T')[0],
                client: project.client,
            });
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, description, dateExpire, client].includes("")) {
            showAlert("Todos los campos son obligatorios");
            return null
        }

        storeProject({
            id: id ? id : null,
            name,
            description,
            dateExpire,
            client
        })
    }

    return (

        <Form onSubmit={handleSubmit} className='p-3 bg-white me-4' >
            {alert.msg && <Alert {...alert} />}
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nombre Proyecto</Form.Label>
                <Form.Control type="text" id="name" placeholder="Nombre del proyecto"
                    value={name}
                    onChange={handleInputChange}
                    name="name"
                    ref={inputName}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="description">Descripción</Form.Label>
                <Form.Control type="text" id="description" as="textarea" rows={3} style={{ resize: "none" }} placeholder="Descripción del proyecto"
                    value={description}
                    onChange={handleInputChange}
                    name="description"
                    ref={inputDescription}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="dateExpire">Fecha de entrega</Form.Label>
                <Form.Control type="date" id="dateExpire" placeholder="Descripción del proyecto"
                    value={dateExpire}
                    onChange={handleInputChange}
                    name="dateExpire"
                    ref={inputDateExpire}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="client">Nombre Cliente</Form.Label>
                <Form.Control type="text" id="client" placeholder="Nombre del cliente"
                    value={client}
                    onChange={handleInputChange}
                    name="client"
                    ref={inputClient}
                />
            </Form.Group>

            <Button variant={id ? 'success' : 'primary'} type="submit">
                {id ? 'Actualizar proyecto' : 'Guardar proyecto'}
            </Button>
        </Form>
    );
};