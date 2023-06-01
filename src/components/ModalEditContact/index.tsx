import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IContactData } from "../../interfaces/interfaces";
import { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { Modal } from "../Modal";
import { Contact } from "../../pages/Dashboard";
import { schema } from "./validation";

interface IModalEditContactProps{
    toggleModal: () => void;
    contact: Contact;
    id: string;
}

export const ModalEditContact = ({toggleModal, contact, id}: IModalEditContactProps) => {
    const { register, handleSubmit } = useForm<IContactData>({
        resolver: zodResolver(schema)
    })

    const { updateContact } = useContext(ContactsContext)

    const editContact = (data: IContactData) => {
        try{
            updateContact(data, id)

            toggleModal()
        }catch(error) {console.error(error)}
    }

    return(
        <Modal toggleModal={toggleModal}>
            <form onSubmit={handleSubmit(editContact)}>
    
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" defaultValue={contact.name} {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" defaultValue={contact.email} {...register("email")} />

                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" defaultValue={contact.phone} {...register("phone")} />

                <button type="submit">Editar contato</button>
            </form>

        </Modal>
    )
}