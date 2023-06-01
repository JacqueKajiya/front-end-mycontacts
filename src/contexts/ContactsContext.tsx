import { ReactNode, createContext, useState } from "react";
import { IContactData } from "../interfaces/interfaces";
import { createContactService, deleteContactService, getContactService, updateContactService } from "../services/api.services";

interface IContactsContext {
    createContact: (data: IContactData) => void;
    getContact: () => void;
    updateContact: (data: IContactData, id: string) => void;
    deleteContact: (id: string) => void;
    contacts: IContactData[]
}

interface IContactsProps{
    children: ReactNode
}

export const ContactsContext = createContext<IContactsContext>(
    {} as IContactsContext
);

export const ContactsProvider = ({children}: IContactsProps) =>{
    const [contacts, setContacts] = useState<IContactData[]>([])

    const createContact = async (data: IContactData) =>{
        try{
            await createContactService(data)

            await getContactService()
        } catch (error) {console.error(error)}
    }

    const getContact = async() => {
        try{
            const getAllContacts = await getContactService()

            setContacts(getAllContacts)
        } catch (error) {console.error(error)}
    }

    const updateContact = async (data: IContactData, id: string) => {
        try{
            await updateContactService(data, id)

            await getContactService()
        }catch(error) {console.error(error)}
    }

    const deleteContact = async (id: string) => {
        await deleteContactService(id)
    }

    return(
        <ContactsContext.Provider value={{createContact, getContact, updateContact, deleteContact, contacts}}>
            {children}
        </ContactsContext.Provider>
    )
}
