import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { ContactList, Container } from "./styles"
import { ContactInfo } from "../../components/ContactInfo"
import { ModalAddContact } from "../../components/RegisterModal"

export interface Contact{
    id: string,
    name: string,
    email: string,
    phone: string
}

export const DashBoard = () =>{
    const [contacts, setContacts] = useState<Contact[]>([])
    const [isOpenModal, setIsOpenModal] = useState(false)

    const toggleModal = () => setIsOpenModal(!isOpenModal)

    useEffect(() =>{
        (async () => {
            const response = await api.get<Contact[]>('contacts')

            setContacts(response.data)
        })()
    }, [])

    return(
        <Container>
        <header><button type="button" onClick={toggleModal}>New Contact</button></header>
        { isOpenModal && <ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />}
        <main>
            <ContactList>
                {
                    contacts.map(contact => <ContactInfo key={contact.id} contact={contact} setContacts={setContacts} />)
                }
            </ContactList>
        </main>
        </Container>
    )
}
