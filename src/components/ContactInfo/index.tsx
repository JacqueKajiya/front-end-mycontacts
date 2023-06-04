import { useContext, useEffect, useState } from 'react'
import { ContactsContext } from '../../contexts/ContactsContext'
import { ModalEditContact } from '../ModalEditContact'

export const ContactInfo = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toggleModal = () => setOpenModal(!openModal)

    const { getContact, deleteContact, contacts, setContacts } = useContext(ContactsContext)


    useEffect(()=>{
        const token = localStorage.getItem("my-contacts:token")

        if(token){
            getContact()
        }
    },[setContacts, contacts])

    return(
        <>
        {contacts.length > 0 && (
            <ul>
                {contacts.map((contact) => {
                    return(
                        <li key={contact.id}>
                        <div>
                            <p>Nome: <strong>{contact.name}</strong></p>
                            <p>Email: <strong>{contact.email}</strong></p>
                            <p>Telefone: <strong>{contact.phone}</strong></p>
                        </div>

                        <button type='button' onClick={toggleModal}> Imagem de Editar </button>
                        { openModal && <ModalEditContact toggleModal={toggleModal} contact={contact} id={contact.id} />}
                        
                        <button type='button' onClick={() => deleteContact(contact.id)}>
                        Imagem de Deletar
                        </button>
                        </li>
                    )
                })}
            </ul>
            )}
        </>
    )
}