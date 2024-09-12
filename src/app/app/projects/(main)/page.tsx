import { ProjectsDataTable } from './_components/projects-data-table';
import { getProjects } from './actions';

export default async function Page() {
  const projects = await getProjects()
  return <ProjectsDataTable data={projects} />
}
