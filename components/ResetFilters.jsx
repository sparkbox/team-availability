import { availabilityOptions, useFilterContext } from '../context/FilterContext';

export default function ResetFilters() {
  const { setAvailability, setProject, setRoles } = useFilterContext();

  const handleClick = () => {
    setAvailability(availabilityOptions.AVAILABLE);
    setProject('all');
    setRoles([]);
  };

  return (
    <div className="cmp-reset-filters">
      <button
        type="button"
        className="cmp-reset-filters__button"
        onClick={handleClick}
      >
        Reset Filters
      </button>
    </div>
  );
}
