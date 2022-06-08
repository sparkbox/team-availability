import {
  createContext, useContext, useMemo, useState,
} from 'react';

const FilterContext = createContext();

export const availabilityOptions = {
  AVAILABLE: 'Available',
  UNAVAILABLE: 'Unavailable',
};

export const useFilterContext = () => useContext(FilterContext);

export function FilterProvider({ children }) {
  const [availability, setAvailability] = useState(availabilityOptions.AVAILABLE);
  const [project, setProject] = useState('all');
  const [roles, setRoles] = useState([]);

  const value = useMemo(() => (
    {
      availability, setAvailability, project, setProject, roles, setRoles,
    }
  ), [availability, project, roles]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
