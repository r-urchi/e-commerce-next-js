'use client'
import { auth, provider } from "@/firebase/config"
import React, { useContext, createContext, useState, useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })


    const registerUser = async (values: any) => {
        await createUserWithEmailAndPassword(auth, values?.email, values?.password)
    }

    const loginUser = async (values: any) => {
        await signInWithEmailAndPassword(auth, values?.email, values?.password)
    }

    const logOut = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)

            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logOut,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}