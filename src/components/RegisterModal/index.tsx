import { Dispatch, SetStateAction, useRef } from "react";
import { useForm } from "react-hook-form"
import { Contact } from "../../pages/Dashboard";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { CreateContactData, schema } from "./validation";
import { Modal } from "../Modal";

interface ModalAddContactProps{
    toggleModal: () => void;
    setContacts: Dispatch<SetStateAction<Contact[]>>
}

export const ModalAddContact = ({toggleModal, setContacts}: ModalAddContactProps) =>{
    const { register, handleSubmit } = useForm<CreateContactData>({
        resolver: zodResolver(schema)
    })

    const createContact = async (data: CreateContactData) => {
       const response = await api.post<Contact>('/contacts', data)

       setContacts(previousContacts => [response.data, ...previousContacts])

       toggleModal()
    }

    return (
        <Modal toggleModal={toggleModal}>

            <form onSubmit={handleSubmit(createContact)}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" {...register("phone")} />

                <button type="submit">Cadastrar</button>

            </form>
         </Modal>
    )
}