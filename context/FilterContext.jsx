import {
  createContext, useContext, useMemo, useState,
} from 'react';

const FilterContext = createContext();

export const availabilityOptions = {
  AVAILABLE: 'Available',
  UNAVAILABLE: 'Unavailable',
  ALL: 'All',
};

export const useFilterContext = () => useContext(FilterContext);

export function FilterProvider({ children }) {
  const [availability, setAvailability] = useState(availabilityOptions.ALL);
  const [project, setProject] = useState('all');
  const [roles, setRoles] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);

  const value = useMemo(() => (
    {
      availability,
      setAvailability,
      project,
      setProject,
      roles,
      setRoles,
      weekOffset,
      setWeekOffset,
    }
  ), [availability, project, roles, weekOffset]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
