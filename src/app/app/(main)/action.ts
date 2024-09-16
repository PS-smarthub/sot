"use server"

import { config } from "@/config"
import { CreateNewWorkshopServiceOrder } from "./schema"
import { auth } from "@/auth"

export const getWorkshopServiceOrders = async () => {
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/service-orders/workshop`,{
                cache: "no-cache"
            })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const serviceOrders = await response.json()

        return serviceOrders

    } catch (error) {

    }
}
export const getWorkshopServiceOrdersByStatus = async (status: string) => {
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/service-orders/workshop?status=${status}`)

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const serviceOrders = await response.json()

        return serviceOrders

    } catch (error) {

    }
}
export const getWorkshopServiceOrdersByOwner = async (owner: string) => {
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/service-orders/workshop?requestedBy=${owner}`)

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const serviceOrders = await response.json()

        return serviceOrders

    } catch (error) {

    }
}

export const createNewWorkshopServiceOrder = async (data: CreateNewWorkshopServiceOrder) => {
    const session = await auth()
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/service-orders/workshop`, {
            method: "POST",
            body: JSON.stringify({
                automaker: data.automaker,
                project: data.project,
                isIntern: data.isIntern,
                model: data.model,
                chassis: data.chassis,
                fleet: data.fleet,
                vehicleLocation: data.vehicleLocation,
                keyLocation: data.keyLocation,
                serviceInformations: data.serviceInformations,
                deliveryDate: data.deliveryDate,
                requestedBy: session?.user.name
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Error ${response.statusText}`)
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
        throw error
    }
}