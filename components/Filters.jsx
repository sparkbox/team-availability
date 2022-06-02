import Availability from './Availability';
import Role from './Role';

export default function Filters({ uniqueRoles }) {
  return (
    <div className="cmp-filters">
      <Role uniqueRoles={uniqueRoles} />
      <Availability />
    </div>
  );
}
