import {
  createContext, useContext, useMemo, useState, useRef
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
  const [weekOffset, setWeekOffset] = useState(0);
  const [view, setView] = useState('grid');
  const layoutContainerRef = useRef(null);

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
      view,
      setView,
      layoutContainerRef
    }
  ), [availability, project, roles, weekOffset, view]);

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}
