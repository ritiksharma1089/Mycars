"use client"
import {SessionProvider} from "next-auth/react"

export const AuthProider=({children})=>{
    return (
        
        <SessionProvider>{children}</SessionProvider>
    )
}