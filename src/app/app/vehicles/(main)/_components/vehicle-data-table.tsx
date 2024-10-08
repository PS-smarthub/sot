"use client"

import * as React from "react"
import {
    CaretSortIcon,
    PlusIcon,
    Pencil2Icon
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { EditVehicleDialog } from "./edit-vehicle-dialog"

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
export const columns: ColumnDef<Vehicle>[] = [
    {
        accessorKey: "automaker",
        header: "Montadora",
        cell: ({ row }) => {
            const { automaker } = row.original

            return <div>{automaker}</div>
        }
    },
    {
        accessorKey: "model",
        header: ({ column }) => {
            return (
                <Button
                    variant="link"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modelo
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div>{row.getValue("model")}</div>,
    },
    {
        accessorKey: "chassis",
        header: () => <div className="text-right">Chassi</div>,
        cell: ({ row }) => {


            return <div className="text-right font-medium">{row.original.chassis}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const vehicle = row.original

            // const handleDeleteVehicle = async (todo: Todo) => {
            //     await deleteTodo({
            //         id: todo.id
            //     })
            //     toast({
            //         title: "Deletion Successful",
            //         description: "The todo item has been successfully deleted."
            //     })
            // }
            return (
                <EditVehicleDialog vehicle={vehicle}>
                    <Button variant="ghost">
                        <Pencil2Icon className="w-4 h-4" />
                    </Button>
                </EditVehicleDialog>
            )
        },
    },
]

type VehicleDataTable = {
    data: Vehicle[]
}

export function VehicleDataTable({ data }: VehicleDataTable) {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filtrar montadora..."
                    value={(table.getColumn("automaker")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("automaker")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <Link href={"/app/vehicles/new"} className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-2 gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90'>
                    <PlusIcon />
                    Cadastrar
                </Link>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Voltar
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Próximo
                    </Button>
                </div>
            </div>
        </div>
    )
}