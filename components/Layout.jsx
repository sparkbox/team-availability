import Logo from './Logo';
import SkipToContent from './SkipToContent';
import { useFilterContext } from '../context/FilterContext';

export default function Layout({ children, filters, weekSelect }) {
  const { layoutContainerRef } = useFilterContext();

  return (
    <div className="obj-layout" ref={layoutContainerRef}>
      <header>
        <SkipToContent />
        <Logo />
        {weekSelect}
        {filters}
      </header>
      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
