import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form } from 'react-bootstrap'
import { Alert } from '../components/Alert'
import Swal from 'sweetalert2'
import { clientAxios } from '../../config/clientAxios'


export const ForgetPassword = () => {

    const [alert, setAlert] = useState({})
    const [email, setEmail] = useState("")
    const [sending, setSending] = useState(false)

    const handleShowAlert = (msg) => {
        setAlert({
            msg
        })

        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            handleShowAlert('El email es obligatorio')
            return null
        }

        try {
            setSending(true)
            const { data } = await clientAxios.post('/auth/send-token', {
                email
            })

            setSending(false)
            Swal.fire({
                icon: 'info',
                title: 'Token enviado',
                text: data.msg,
                confirmButtonText: 'Entendido'
            })

            setEmail("")

        } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg)
            setEmail("")
        }
    }

    
    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Recupera tu acceso</h1>
            {
                alert.msg && <Alert {...alert} />
            }
            <Form onSubmit={handleSubmit} >

                <Form.Group className="mb-3">
                    <Form.Label htmlor="email">Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Button variant="secondary" type="submit" className='d-block mx-auto' disabled={sending} >
                    Recuperar contraseña
                </Button>
            </Form>
            <nav className='text-center'>
                <Link to={'/register'} className='d-block my-3 text-decoration-none'>
                    ¿No tenés una cuenta? Registrate
                </Link>
                <Link to={"/"} className='text-decoration-none'>
                    ¿Estás registrado? Iniciá sesión
                </Link>
            </nav>
        </Container>


    )
}
