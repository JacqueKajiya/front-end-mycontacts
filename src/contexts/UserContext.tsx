import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserData, IUsersResponse } from "../interfaces/interfaces";
import { createUserService, getUserService } from "../services/api.services";

export interface IUserAuth{
    createUser: (data: IUserData) => void;
    getUser: () => void;
    user: IUsersResponse;
    logOut: () => void;
}

interface IUserProps{
    children: ReactNode
}

export const UserContext = createContext<IUserAuth>({} as IUserAuth)

const UserProvider = ({children}: IUserProps) => {
    const [user, setUser] = useState<IUsersResponse>({} as IUsersResponse)

    const navigate = useNavigate();

    const createUser = async(data: IUserData) => {
        try{
            await createUserService(data)

            navigate("/")
        } catch(error) {console.error(error)}
    }

    const getUser = async() =>{
        const userData = await getUserService()

        setUser(userData)
    }

    const logOut = () => {
        localStorage.clear();
        navigate("/")
    }

    return(
        <UserContext.Provider value={{createUser, getUser, user, logOut}}>
            {children}
        </UserContext.Provider>
    )

}
