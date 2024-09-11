"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type Vehicle = {
    id: number;
    automaker: string;
    project: string;
    responsible: string;
    model: string;
    color: string;
    chassis: string;
    fleet: string | null;
    comments: string | null;
    image: string | null;
    nf_number: string;
    nf_emission_date: string;
    loan_expiration_date: string;
};
export function RegisterVehicleForm() {
    const [vehicle, setVehicle] = useState<Omit<Vehicle, 'id'>>({
        automaker: '',
        project: '',
        responsible: '',
        model: '',
        color: '',
        chassis: '',
        fleet: null,
        comments: null,
        image: null,
        nf_number: '',
        nf_emission_date: '',
        loan_expiration_date: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setVehicle(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitting vehicle:', vehicle);
    };
    return (
        <Card className="w-full max-w-5xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl">Cadastrar novo veículo</CardTitle>
                <CardDescription>Insira as informações corretamente para efetuar o cadastro de um novo veículo.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="automaker">Montadora</Label>
                            <Input id="automaker" name="automaker" value={vehicle.automaker} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="project">Projeto</Label>
                            <Input id="project" name="project" value={vehicle.project} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="responsible">Responsável</Label>
                            <Input id="responsible" name="responsible" value={vehicle.responsible} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="model">Modelo</Label>
                            <Input id="model" name="model" value={vehicle.model} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="color">Cor</Label>
                            <Input id="color" name="color" value={vehicle.color} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="chassis">Chassi</Label>
                            <Input id="chassis" name="chassis" value={vehicle.chassis} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="fleet">Frota (opcional)</Label>
                            <Input id="fleet" name="fleet" value={vehicle.fleet || ''} onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="image">Imagem URL (opcional)</Label>
                            <Input id="image" name="image" type="url" value={vehicle.image || ''} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="comments">Comentários (opcional)</Label>
                        <Textarea id="comments" name="comments" value={vehicle.comments || ''} onChange={handleChange} className="h-24" />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="nf_number">Número da NF</Label>
                            <Input id="nf_number" name="nf_number" value={vehicle.nf_number} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nf_emission_date">Data de emissão da NF</Label>
                            <Input id="nf_emission_date" name="nf_emission_date" type="date" value={vehicle.nf_emission_date} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="loan_expiration_date">Data de expiração</Label>
                            <Input id="loan_expiration_date" name="loan_expiration_date" type="date" value={vehicle.loan_expiration_date} onChange={handleChange} required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="justify-end">
                <Button type="submit" className="">Cadastrar</Button>
            </CardFooter>
        </Card>
    )
}
