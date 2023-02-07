import React from "react";
import { Link } from "react-router-dom";

export const ProjectPreview = ({name, _id, client}) => {
    return (
        <div className="d-flex justify-content-between border-primary border-bottom border-opacity-50 mb-4" style={{height: '35px'}}>
            <p >
                {name}
                <span> | {client}</span>
            </p>
            <Link to={`/projects/${_id}`} className="text-decoration-none text-dark fw-semibold">
                Ver proyecto
            </Link>
        </div>
    );
};
