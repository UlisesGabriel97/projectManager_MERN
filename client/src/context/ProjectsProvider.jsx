import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clientAxios } from '../../config/clientAxios';

const ProjectsContext = createContext()
const navigate = useNavigate()

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

const ProjectsProvider = ({ children }) => {

    const [alert, setAlert] = useState({})
    const [loading, setLoading] = useState(true)

    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([])

    const showAlert = (msg, time = true) => {
        setAlert({
            msg
        })

        if (time) {
            setTimeout(() => {
                setAlert({})
            }, 3000);
        }
    }

    const getProjects = async () => {
        setLoading(true)

        try {
            const token = sessionStorage.getItem('token')
            if (!token) return null

            const config = {
                headers: {
                    "Content-Type": 'applications/json',
                    Authorization: token
                }
            }

            const { data } = await clientAxios.get('/projects', config)
            setProjects(data.projects)
            setAlert({})

        } catch (error) {
            console.error(error)
            showAlert(error.response ? error.response.data.msg : 'Upps.. hubo un error', false)
        } finally {
            setLoading(false)
        }
    }

    const getProject = async (id) => {
        setLoading(true)

        try {
            const token = sessionStorage.getItem('token')
            if (!token) return null

            const config = {
                headers: {
                    "Content-Type": 'applications/json',
                    Authorization: token
                }
            }
            const { data } = await clientAxios.get(`/projects/${_id}`, config)
            setProject(data.project)
            setAlert({})
        } catch (error) {
            console.error(error)
            showAlert(error.response ? error.response.data.msg : 'Upps.. hubo un error', false)
        } finally {
            setLoading(false)
        }
    }

    const storeProject = async (project) => {

        try {
            const token = sessionStorage.getItem('token')
            if (!token) return null

            const config = {
                headers: {
                    "Content-Type": 'applications/json',
                    Authorization: token
                }
            }

            const { data } = await clientAxios.post('/projects', project, config)
            setProjects([...projects, data.project])

            Toast.fire({
                icon: 'success',
                title: data.msg,
            })

            navigate('/projects')

        } catch (error) {
            console.error(error)

            const {response} = error
            if (response?.status === 401) {
                navigate('/')
            } else {
                showAlert(response ? response.data.msg : 'Upps.. hubo un error', false)
            }
        }


    }

    return (
        <ProjectsContext.Provider
            value={{
                loading,
                alert,
                showAlert,
                projects,
                getProjects,
                project,
                getProject,
                storeProject,
            }}
        >
            {children}

        </ProjectsContext.Provider>
    )
}

export {
    ProjectsProvider
}

export default ProjectsContext