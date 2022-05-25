import FilterToggle from './FilterToggle';

export default function OverviewFilters() {
  return (
    <div className="cmp-overview-filters">
      <fieldset className="cmp-overview-filters__group">
        <legend className="cmp-overview-filters__group-label">Role</legend>
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
      </fieldset>
      <fieldset className="cmp-overview-filters__group">
        <legend className="cmp-overview-filters__group-label">Availability</legend>
        <FilterToggle
          type="radio"
          label="Available"
          value="available"
          name="av-buttons"
        />
        <FilterToggle
          type="radio"
          label="Unavailable"
          value="unavailable"
          name="av-buttons"
        />
      </fieldset>
    </div>
  );
}
