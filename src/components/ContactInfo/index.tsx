import { useContext, useState } from 'react'
import { Contact } from "../../pages/Dashboard"
import { Container } from "./styles"
import { ContactsContext } from '../../contexts/ContactsContext'
import { ModalEditContact } from '../ModalEditContact'

interface ContactProps{
    contact: Contact
}

export const ContactInfo = ({contact}: ContactProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toggleModal = () => setOpenModal(!openModal)

    const { deleteContact } = useContext(ContactsContext)

    return(
        <Container>
            <div>
                <p>Nome: <strong>{contact.name}</strong></p>
                <p>Email: <strong>{contact.email}</strong></p>
                <p>Telefone: <strong>{contact.phone}</strong></p>
            </div>
            <button type='button' onClick={toggleModal}> Editar contato </button>
            { openModal && <ModalEditContact toggleModal={toggleModal} contact={contact} id={contact.id} />}
            <button type='button' onClick={() => deleteContact(contact.id)}>
                Deletar contato
            </button>
        </Container>
    )
}