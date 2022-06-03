import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import FieldsetGroup from './FieldsetGroup';
import FilterToggle from './FilterToggle';

export default function Availability() {
  const { availability, setAvailability } = useFilterContext();

  const handleChange = ({ target }) => {
    setAvailability(target.value);
  };

  return (
    <FieldsetGroup legend="availability">
      <FilterToggle
        type="radio"
        label={availabilityOptions.AVAILABLE}
        value={availabilityOptions.AVAILABLE}
        name="av-buttons"
        checked={(availability === availabilityOptions.AVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
      <FilterToggle
        type="radio"
        label={availabilityOptions.UNAVAILABLE}
        value={availabilityOptions.UNAVAILABLE}
        name="av-buttons"
        checked={(availability === availabilityOptions.UNAVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
    </FieldsetGroup>
  );
}
