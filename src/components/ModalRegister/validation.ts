import { z } from "zod"

export const schema = z.object({
    name: z.string(),
    password: z.string(),
    email: z.string().email(),
    phone: z.string().min(8, "O número deve ter pelo menos 8 dígitos")
})