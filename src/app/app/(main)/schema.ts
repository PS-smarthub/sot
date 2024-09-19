import { z } from "zod"

export const workshopServiceOrderSchema = z.object({
    id: z.string().optional(),
    automaker: z.string(),
    project: z.string(),
    model: z.string(),
    chassis: z.string(),
    fleet: z.string(),
    vehicleLocation: z.string(),
    keyLocation: z.string(),
    deliveryDate: z.string().refine((date) => {
        return !isNaN(Date.parse(date));
    }),
    status: z.string(),
    requestedBy: z.string(),
})

export type WorkshopServiceOrder = z.infer<typeof workshopServiceOrderSchema>

export const createNewWorkshopServiceOrderSchema = z.object({
    automaker: z.string().min(1, 'É preciso inserir a montadora'),
    project: z.string().min(1, 'É preciso selecionar o projeto'),
    isIntern: z.boolean(),
    model: z.string().min(1, 'É preciso selecionar o modelo'),
    chassis: z.string().min(1, 'É preciso selecionar o chassi'),
    fleet: z.string().min(1, 'É preciso selecionar a frota'),
    vehicleLocation: z.string().min(1, 'É preciso inserir a localização veículo'),
    keyLocation: z.string().min(1, 'É preciso inserir a localização da chave'),
    serviceInformations: z.string().nullable(),
    deliveryDate: z.string({ required_error: "É preciso inserir a data de entrega" }).date(),
    requestedBy: z.string()
});

export type CreateNewWorkshopServiceOrder = z.infer<typeof createNewWorkshopServiceOrderSchema>