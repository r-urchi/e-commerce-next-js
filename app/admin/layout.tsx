'use client'
import React from 'react'
import { useAuthContext } from '../components/context/AuthContext'

const AdminLayout = ({ children, login }: any) => {

    const { user }: any = useAuthContext()

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