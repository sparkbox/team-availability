import Availability from './Availability';
import Role from './Role';

export default function OverviewFilters() {
  return (
    <div className="cmp-overview-filters">
      <Role />
      <Availability />
    </div>
  );
}
