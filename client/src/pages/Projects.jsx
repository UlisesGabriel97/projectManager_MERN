import React from 'react';
import { ProjectPreview } from '../components/ProjectPreview';

export const Projects = () => {
  return (
    <>
      <h1 className="fw-bold my-4" >
        Proyectos
      </h1>
      <div className='bg-white p-4 me-4'>
        <ProjectPreview />
      </div>
    </>
  )
}
