import { z } from "zod"

export const createProjectSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, { message: "É preciso inserir o nome do projeto" }),
    number: z.string().min(1, { message: "É preciso inserir o número do projeto" }),
    description: z.string().optional(),
    client: z.string().min(1, { message: "É preciso selecionar um cliente" }),
    motor: z.string().min(1, { message: "É preciso selecionar o motor" }),
    motorFamily: z.string().min(1, { message: "É preciso selecionar a família motor" }),
    injection: z.string().min(1, { message: "É preciso selecionar o tipo de injeção" }),
    aspiration: z.string().min(1, { message: "É preciso selecionar o tipo de aspiração" }),
    fuel: z.string().min(1, { message: "É preciso selecionar o tipo da injeção" }),
    gearBox: z.string().min(1, { message: "É preciso selecionar o câmbio" }),
    powertrain: z.string().min(1, { message: "É preciso selecionar o powertrain" }),
    market: z.string().min(1, { message: "É preciso selecionar o mercado" }),
    legislation: z.string().min(1, { message: "É preciso selecionar a legislação" }),
    cicle: z.string().min(1, { message: "É preciso selecionar o ciclo" }),
    diagnose: z.string().min(1, { message: "É preciso selecionar a diagnose" }),
})

export type FormDataCreateProject = z.infer<typeof createProjectSchema>