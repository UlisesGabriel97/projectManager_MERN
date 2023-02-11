import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Header = () => {

    const navigate = useNavigate()

    const handleCloseSession = () => {

        Swal.fire({
            icon: 'question',
            title: '¿Quieres cerrar la sesión?',
            confirmButtonText: 'Cerrar sesión',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
        }).then(result => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('token')
                navigate('/')
            }
        })
    }

    return (
        <div className="d-flex justify-content-between align-items-center flex-row mx-1" style={{ height: '60px' }}>
            <h2 className="text-primary" >Projects Manager</h2>
            <div>
                <input className="rounded p-1" type="text" placeholder="Buscar proyecto..." />
            </div>
            <div>
                <Link to='/projects' className="text-decoration-none text-dark fw-bold" >
                    Mis Proyectos
                </Link>
                <button type="button" className="btn btn-primary ms-3" onClick={handleCloseSession} >
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
};
