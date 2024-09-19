"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PropsWithChildren, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateNewWorkshopServiceOrder, createNewWorkshopServiceOrderSchema } from '../schema'
import { createNewWorkshopServiceOrder } from '../action'
import { toast } from '@/hooks/use-toast'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { CheckIcon } from '@radix-ui/react-icons'

export default function CreateServiceOrderWorkshopDialog({ children }: PropsWithChildren) {
    const ref = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)
    const form = useForm<CreateNewWorkshopServiceOrder>({
        resolver: zodResolver(createNewWorkshopServiceOrderSchema),
        defaultValues: {
            automaker: '',
            project: '',
            isIntern: true,
            model: '',
            chassis: '',
            fleet: '',
            vehicleLocation: '',
            keyLocation: '',
            serviceInformations: null,
            deliveryDate: '',
            requestedBy: ''
        },
    })
    const router = useRouter()
    async function onSubmit(values: CreateNewWorkshopServiceOrder) {
        await createNewWorkshopServiceOrder(values)
        setOpen(false)
        router.refresh()
        toast({
            description: (
                <div className="w-full flex items-center">
                    <CheckIcon className="mr-2 w-4 h-4" />
                    <span className="first-letter:capitalize">Ordem de serviço da oficina criada com sucesso.</span>
                </div>
            )
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div ref={ref}>{children}</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
                <DialogHeader>
                    <DialogTitle>Criar ordem de serviço da oficina</DialogTitle>
                    <DialogDescription>
                        Insira os detalhes da ordem de serviço abaixo.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="automaker"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Montadora</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Automaker" {...field} />
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
                                            <Input placeholder="Project" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Modelo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Model" {...field} />
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
                                            <Input placeholder="Chassis" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fleet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Frota</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Fleet" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="vehicleLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Localização do veículo</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Vehicle Location" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="keyLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Localização da chave</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Key Location" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="deliveryDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Data de entrega</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="isIntern"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Interno
                                        </FormLabel>
                                        <FormDescription>
                                            Marque se o projeto for interno
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="serviceInformations"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Informações do serviço</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Service Informations"
                                            {...field}
                                            value={field.value || ''}
                                            onChange={(e) => field.onChange(e.target.value || null)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Criar</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
