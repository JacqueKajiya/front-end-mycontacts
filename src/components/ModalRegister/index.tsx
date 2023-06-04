import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Modal } from "../Modal";
import { schema } from "./validation";
import { IUserData } from "../../interfaces/interfaces";
import { UserContext } from "../../contexts/UserContext";
import { StyledForm } from "../../styles/form";


interface IModalRegisterProps{
    toggleModal: () => void;
}

export const ModalRegister = ({toggleModal}: IModalRegisterProps) => {
    const { register, handleSubmit } = useForm<IUserData>({
        resolver: zodResolver(schema)
    })

    const { createUser } = useContext(UserContext)

    return(
        <Modal toggleModal={toggleModal}>
            <StyledForm onSubmit={handleSubmit(createUser)}>
                
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" {...register("name")} />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" {...register("phone")} />

                <button type="submit">Registrar</button>
            </StyledForm>

        </Modal>
    )
}