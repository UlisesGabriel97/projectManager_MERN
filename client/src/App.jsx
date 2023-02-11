import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { ForgetPassword } from './pages/ForgetPassword'
import { RecoverPassword } from './pages/RecoverPassword'
import { ConfirmAccount } from './pages/ConfirmAccount'
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './layouts/ProtectedLayout'
import { Projects } from './pages/Projects'
import { ProjectAdd } from './pages/ProjectAdd'
import { ProjectEdit } from './pages/ProjectEdit'
import { Project } from './pages/Project'
import { ProjectsProvider } from './context/ProjectsProvider'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectsProvider>
          <Routes>
            {/* Rutas Púbicas */}
            <Route
              path='/'
              element={<AuthLayout />}
            >
              <Route
                index
                element={<Login />}
              />
              <Route
                path='register'
                element={<Register />}
              />
              <Route
                path='forget-password'
                element={<ForgetPassword />}
              />
              <Route
                path='recover-password/:token'
                element={<RecoverPassword />}
              />
              <Route
                path='confirm/:token'
                element={<ConfirmAccount />}
              />
              <Route
                path='*'
                element={<h1>¡404! Página no encontrada</h1>}
              />
            </Route>
            {/* Rutas Privadas */}
            <Route
              path='/projects'
              element={<ProtectedLayout />}
            >
              <Route
                index
                element={<Projects />}
              />
              <Route 
                path='create-project'
                element={<ProjectAdd />}
              />
              <Route 
                path='edit-project/:id'
                element={<ProjectEdit />}
              />
              <Route 
                path=':id'
                element={<Project />}
              />
            </Route>
          </Routes>
        </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
