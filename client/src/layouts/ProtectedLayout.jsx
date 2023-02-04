import React, { useContext } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/authProvider";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
    /* const { auth, loading } = useAuth(); */
    const { auth } = useContext(AuthContext)
    const { loading, setLoading } = AuthContext
    /* setLoading(true) */
    if (loading) {
        return (
            <>
                <Spinner animation="border" variant="success" />
            </>
        )
    }

    return (
        <>
            {auth._id ? (
                <main>
                    <Outlet />
                </main>
            ) : (
                <Navigate to="/" />
            )}
        </>
    )
}
