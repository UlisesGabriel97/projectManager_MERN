import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert } from "../components/Alert";
import { Collaborator } from "../components/Collaborator";
import { Task } from "../components/Task";
import { useProjects } from "../hooks/useProjects";

export const Project = () => {

    const { id } = useParams()
    const { loading, alert, project, getProject } = useProjects()
    const { name, description, dateExpire, client, _id } = project

    useEffect(() => {
        getProject(id)
    }, [id])


    if (alert.msg) return <Alert {...alert} />

    return (
        <>
            {
                loading ? (
                    <p> Cargando...</p >
                ) : (
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="fw-bold my-4" >{name}</h1>
                            <Link to={`/projects/edit-project/${_id}`} className="me-4 d-flex align-items-center text-decoration-none" >
                                <i className="fas fa-pen text-dark"></i>
                                <p className="text-dark text-decoration-none mb-0 ms-2" >Editar</p>
                            </Link>
                        </div>
                        <div className="border-dark border-top border-bottom me-4 py-2 d-flex justify-content-between">
                            <p className="m-0">Cliente: <strong>{client}</strong></p>
                            <span>Fecha de entrega: <strong>{dateExpire?.split('T')[0]}</strong></span>
                        </div>
                        <div className="my-2 me-4">{description}</div>
                        <div className="d-flex justify-content-between align-items-center me-4">
                            <h5 className="fw-bold m-0" >Tareas del proyecto</h5>
                            <div /* onClick={} */ className="text-dark text-decoration-none mb-0 ms-2 d-flex align-items-center" >
                                <i className="fas fa-plus"></i>
                                <p className="mb-0 ms-2">Nueva Tarea</p>
                            </div>
                        </div>
                        <Task />
                        <div className="d-flex justify-content-between align-items-center my-4 " >
                            <h5 className="fw-bold m-0" >Colaboradores</h5>
                            <div /* onClick={} */ className="d-flex align-items-center me-4 border-none" >
                                <i className="fas fa-user-plus"></i>
                                <p className="mb-0 ms-2">Agregar Colaborador</p>
                            </div>
                        </div>
                        <Collaborator />
                    </div>
                )
            }
        </>
    );
};