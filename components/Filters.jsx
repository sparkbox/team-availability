import Availability from './Availability';
import Role from './Role';
import ProjectSelect from './ProjectSelect';
import ResetFilters from './ResetFilters';

export default function Filters({ uniqueRoles, currentProjects }) {
  return (
    <section aria-label="content filters" className="cmp-filters">
      <ProjectSelect currentProjects={currentProjects} />
      <Role uniqueRoles={uniqueRoles} />
      <Availability />
      <ResetFilters />
    </section>
  );
}
