import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'


export const RecoverPassword = () => {
    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Reestablecé tu contraseña</h1>
            <Form >

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="password">Nueva contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder="Escribí tu nueva contraseña" />
                </Form.Group>

                <Button variant="secondary" type="submit" className='d-block mx-auto' >
                    Guardar tu contraseña
                </Button>
            </Form>
        </Container>
    )
}
