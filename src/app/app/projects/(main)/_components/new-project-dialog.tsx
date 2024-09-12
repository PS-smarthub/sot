"use client"

import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { createProjectSchema, FormDataCreateProject } from "../schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { createNewProject } from "../actions";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { CheckIcon } from "@radix-ui/react-icons";

export function NewProjectDialog({ children }: PropsWithChildren) {
    const form = useForm<FormDataCreateProject>({
        resolver: zodResolver(createProjectSchema),
        defaultValues: {
            aspiration: "",
            cicle: "",
            client: "",
            description: "",
            diagnose: "",
            fuel: "",
            gearBox: "",
            injection: "",
            legislation: "",
            market: "",
            motor: "",
            motorFamily: "",
            name: "",
            number: "",
            powertrain: ""
        },
    })
    const ref = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const nextStep = async () => {
        let isValid = false;

        if (step === 1) {
            isValid = await form.trigger(["name", "number", "description", "client", "motor"]);
        } else if (step === 2) {
            isValid = await form.trigger(["motorFamily", "injection", "aspiration", "fuel", "gearBox"]);
        } else if (step === 3) {
            isValid = await form.trigger(["powertrain", "market", "legislation", "cicle", "diagnose"]);
        }

        if (isValid) {
            setStep(step + 1);
        }
    }

    const onSubmit = form.handleSubmit(async (data: FormDataCreateProject) => {
        await createNewProject(data)
        router.refresh()
        setOpen(false)
        toast({
            description: (
                <div className="w-full flex items-center">
                    <CheckIcon className="mr-2 w-4 h-4" />
                    <span className="first-letter:capitalize">Projeto cadastrado com sucesso.</span>
                </div>
            )
        })
    })

    const prevStep = () => setStep(step - 1)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div ref={ref}>{children}</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar um novo projeto</DialogTitle>
                    <DialogDescription>Crie um novo projeto.</DialogDescription>
                    <div className="space-y-2 pt-4">
                        <div className="text-sm text-muted-foreground">Step {step} of 3</div>
                        <div className={`w-full gap-1 flex`}>
                            <div className={`w-1/3 ${step >= 1 ? "bg-white" : "bg-zinc-700"} h-1 rounded-md`}></div>
                            <div className={`w-1/3 ${step >= 2 ? "bg-white" : "bg-zinc-700"}  h-1 rounded-md`}></div>
                            <div className={`w-1/3 ${step >= 3 ? "bg-white" : "bg-zinc-700"}  h-1 rounded-md`}></div>
                        </div>
                    </div>
                </DialogHeader>
                <Form {...form}>
                    <form className="space-y-4" onSubmit={onSubmit}>
                        {step === 1 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Número</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Descritivo (Opcional)</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="client"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Cliente</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="motor"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Motor</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="motorFamily"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Família motor</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="injection"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Injeção</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de injeção" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Direta</SelectItem>
                                                        <SelectItem value="indireta">Indireta</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="aspiration"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Aspiração</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de injeção" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="fuel"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Fuel</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de combustível" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="gasolina">Gasolina</SelectItem>
                                                        <SelectItem value="etanol">Etanol</SelectItem>
                                                        <SelectItem value="diesel">Diesel</SelectItem>
                                                        <SelectItem value="flex">Flex</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="gearBox"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Câmbio</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de câmbio" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="teste">Teste</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="powertrain"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Powertrain</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de injeção" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="market"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mercado</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o mercado" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="legislation"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Legislação</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione a legislação" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="cicle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ciclo</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de injeção" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="diagnose"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Diagnose</FormLabel>
                                            <FormControl>
                                                <Select required onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione o tipo de injeção" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="direta">Simples</SelectItem>
                                                        <SelectItem value="indireta">Outra</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}

                        <div className="flex justify-between">
                            {step > 1 && (
                                <Button type="button" onClick={prevStep} variant="outline">
                                    Anterior
                                </Button>
                            )}
                            {step < 3 ? (
                                <Button type="button" onClick={nextStep} className="ml-auto">
                                    Próximo
                                </Button>
                            ) : (
                                <Button disabled={form.formState.isSubmitting} type="submit">
                                    {form.formState.isSubmitting && "Aguarde..."}
                                    {!form.formState.isSubmitting && "Cadastrar"}
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
