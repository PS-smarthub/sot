import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { WorkshopServiceOrderDataTable } from './workshop-data-table'
import { getWorkshopServiceOrders } from '../action'
import { WashingServiceOrderDataTable } from './washing-data-table'
import { InstrumentationServiceOrderDataTable } from './instrumentation-data-table'

export default async function TabsServiceOrder() {
    const workshopServiceOrders = await getWorkshopServiceOrders()
    return (
        <Tabs defaultValue="workshop">
            <TabsList className="bg-[#1b1b1b] text-[#999999]">
                <TabsTrigger value="workshop" className="data-[state=active]:bg-black/30 data-[state=active]:text-white">Oficina</TabsTrigger>
                <TabsTrigger value="washing" className="data-[state=active]:bg-black/30 data-[state=active]:text-white">Lavagem</TabsTrigger>
                <TabsTrigger value="instrumentation" className="data-[state=active]:bg-black/30 data-[state=active]:text-white">Instrumentação</TabsTrigger>
            </TabsList>
            <TabsContent value="instrumentation">
                <InstrumentationServiceOrderDataTable data={[]}/>
            </TabsContent>
            <TabsContent value="washing">
                <WashingServiceOrderDataTable data={[]} />
            </TabsContent>
            <TabsContent value="workshop">
                <WorkshopServiceOrderDataTable data={workshopServiceOrders} />
            </TabsContent>
        </Tabs >
    )
}
