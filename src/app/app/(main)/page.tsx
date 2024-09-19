import { ClockIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { WorkshopServiceOrderDataTable } from "./_components/os-data-table";
import { getWorkshopServiceOrders, getWorkshopServiceOrdersByOwner, getWorkshopServiceOrdersByStatus } from "./action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth()
  const [allOrders, pendingOrders, finishedOrders, ordersByOwner] = await Promise.all([
    getWorkshopServiceOrders(), 
    getWorkshopServiceOrdersByStatus("pendente"), 
    getWorkshopServiceOrdersByStatus("iniciado"), 
    getWorkshopServiceOrdersByOwner(session?.user.name as string)
  ])

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Todas as ordens</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allOrders?.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Minhas ordens</CardTitle>
            <PersonIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ordersByOwner?.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ordens pendentes</CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingOrders?.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ordens iniciadas</CardTitle>
            <GearIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{finishedOrders?.length}</div>
          </CardContent>
        </Card>
      </div>
      <WorkshopServiceOrderDataTable data={allOrders} />
    </>

  );
}