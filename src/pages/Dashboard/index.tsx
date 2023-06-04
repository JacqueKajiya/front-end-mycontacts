import { useContext, useEffect } from "react"
import { Container } from "./styles"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { ContactInfo } from "../../components/ContactInfo"
import { Header } from "../../components/Header"
import { ContactsContext } from "../../contexts/ContactsContext"

export interface Contact{
    id: string,
    name: string,
    email: string,
    phone: string
}

export const DashBoard = () =>{
    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("my-contacts:token")

        if(!token){
            navigate("/")
        } 
    }, [])

    return(
        <Container>
            <Header />
        <main>
            <ContactInfo />
        </main>
        </Container>
    )
}
