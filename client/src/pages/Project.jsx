import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Collaborator } from "../components/Collaborator";
import { Task } from "../components/Task";
import { useProjects } from "../hooks/useProjects";

export const Project = () => {

    const { id } = useParams()
    const { loading, alert, project, getProject } = useProjects
    const { name, description, dateExpire, client } = project

    useEffect(() => {
        getProject(id)
    }, [id])




    return (
        <>
            {
                loading ? (
                    <p> Cargando...</p >
                ) : (
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h1 className="fw-bold my-4" >{name}</h1>
                            <Link to={`/projects/edit-project/:id`} className="me-5 d-flex align-items-center" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    style={{ width: '20px' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832
19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863
4.487zm0 0L19.5 7.125"
                                    />
                                </svg>
                                <p className="text-dark text-decoration-none mb-0 ms-2" >Editar</p>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold m-0" >Tareas del proyecto</h5>
                            {/* <Link to={`/projects/create-task`} className="me-5 d-flex align-items-center"> */}
                            <div /* onClick={} */ >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{ width: '20px' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                                <p className="mb-0 ms-2">Nueva Tarea</p>
                            </div>
                            {/* </Link> */}
                        </div>
                        <Task />
                        <div className="d-flex justify-content-between align-items-center my-4 " >
                            <h5 className="fw-bold m-0" >Colaboradores</h5>
                            <button /* onClick={} */ className="d-flex align-items-center me-4 border-none" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    style={{ width: '20px' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75
0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318
0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                    />
                                </svg>
                                <p className="mb-0 ms-2">Agregar Colaborador</p>
                            </button>
                        </div>
                        <Collaborator />
                    </div>
                )
            }
        </>
    );
};