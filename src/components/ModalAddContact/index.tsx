import { useContext } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation";
import { Modal } from "../Modal";
import { ContactsContext } from "../../contexts/ContactsContext";
import { IContactData } from "../../interfaces/interfaces";

interface ModalAddContactProps{
    toggleModal: () => void;
}

export const ModalAddContact = ({toggleModal}: ModalAddContactProps) =>{
    const { register, handleSubmit } = useForm<IContactData>({
        resolver: zodResolver(schema)
    })

    const { createContact } = useContext(ContactsContext)

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