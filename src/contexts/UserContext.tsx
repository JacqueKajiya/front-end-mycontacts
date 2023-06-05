import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserData, IUsersResponse } from "../interfaces/interfaces";
import { createUserService, getUserService } from "../services/api.services";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";

import jwt_decode from "jwt-decode"
import { toast } from "react-toastify";

export interface IUserAuth{
    createUser: (data: IUserData) => void;
    getUser: () => void;
    setUserData: Dispatch<SetStateAction<IUsersResponse>>;
    userData: IUsersResponse;
    logOut: () => void;
    signIn: (data: LoginData) => void;
    userId: string | undefined;
}

interface ITokenInfo{
    username: string;
    iat: number;
    exp: number;
    sub: string;
}

interface IUserProps{
    children: ReactNode
}

export const UserContext = createContext<IUserAuth>({} as IUserAuth)

export const UserProvider = ({children}: IUserProps) => {
    const [userData, setUserData] = useState<IUsersResponse>({} as IUsersResponse)
    const [userId, setUserId] = useState<string>()

    const navigate = useNavigate();

    const signIn = async(data: LoginData) => {
        try{
            const response = await api.post("/login", data)

            const { token } = response.data

            const userDecode: ITokenInfo = jwt_decode(token)

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem("my-contacts:token", token)
            setUserId(userDecode.sub)

            navigate(`/dashboard/${userDecode.sub}`)

        }catch (error){
            console.error(error)
            toast.error("Algum dado está errado!",{
                autoClose:1200,
            })
        }
    }

    const createUser = async(data: IUserData) => {
        try{
            await createUserService(data)

            navigate("/")
        } catch(error) {console.error(error)}
    }

    const getUser = async() =>{
        const userData = await getUserService()

        setUserData(userData)
    }

    const logOut = () => {
        localStorage.clear();
        navigate("/")
    }

    return(
        <UserContext.Provider value={{createUser, getUser, userData, setUserData, logOut, signIn, userId}}>
            {children}
        </UserContext.Provider>
    )

}
