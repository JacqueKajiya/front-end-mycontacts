import { IContactData, IContactUpdate, IUserData } from "../interfaces/interfaces";
import { api } from "./api"


export const createUserService = async (userData: IUserData) => {
    return await api.post("/users", userData)
    .catch((error) => console.error(error))
}

export const getUserService = async () =>{
    const token = localStorage.getItem("my-contacts:token")

    if(token){
        api.defaults.headers = {
            Authorization: `Bearer ${token}`
        } as any
    }

    return await api.get("/users").then((res) => res.data)
    .catch((error) => console.error(error))
}

export const createContactService = async (contactData: IContactData) =>{
    return await api.post("/contacts", contactData)
    .catch((error) =>{ console.error(error)}
    )
}

export const getContactService = async () => {
    const token = localStorage.getItem("my-contacts:token")

    if(token){
        api.defaults.headers = {
            Authorization: `Bearer ${token}`
        } as any
    }

    return await api.get("/contacts").then((res) => res.data)
    .catch((error) => console.error(error))
}

export const updateContactService = async (contactData: IContactUpdate, id: string) =>{
    await api.patch(`/contacts/${id}`, contactData)
    .catch((error) => console.error(error))
}

export const deleteContactService = async (id: string) => {
    return await api.delete(`/contacts/${id}`)
    .catch((error) => {console.error(error)})
}