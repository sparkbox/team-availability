import Availability from './Availability';
import Role from './Role';
import SelectControl from './SelectControl';
import ResetFilters from './ResetFilters';

export default function Filters({ uniqueRoles, currentProjects }) {
  return (
    <section aria-label="content filters" className="cmp-filters">
      <SelectControl currentProjects={currentProjects} />
      <Role uniqueRoles={uniqueRoles} />
      <Availability />
      <ResetFilters />
    </section>
  );
}
