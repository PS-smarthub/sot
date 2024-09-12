"use server"

import { config } from "@/config"
import { FormDataCreateProject } from "./schema"

export const createNewProject = async (data: FormDataCreateProject) => {
    const apiUrl = config.api.url
    try {
        const response = await fetch(`${apiUrl}/projects`, {
            method: "POST",
            body: JSON.stringify(data),
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

export const getProjects = async () => {

    try {
        const response = await fetch(`${config.api.url}/projects`, {
            cache: "no-cache"
        })

        if (!response.ok) {
            throw new Error(`Error ${response.statusText}`)
        }

        const projects = await response.json()

        return projects
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message)
        }
        throw error
    }
}