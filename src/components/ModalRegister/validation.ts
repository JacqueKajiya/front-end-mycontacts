import { z } from "zod"

export const schema = z.object({
    name: z.string(),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres").max(20, "A senha não pode ter mais de 20 caracteres"),
    email: z.string().email(),
    phone: z.string().min(8, "O número deve ter pelo menos 8 dígitos")
})