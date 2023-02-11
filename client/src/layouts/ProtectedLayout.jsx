import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
    
    const { auth, loading } = useAuth()
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
