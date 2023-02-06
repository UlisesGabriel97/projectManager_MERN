import React from 'react'
import { FormProject } from '../components/FormProject'

export const ProjectAdd = () => {
    return (
        <>
            <h1 className="fw-bold my-4">
                Crear proyecto
            </h1>
            <div>
                <FormProject />
            </div>
        </>
    )
}
