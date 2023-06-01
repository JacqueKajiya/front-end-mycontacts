import { z } from "zod"

export const schema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().min(8, "O número deve ter pelo menos 8 dígitos").optional()
})