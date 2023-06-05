import { useContext, useEffect, useState } from 'react'
import { ContactsContext } from '../../contexts/ContactsContext'
import { ModalEditContact } from '../ModalEditContact'
import { StyledList } from './styles'
import { TiUserDeleteOutline, TiEdit } from "react-icons/ti"

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
            <StyledList>
                {contacts.map((contact) => {
                    return(
                        <li key={contact.id}>
                        <div>
                            <p>Nome: <strong>{contact.name}</strong></p>
                            <p>Email: <strong>{contact.email}</strong></p>
                            <p>Telefone: <strong>{contact.phone}</strong></p>
                        </div>
                        <div className='buttonBox'>
                            <button type='button' onClick={toggleModal}> <TiEdit /> </button>
                            { openModal && <ModalEditContact toggleModal={toggleModal} contact={contact} id={contact.id} />}
                            
                            <button type='button' onClick={() => deleteContact(contact.id)}>
                            <TiUserDeleteOutline/>
                        </button>
                        </div>
                        
                        </li>
                    )
                })}
            </StyledList>
            )}
        </>
    )
}