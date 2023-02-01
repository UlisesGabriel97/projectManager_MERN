import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AuthLayout} from './layouts/AuthLayout'
import {Login} from './pages/Login'
import {Register} from './pages/Register'
import {ForgetPassword} from './pages/ForgetPassword'
import {RecoverPassword} from './pages/RecoverPassword'
import {ConfirmAccount} from './pages/ConfirmAccount'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<AuthLayout/>}
        >
          <Route
            index
            element={<Login/>}
          />
          <Route
            path='register'
            element={<Register/>}
          />
          <Route
            path='forget-password'
            element={<ForgetPassword/>}
          />
          <Route
            path='recover-password/:token'
            element={<RecoverPassword/>}
          />
          <Route
            path='confirm-account/:token'
            element={<ConfirmAccount/>}
          />
          <Route
            path='*'
            element={<h1>¡404! Página no encontrada</h1>}
          />          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
