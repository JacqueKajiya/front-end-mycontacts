import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { IUsersResponse } from "../interfaces/interfaces";

interface AuthProviderProps{
    children: ReactNode
}

interface AuthContextValues{
    signIn: (data: LoginData) => void;
    loading: boolean;
    userData: IUsersResponse | null;
}

export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) =>{
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState<IUsersResponse>({} as IUsersResponse)

    const token = localStorage.getItem("my-contacts:token")

    useEffect(() =>{
        const loginUser = async () =>{
            if(!token){
                setLoading(false)
                return
            }
            try{
                api.defaults.headers.common.authorization = `Bearer ${token}`
                const response = await api.get("/users")

                setUserData(response.data)
            }catch(error){
                console.error(error)
            }finally{
                setLoading(false)
            }

        }
        loginUser()
    }, [])

    const signIn = async (data: LoginData) =>{
        try{
            const response = await api.post("/login", data)
            setUserData(response.data)

            const { token, userId } = response.data

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("my-contacts:token", token)
            localStorage.setItem("my-contacts:userId", userId)

            navigate('/dashboard')

        }catch (error){
            console.error(error)
        }
    }

    return(
        <AuthContext.Provider value={{signIn, loading, userData}}>
            {children}
        </AuthContext.Provider>
    )
}