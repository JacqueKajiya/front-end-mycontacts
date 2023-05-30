import { Dispatch, SetStateAction } from 'react'
import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"
import { api } from '../../services/api'

interface ContactProps{
    contact: Contact
    setContacts: Dispatch<SetStateAction<Contact[]>>
}

interface ContactUpdate{
    email: string,
    name: string,
    phone: string
}

export const ContactInfo = ({contact, setContacts}: ContactProps) => {
    const updateContact = async (contactData: ContactUpdate, id: string) =>{
        const response = await api.patch(`/contacts/${id}`, contactData)
    }

    return(
        <Container>
            {contact.name}
        </Container>
    )
}