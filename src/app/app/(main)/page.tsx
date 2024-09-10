import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/page";

export default function Page() {


  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Ordens de Serviço</DashboardPageHeaderTitle>
      </DashboardPageHeader>
      <DashboardPageMain>
        <>hello</>
      </DashboardPageMain>
    </DashboardPage>
  );
}