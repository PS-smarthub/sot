import React from 'react'
import { VehicleDataTable } from './_components/vehicle-data-table'
import { getVehicles } from './actions'

export default async function Page() {
    const vehicles = await getVehicles()
    return (
        <VehicleDataTable data={vehicles} />

    )
}
