"use client"

import { Session } from "next-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type ProfileFormProps = {
    defaultValues: Session["user"] | undefined
}

export function ProfileCard({ defaultValues }: ProfileFormProps) {
    return (
        <div className="space-y-8 flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Nome</CardTitle>
                    <CardDescription>Nome do colaborador</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input readOnly value={defaultValues?.name as string} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Email do colaborador</CardDescription>
                </CardHeader>
                <CardContent>
                    <Input readOnly value={defaultValues?.email as string} />
                </CardContent>
            </Card>
        </div>

    )
}