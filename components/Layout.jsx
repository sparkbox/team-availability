import Logo from './Logo';
import SkipToContent from './SkipToContent';
import { useViewContext } from '../context/ViewContext';

export default function Layout({ children, filters, weekSelect }) {
  const { layoutContainerRef } = useViewContext();

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
