import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'


export const ForgetPassword = () => {
    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Recupera tu acceso</h1>
            <Form >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="email">Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        placeholder="Ingrese su email" />
                </Form.Group>

                <Button variant="secondary" type="submit" className='d-block mx-auto' >
                    Recuperar contraseña
                </Button>
            </Form>
            <nav className='text-center'>
                <Link to={'/register'} className='d-block my-3'>
                    ¿No tenés una cuenta? Registrate
                </Link>
                <Link to={"/"} >
                    ¿Estás registrado? Iniciá sesión
                </Link>
            </nav>
        </Container>


    )
}
