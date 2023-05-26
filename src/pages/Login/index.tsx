import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"

export const Login= () =>{
    const {signIn} = useAuth();
    const {register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    return(
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(signIn)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')} /> 
                
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password')} /> 
                
                <button type="submit">Entrar</button>
                </form>
        </main>
    )
}
