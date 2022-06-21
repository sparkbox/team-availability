import {
  createContext, useContext, useMemo, useState, useRef
} from 'react';

const ViewContext = createContext();

export const useViewContext = () => useContext(ViewContext);


export function ViewProvider({ children }) {

  const [view, setView] = useState('grid');
  const layoutContainerRef = useRef(null);

  const value = useMemo(() => (
    {
      view,
      setView,
      layoutContainerRef
    }
  ), [view]);

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
}
