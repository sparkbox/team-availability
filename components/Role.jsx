import FieldsetGroup from './FieldsetGroup';
import FilterToggle from './FilterToggle';

export default function Availability() {
  return (
    <FieldsetGroup legend="role">
      <FilterToggle
        type="checkbox"
        label="Developers"
        value="devs"
        name="role"
      />
      <FilterToggle
        type="checkbox"
        label="FEDs"
        value="feds"
        name="role"
      />
      <FilterToggle
        type="checkbox"
        label="PMs"
        value="pms"
        name="role"
      />
      <FilterToggle
        type="checkbox"
        label="Designers"
        value="designers"
        name="role"
      />
      <FilterToggle
        type="checkbox"
        label="UXers"
        value="uxers"
        name="role"
      />
    </FieldsetGroup>
  );
}
