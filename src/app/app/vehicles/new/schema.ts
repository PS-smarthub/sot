import { z } from "zod"

export const createVehicleSchema = z.object({
    id: z.string().optional(),
    automaker: z.string({ message: "Campo obrigatório" }),
    project: z.string({ message: "Campo obrigatório" }),
    responsible: z.string({ message: "Campo obrigatório" }),
    model: z.string({ message: "Campo obrigatório" }),
    color: z.string({ message: "Campo obrigatório" }),
    chassis: z.string({ message: "Campo obrigatório" }),
    fleet: z.string().optional(),
    comments: z.string().optional(),
    image: z.string().optional(),
    nf_number: z.string({ message: "Campo obrigatório" }),
    nf_emission_date: z.string({ message: "Campo obrigatório" }).date(),
    loan_expiration_date: z.string({ message: "Campo obrigatório" }).date(),
    nf_archive_location: z.string({ message: "Campo obrigatório" })
})

export type FormDataRegisterVehicle = z.infer<typeof createVehicleSchema>