import { availabilityOptions, useFilterContext } from '../context/FilterContext';
import FilterToggle from './FilterToggle';

export default function Availability() {
  const { availability, setAvailability } = useFilterContext();

  const handleChange = ({ target }) => {
    setAvailability(target.value);
  };

  return (
    <>
      <FilterToggle
        type="radio"
        label="Available"
        value={availabilityOptions.AVAILABLE}
        name="av-buttons"
        checked={(availability === availabilityOptions.AVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
      <FilterToggle
        type="radio"
        label="Unavailable"
        value={availabilityOptions.UNAVAILABLE}
        name="av-buttons"
        checked={(availability === availabilityOptions.UNAVAILABLE)}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
