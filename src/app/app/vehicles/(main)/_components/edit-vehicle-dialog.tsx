"use client"

import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { useRef } from "react";

type EditVehicleDialogProps = {
    children?: React.ReactNode,
    vehicle: {
        automaker: string

    }
}

export function EditVehicleDialog({ children, vehicle }: EditVehicleDialogProps) {

    const ref = useRef<HTMLDivElement>(null)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div ref={ref}>{children}</div>
            </DialogTrigger>
            <DialogContent>
                <h1>{vehicle.automaker}</h1>
            </DialogContent>
        </Dialog>
    )
}
