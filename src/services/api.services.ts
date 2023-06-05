import { toast } from "react-toastify";
import { IContactData, IContactUpdate, IUserData } from "../interfaces/interfaces";
import { api } from "./api"


export const createUserService = async (userData: IUserData) => {
    return await api.post("/users", userData).then(() =>{
        toast.success("Usuário cadastrado",{
            autoClose:1200,
        })
    })
    .catch((error) => {console.error(error)
        toast.error("Ops, algo deu errado",{
            autoClose:1200,
        })
    })
}

export const getUserService = async () =>{
    const token = localStorage.getItem("my-contacts:token")

    if(token){
        api.defaults.headers = {
            Authorization: `Bearer ${token}`,
        } as any
    }

    return await api.get("/users").then((res) => res.data)
    .catch((error) => console.error(error))
}

export const createContactService = async (contactData: IContactData) =>{
    return await api.post("/contacts", contactData).then(() =>{
            toast.success("Contato adicionado!", {
                autoClose:1000,
            })
        })
        .catch((error) =>{ 
            console.error(error)

            toast.error("Houve algo errado", {
            autoClose:1000,
        })
    })
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
    await api.patch(`/contacts/${id}`, contactData).then(() =>{
        toast.success("Contato atualizado!", {
            autoClose: 1000,
        })
    })
    .catch((error) => {
        console.error(error),
        toast.error("Algo deu errado...", {
            autoClose:1000,
        })
    })
}

export const deleteContactService = async (id: string) => {
    return await api.delete(`/contacts/${id}`).then(() =>{
        toast.success("Contato deletado", {
            autoClose:1000,
        })
    })
    .catch((error) => {console.error(error),
        toast.error("Algo deu errado...",{
            autoClose:1000,
        })    
    })
}