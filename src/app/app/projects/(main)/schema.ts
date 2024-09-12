import { z } from "zod"

export const createProjectSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "É preciso inserir o nome do projeto" }),
    number: z.string().min(1, { message: "É preciso inserir o número do projeto" }),
    description: z.string().optional(),
    client: z.string().min(1),
    motor: z.string().min(1),
    motorFamily: z.string().min(1),
    injection: z.string().min(1),
    aspiration: z.string().min(1),
    fuel: z.string().min(1),
    gearBox: z.string().min(1),
    powertrain: z.string().min(1),
    market: z.string().min(1),
    legislation: z.string().min(1),
    cicle: z.string().min(1),
    diagnose: z.string().min(1),
})

export type FormDataCreateProject = z.infer<typeof createProjectSchema>