import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { clientAxios } from '../../config/clientAxios'
import { Alert } from '../components/Alert'
import { useForm } from '../hooks/useForm'
import { Button, Container, Form } from 'react-bootstrap'

export const Register = () => {

    const [alert, setAlert] = useState({})
    const [sending, setSending] = useState(false)

    const { formValues, handleInputChange, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

    const { name, email, password, password2 } = formValues

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formValues);
        if ([name, email, password, password2].includes("")) {
            handleShowAlert('Todos los campos son obligatorios')
            return null
        }
        if (!exRegEmail.test(email)) {
            handleShowAlert('El email tiene un formato inválido')
            return null
        }
        if (password !== password2) {
            handleShowAlert('Las contraseñas no coinciden')
            return null
        }

        try {

            setSending(true)

            const { data } = await clientAxios.post('/auth/register', {
                name,
                email,
                password
            })

            setSending(false)

            //console.log(data.msg);

            Swal.fire({
                icon: 'info',
                title: '¡Gracias por registrarte!',
                text: data.msg,
            })
            reset()

        } catch (error) {
            console.error(error);
            handleShowAlert(error.response.data.msg)
            Swal.fire({
                icon: 'error',
                title: 'Upss! Hubo problemas en su registración',
                text: error.response.data.msg,
            })
        }

    };
    const handleShowAlert = (msg) => {
        setAlert({
            msg
        })
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }
    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Creá tu cuenta</h1>
            {
                alert.msg && <Alert {...alert} />
            }
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="name">Nombre</Form.Label>
                    <Form.Control
                        id="name"
                        type="text"
                        placeholder="Ingresá tu nombre"
                        autoComplete='off'
                        value={name}
                        name="name"
                        onChange={handleInputChange}    //No se ejecuta porque sino al montarse el componente se ejecuta y tira error
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        placeholder="Ingresá tu email"
                        value={email}
                        name="email"
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="password">Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        name="password"
                        onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="password2">Confirma tu contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        id="password2"
                        placeholder="Ingrese su contraseña"
                        value={password2}
                        name="password2"
                        onChange={handleInputChange} />
                </Form.Group>
                
                <Button variant="secondary" type="submit" disabled={sending} className='d-block mx-auto' >
                    Iniciar sessión
                </Button>
            </Form>
            <nav className='text-center mt-3'>
                <Link to={'/'} >
                    ¿Estás registrado? Iniciá sesión
                </Link>
            </nav>
        </Container>


    )
}
