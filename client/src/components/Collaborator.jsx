import React from "react";

export const Collaborator = () => {
    return (
        <div className="d-flex justify-content-between align-items-center bg-white px-3 py-3 me-4 border-bottom">
            <p className="mb-0">
                Nombre de colaborador 
                <span> |Email</span>
            </p>
            <div>
                <button /* onClick={handleDelete} */ className="btn btn-danger ms-1"  >
                    Eliminar
                </button>
            </div>
        </div>
    );
};
