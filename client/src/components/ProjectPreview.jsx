import React from "react";
import { Link } from "react-router-dom";

export const ProjectPreview = () => {
    return (
        <div className="d-flex justify-content-between border-primary border-bottom border-opacity-50 mb-4" style={{height: '35px'}}>
            <p >
                Nombre del proyecto
                <span> | Cliente</span>
            </p>
            <Link to='direccionDelProyecto' className="text-decoration-none text-dark fw-semibold">
                Ver proyecto
            </Link>
        </div>
    );
};
