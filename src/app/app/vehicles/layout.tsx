import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from '@/components/dashboard/page'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Veículos</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                {children}
            </DashboardPageMain>
        </DashboardPage>

    )
}
