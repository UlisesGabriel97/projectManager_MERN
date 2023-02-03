import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/authProvider";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {
    /* const { auth, loading } = useAuth(); */
    const {auth} = useContext(AuthContext)
    const {loading} = AuthContext

    if (loading) {
        return <p>Cargando...</p>;
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
