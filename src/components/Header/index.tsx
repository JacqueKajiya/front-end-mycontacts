import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { IUserDataResponse } from "../../interfaces/interfaces"
import { api } from "../../services/api"
import { ModalAddContact } from "../ModalAddContact"

import { IoIosAdd } from "react-icons/io"
import { MdExitToApp, MdPersonAddAlt1 } from "react-icons/md"
import { HeaderStyled } from "./styles"

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
        <HeaderStyled>
            <div>
                <h2>Olá, {userData.name}!</h2>
            </div>
                <button className="newContact" type="button" onClick={toggleModal}>
                    <span className="addContactText">
                    Novo Contato <IoIosAdd/>
                    </span>
                    
                    <span className="addContactImg"> <MdPersonAddAlt1 /> </span>
                </button>
                
            <button type="button" onClick={logOut} className="exitButton"><MdExitToApp/></button>
            { isOpenModal && <ModalAddContact toggleModal={toggleModal} />}
        </HeaderStyled>
    )
}