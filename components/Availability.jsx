import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import FieldsetGroup from './FieldsetGroup';
import FilterToggle from './FilterToggle';

export default function Availability() {
  const { availability, setAvailability } = useFilterContext();

  const handleChange = ({ target }) => {
    const { value } = target;

    if (availability.includes(value)) {
      const newAvailability = [...availability]
        .filter((e) => e !== value);
      setAvailability(newAvailability);
    } else setAvailability([...availability, value]);
  };

  return (
    <FieldsetGroup legend="availability">
      <FilterToggle
        type="checkbox"
        label={availabilityOptions.AVAILABLE}
        value={availabilityOptions.AVAILABLE}
        name="av-buttons"
        checked={availability.includes(availabilityOptions.AVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
      <FilterToggle
        type="checkbox"
        label={availabilityOptions.UNAVAILABLE}
        value={availabilityOptions.UNAVAILABLE}
        name="av-buttons"
        checked={availability.includes(availabilityOptions.UNAVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
    </FieldsetGroup>
  );
}
