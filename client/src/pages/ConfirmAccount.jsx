import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { clientAxios } from '../config/clientAxios'
import { Alert } from '../components/Alert'

export const ConfirmAccount = () => {

    const { token } = useParams()

    const navigate = useNavigate()
    const [alert, setAlert] = useState({})

    const handleShowAlert = (msg) => {
        setAlert({
            msg
        })
    }

    useEffect(() => {

        const confirmAccount = async () => {
            try {
                const { data } = await clientAxios.get(`/auth/checkedUser?token=${token}`)
                
                Swal.fire({
                    icon: 'info',
                    title: '¡Bienvenido a nuestra página!',
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
            }
        }
    confirmAccount()

    }, [])


    return (
        <>
            <Container className='mx-auto mt-5 border border-success rounded shadow p-5' style={{ width: "500px" }}>
                <h1 className='text-center'>
                    Confirma tu cuenta
                </h1>
                <div>
                    {
                        alert.msg && (
                            <>
                                <Alert {...alert} />
                                <nav className='text-center '>
                                    <Link to={'/register'} className='d-block my-3 text-decoration-none'>
                                        ¿No tenés una cuenta? Registrate
                                    </Link>
                                    <Link to={"/"} className='text-decoration-none'>
                                        ¿Estás registrado? Iniciá sesión
                                    </Link>
                                </nav>
                            </>
                        )
                    }
                </div>
            </Container>
        </>
    )
}
