import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {

    const { auth, loading } = useAuth()
    
    if (loading) {
        return (
            <div className='d-flex flex-column border border-dark mx-4 py-5 bg-white'>
                <Spinner animation="border" role="status" variant="primary" className='m-auto'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <strong className='m-auto'>Cargando...</strong>
            </div>
        )
    }

    return (
        <>
            {auth._id ? (
                <div /* className="position-relative overflow-visible" style={{height: 'auto'}} */>
                    <Header />
                    <div className="d-flex justify-content-between bg-secondary bg-gradient bg-opacity-25 " style={{ height: '800px' }} >
                        <Sidebar />
                        <main style={{ width: '75%' }} >
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
