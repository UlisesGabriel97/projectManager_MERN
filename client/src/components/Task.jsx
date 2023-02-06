import React from "react";
export const Task = () => {
    return (
        <div className="my-3 d-flex justify-content-between p-3 bg-white me-4">
            <div>
                <p>Nombre de la tarea</p>
                <p>Descripción de la tarea</p>
                <p>Fecha de entrega</p>
                <p>Prioridad</p>
            </div>
            <div>
                <button /* onClick={} */ className="btn btn-success me-1" >
                    Editar
                </button>
                <button className="btn btn-secondary" >Completa/Incompleta</button>
                <button /* onClick={} */ className="btn btn-danger ms-1" >
                    Eliminar
                </button>
            </div>
        </div>
    );
};
