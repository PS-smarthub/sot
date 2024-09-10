"use client"

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'

export function SignInForm() {
    const form = useForm()

    const handleSubmit = form.handleSubmit(async () => {
        await signIn("microsoft-entra-id", { redirectTo: "/app" })
    })
    return (
        <div className="flex min-h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold tracking-tight">
                            Faça login na sua conta
                        </h2>
                    </div>
                    <Button className="w-full" type='submit' variant="outline">
                        Entrar
                    </Button>
                </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Login background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}
