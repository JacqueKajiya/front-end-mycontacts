import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import { ModalRegister } from "../../components/ModalRegister"
import { UserContext } from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { LoginFormStyled, MainContainer } from "./styles"

export const Login= () =>{
    const [openModal, setOpenModal] = useState<boolean>(false)

    const toggleModal = () => setOpenModal(!openModal)
    const navigate = useNavigate()

    const {signIn} = useContext(UserContext);

    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    useEffect(() => {
        const token = localStorage.getItem("my-contacts:token")

        if(token){
            navigate("/dashboard")
        }
    },[])

    return(
        <MainContainer>
            <div className="formContainer">
                <LoginFormStyled onSubmit={handleSubmit(signIn)}>

                <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email')} /> 
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register('password')} /> 
                    
                    <button type="submit">Entrar</button>
                    </LoginFormStyled>

                    <button type="button" onClick={toggleModal}>Registre-se aqui</button>
                    {
                        openModal && <ModalRegister toggleModal={toggleModal} />
                    }
            </div>

        </MainContainer>
    )
}
