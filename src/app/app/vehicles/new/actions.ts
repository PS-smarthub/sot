"use server"

import { config } from "@/config"
import { FormDataRegisterVehicle } from "./schema"

export const createNewVehicle = async (data: FormDataRegisterVehicle) => {
    try {
        const response = await fetch(`${config.api.url}/vehicles`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error(`Error ${response.statusText}`)
        }

        const vehicle = await response.json()
        return vehicle
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
        throw error
    }
}