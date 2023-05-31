import { ReactNode, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserAuth{

}

interface IUserProps{
    children: ReactNode
}

export const UserContext = createContext<IUserAuth>({} as IUserAuth)

export const UserData = () => {
    return useContext(UserContext)
}

const UserProvider({children}: IUserProps){
    const [user, setUser] = useState<IResponseUser>({} as IResponseUser)
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const token = localStorage.getItem("my-contacts:token")

    const loginUser = async(userLogin: IUserLogin) => {
        try{
            await 
        }
    }

    useEffect(() => {

    })


}
