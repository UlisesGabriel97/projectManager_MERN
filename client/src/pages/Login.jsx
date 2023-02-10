import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'
import { Alert } from '../components/Alert'
import { clientAxios } from '../config/clientAxios'
import { useForm } from '../hooks/useForm'
import useAuth from '../hooks/useAuth'

const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

export const Login = () => {

    const [alert, setAlert] = useState({})
    const { setAuth } = useAuth()
    const navigate = useNavigate()


    const handleShowAlert = (msg, time = true) => {
        setAlert({
            msg
        })

        if (time) {
            setTimeout(() => {
                setAlert({})
            }, 3000);
        }
        reset()
    }

    const { formValues, handleInputChange, reset } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([email, password].includes("")) {
            handleShowAlert('Todos los campos son obligatorios')
            return null
        }
        if (!exRegEmail.test(email)) {
            handleShowAlert('El email tiene un formato inválido')
            return null
        }

        try {

            const { data } = await clientAxios.post('/auth/login', {
                email,
                password
            })

            setAuth(data.user)
            sessionStorage.setItem('token', data.token)
            navigate('/projects')

        } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg)
        }
    }

    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Iniciá sesión</h1>
            {
                alert.msg && <Alert {...alert} />
            }
            <Form onSubmit={handleSubmit} >

                <Form.Group className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        placeholder="Ingrese su email"
                        name="email"
                        value={email}
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange} />
                </Form.Group>

                <Button variant="secondary" type="submit" className='d-block mx-auto' >
                    Iniciar sesión
                </Button>
            </Form>
            <nav className='text-center'>
                <Link to={'/register'} className='d-block my-3 text-decoration-none'>
                    ¿No tenés una cuenta? Registrate
                </Link>
                <Link to={'/forget-password'} className='text-decoration-none' >
                    Olvidé mi password
                </Link>
            </nav>
        </Container>
    )
}
