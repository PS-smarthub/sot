"use server"

import { config } from "@/config"

export const getServiceOrders = async () => {
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/service-orders`)

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }

        const serviceOrders = await response.json()

        return serviceOrders

    } catch (error) {

    }
}