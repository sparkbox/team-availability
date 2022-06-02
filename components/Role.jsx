import FieldsetGroup from './FieldsetGroup';
import FilterToggle from './FilterToggle';
import { useFilterContext } from '../context/FilterContext';

export default function Role({ uniqueRoles }) {
  const { roles, setRoles } = useFilterContext();

  const roleIndex = (role) => roles.indexOf(role);
  const addRole = (role) => setRoles([...roles, role]);
  const removeRole = (role) => setRoles([
    ...roles.slice(0, roleIndex(role)),
    ...roles.slice(roleIndex(role) + 1),
  ]);

  const toggleRole = (role) => {
    if (roles.includes(role)) removeRole(role);
    else addRole(role);
  };

  return (
    <FieldsetGroup legend="role">
      {uniqueRoles && uniqueRoles.map((role) => (
        <FilterToggle
          key={role}
          type="checkbox"
          label={role}
          value={role}
          name="role"
          onChange={() => toggleRole(role)}
        />
      ))}
    </FieldsetGroup>
  );
}
