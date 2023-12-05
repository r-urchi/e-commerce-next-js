'use client'
import React from 'react'
import { useAuthContext } from '../components/context/AuthContext'

export interface User {
    logged: boolean,
    email: string | null,
    uid: string | null
}

const AdminLayout = ({ children, login }: any) => {

    const { user }: User | any = useAuthContext()

    return (
        <>
            {
                user?.logged ?
                    children :
                    login
            }
        </>
    )
}

export default AdminLayout