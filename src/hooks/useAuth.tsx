import { useContext } from "react"
import { AuthContext } from "../providers/authProvider"

export const useAuth = () =>{
    const authContext = useContext(AuthContext)

    return authContext
}