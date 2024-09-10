"use server"

import { auth } from "@/auth"
import { config } from "@/config"

export async function getVehicles() {
    const session = await auth()

    const response = await fetch(`${config.api.url}/vehicles`, {
        headers: {
            Authorization: `Bearer ${session?.user.token}`
        }
    })

    const vehicles: [] = await response.json()

    return vehicles
}