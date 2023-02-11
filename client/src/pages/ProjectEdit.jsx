import React from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FormProject } from "../components/FormProject";
import { useProjects } from "../hooks/useProjects";

export const ProjectEdit = () => {

    const { id } = useParams()
    const { deleteProject } = useProjects()

    const handleDelete = () => {

        Swal.fire({
            title: '¿Estás seguro de eliminar el proyecto?',
            showCancelButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Confirmar',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProject(id)
            }
        })

    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="fw-bold my-4">Editar proyecto: Nombre del proyecto</h1>
                <Link onClick={handleDelete} className="me-5 d-flex align-items-center text-decoration-none text-dark">
                    <i className="fas fa-trash"></i>
                    <p className="m-0 ps-3" >Eliminar</p>
                </Link>
            </div>
            <div>
                <FormProject />
            </div>
        </>
    );
};
