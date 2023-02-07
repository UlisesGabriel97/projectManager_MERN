import React, { useEffect } from 'react';
import { Alert } from '../components/Alert';
import { ProjectPreview } from '../components/ProjectPreview';
import { useProjects } from '../hooks/useProjects';

export const Projects = () => {

  const { loading, alert, projects, getProjects } = useProjects()

  useEffect(() => {

    getProjects()


  }, [])

  if (alert.msg) {
    return <Alert {...alert} />
  }

  return (
    <>
      <h1 className="fw-bold my-4" >
        Proyectos
      </h1>
      <div className='bg-white p-4 me-4'>
        {
          loading ?
            <p>Cargando...</p> : (
              projects.length ?
                projects.map(project => {
                  <ProjectPreview key={project._id} {...project} />
                }) :
                <p>No hay proyectos para mostrar</p>
            )
        }
      </div>
    </>
  )
}
