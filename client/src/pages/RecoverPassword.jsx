import { useEffect, useState } from "react"
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { clientAxios } from '../config/clientAxios'
import { Alert } from '../components/Alert'


export const RecoverPassword = () => {

    const [alert, setAlert] = useState({})
    const [password, setPassword] = useState("")
    const [tokenChecked, setTokenChecked] = useState(false)

    const { token } = useParams()
    const navigate = useNavigate()

    const handleShowAlert = (msg) => {
        setAlert({
            msg
        })
        setTimeout(() => {
            setAlert({})
        }, 3000);
    }

    useEffect(() => {

        const checkToken = async () => {
            try {
                const { data } = await clientAxios.get(`/auth/reset-password?token=${token}`)
                setTokenChecked(true)

            } catch (error) {
                console.error(error)
                handleShowAlert(error.response?.data.msg)
            }
        }

        checkToken()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!password) {
            handleShowAlert('Debe ingresar la contraseña')
            return null
        }

        try {
            const { data } = await clientAxios.post(`/auth/reset-password?token=${token}`, {
                password
            })

            Swal.fire({
                icon: 'success',
                title: 'Contraseña actualizada',
                text: data.msg,
                confirmButtonText: 'Iniciar sesión',
                allowOutsideClick : false
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/')
                }
            })

        } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg)
            setPassword('')
        }


    }

    return (

        <Container className="mx-auto mt-5 border border-success rounded shadow p-5" style={{ width: "500px" }} >
            <h1 className='mb-3'>Reestablecé tu contraseña</h1>
            {
                alert.msg && <Alert {...alert} />
            }
            {
                tokenChecked ? (
                    <Form onSubmit={handleSubmit} >

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Nueva contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Escribí tu nueva contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="secondary" type="submit" className='d-block mx-auto' >
                            Reestablecé tu contraseña
                        </Button>
                    </Form>
                ) : (
                    <nav className='text-center'>
                        <Link to={'/register'} className='d-block my-3 text-decoration-none'>
                            ¿No tenés una cuenta? Registrate
                        </Link>
                        <Link to={"/"} className='text-decoration-none' >
                            ¿Estás registrado? Iniciá sesión
                        </Link>
                    </nav>
                )
            }
        </Container>
    )
}
