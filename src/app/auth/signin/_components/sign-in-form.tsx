"use client"

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
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
                            Login para funcionários
                        </h2>
                    </div>
                    <Button className="w-full" type='submit' variant="default">
                        Bosch Login
                    </Button>
                </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 relative dark:bg-slate-100">
                {/* <Image
                    src={pathImage}
                    alt="Login background"
                    className='object-cover- w-full h-full'
                /> */}
            </div>
        </div>
    )
}
