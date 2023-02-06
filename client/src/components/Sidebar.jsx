import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <aside className="text-center mt-5" style={{width: '25%'}} >
            <p className="fw-bold" >Hola: Nombre de usuario</p>
            <Link to="create-project" className="btn btn-primary ms-3">
                Nuevo proyecto
            </Link>
        </aside>
    );
};
