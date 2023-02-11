import React, { useEffect } from 'react';
import { ProjectPreview } from '../components/ProjectPreview';
import { useProjects } from '../hooks/useProjects';

export const Projects = () => {

  const { loading, alert, projects, getProjects } = useProjects()

  useEffect(() => {
    getProjects()
  }, [])


  return (
    <>
      <h1 className="fw-bold my-4" >
        Proyectos
      </h1>
      <div className='bg-white px-3 pt-3 pb-2 me-4'>
        {
          loading ?
            <p>Cargando...</p> : (
              projects.length ?
                projects.map(project => {
                  return <ProjectPreview key={project._id} {...project} />
                }) :
                <p>No hay proyectos para mostrar</p>
            )
        }
      </div>
    </>
  )
}
