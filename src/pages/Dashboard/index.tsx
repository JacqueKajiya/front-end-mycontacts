import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface Contact{
    id: string,
    name: string,
    email: string,
    phone: string
}

export const DashBoard = () =>{
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() =>{
        (async () => {
            const response = await api.get<Contact[]>('contacts')

            setContacts(response.data)
        })()
    }, [])

    return(
        <>
        <header><button>New Contact</button></header>
        <main>
            <ul>
                {
                    contacts.map(contact => <li key={contact.id}>{contact.name}</li>)
                }
            </ul>
        </main>
        </>
    )
}
