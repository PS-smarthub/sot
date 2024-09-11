import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from '@/components/dashboard/page'

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Projetos</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        Projetos
      </DashboardPageMain>
    </DashboardPage>
  )
}
