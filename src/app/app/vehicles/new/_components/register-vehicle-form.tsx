"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createVehicleSchema, FormDataRegisterVehicle } from "../schema"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createNewVehicle } from "../actions"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function RegisterVehicleForm() {
    const router = useRouter()
    const form = useForm<FormDataRegisterVehicle>({
        resolver: zodResolver(createVehicleSchema),
    })
    const onSubmit = form.handleSubmit(async (data) => {
        await createNewVehicle(data)
        form.reset()
        toast({
            description: "Veículo cadastrado com sucesso.",
        })
        router.replace("/app/vehicles", { scroll: true })
    })
    return (

        <Card className="w-full max-w-5xl ">
            <CardHeader>
                <CardTitle className="text-2xl">Cadastrar veículo</CardTitle>
                <CardDescription>Insira as informações corretamente para efetuar o cadastro de um novo veículo.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="automaker"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Montadora</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="project"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Projeto</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="responsible"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Responsável</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Modelo</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cor</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="chassis"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Chassi</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="fleet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Frota (Opcional)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imagem URL (Opcional)</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="comments"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Comentários (Opcional)</FormLabel>
                                        <FormControl>
                                            <Textarea className="h-24" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <FormField
                                control={form.control}
                                name="nf_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número da NF</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nf_emission_date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de emissão da NF</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="loan_expiration_date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data de vencimento</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={form.control}
                                name="nf_archive_location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Arquivo da NF</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="file" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <CardFooter className="justify-end">
                            <Button disabled={form.formState.isSubmitting} type="submit">
                                {form.formState.isSubmitting && "Salvando..."}
                                {!form.formState.isSubmitting && "Salvar"}
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </CardContent>
        </Card >
    )
}
