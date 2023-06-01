import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { ContactList, Container } from "./styles"
import { ContactInfo } from "../../components/ContactInfo"
import { ModalAddContact } from "../../components/ModalAddContact"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { ContactsContext } from "../../contexts/ContactsContext"

export interface Contact{
    id: string,
    name: string,
    email: string,
    phone: string
}

export const DashBoard = () =>{
    const [isOpenModal, setIsOpenModal] = useState(false)

    const navigate = useNavigate()

    const { getUser } = useContext(UserContext)
    const { contacts } = useContext(ContactsContext)

    const toggleModal = () => setIsOpenModal(!isOpenModal)

    useEffect(() =>{
        const token = localStorage.getItem("my-contacts:token")

        if(!token){
            navigate("/")
        } else{
            setTimeout(getUser, 1500)
        }
    }, [])

    return(
        <Container>
        <header><button type="button" onClick={toggleModal}>New Contact</button></header>
        { isOpenModal && <ModalAddContact toggleModal={toggleModal} />}
        <main>
            <ContactList>
                {
                    contacts.map(contact => <ContactInfo key={contact.id} contact={contact} />)
                }
            </ContactList>
        </main>
        </Container>
    )
}
