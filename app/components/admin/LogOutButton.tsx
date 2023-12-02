'use client'
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import Button from '../ui/Button'

const LogOutButton = () => {

    const { logOut }: any = useAuthContext()

    return (
        <Button onClick={() => logOut()} className='bg-red-500'>Cerrar sesión</Button>
    )
}

export default LogOutButton