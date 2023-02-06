import React, { useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import AuthContext from "../context/authProvider";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
    /* const { auth, loading } = useAuth(); */
    const { auth } = useContext(AuthContext)
    const { loading } = AuthContext
    /* setLoading(true) */
    if (loading) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <>
            {auth._id ? (
                <div /* className="position-relative overflow-visible" style={{height: 'auto'}} */>
                    <Header />
                    <div className="d-flex justify-content-between bg-secondary bg-gradient bg-opacity-25 " style={{height: '800px'}} >
                        <Sidebar />
                        <main style={{width: '75%'}} >
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : (
                <Navigate to="/" />
            )}
        </>
    )
}
