import { DashboardPage, DashboardPageHeader, DashboardPageHeaderNav, DashboardPageHeaderTitle, DashboardPageMain } from '@/components/dashboard/page'
import { Button } from '@/components/ui/button'
import { PropsWithChildren } from 'react'
import { PlusIcon } from "@radix-ui/react-icons"

export default function Layout({ children }: PropsWithChildren) {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Veículos</DashboardPageHeaderTitle>
                <DashboardPageHeaderNav>
                    <Button className='gap-2'>
                        <PlusIcon />
                        Cadastrar
                    </Button>
                </DashboardPageHeaderNav>
            </DashboardPageHeader>
            <DashboardPageMain>
                {children}
            </DashboardPageMain>
        </DashboardPage>
    )
}
