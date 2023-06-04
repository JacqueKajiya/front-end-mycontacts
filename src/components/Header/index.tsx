import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { IUserDataResponse } from "../../interfaces/interfaces"
import { api } from "../../services/api"
import { ModalAddContact } from "../ModalAddContact"

export const Header = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { id } = useParams()

    const { userData, setUserData, logOut } = useContext(UserContext)
    const toggleModal = () => setIsOpenModal(!isOpenModal)

    useEffect(() => {
        const getLoggedUser = async () => {
            const { data } = await api.get("/users")
            const filteredUser = data.filter(
                (user: IUserDataResponse) => user.id === id
            )[0];
            setUserData(filteredUser)
        }
        getLoggedUser()
    }, [])

    return(
        <header>
            <div>
                <h2>Olá, {userData.name}!</h2>
            </div>
            <button type="button" onClick={toggleModal}>New Contact</button>
            <button type="button" onClick={logOut}>Sair</button>
            { isOpenModal && <ModalAddContact toggleModal={toggleModal} />}
        </header>
    )
}