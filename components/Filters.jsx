import Availability from './Availability';
import Role from './Role';
import SelectControl from './SelectControl';

export default function Filters({ uniqueRoles, currentProjects }) {
  return (
    <div className="cmp-filters">
      <SelectControl currentProjects={currentProjects} />
      <Role uniqueRoles={uniqueRoles} />
      <Availability />
    </div>
  );
}
