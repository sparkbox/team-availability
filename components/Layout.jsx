import Logo from './Logo';
import SkipToContent from './SkipToContent';

export default function Layout({ children, filters, weekSelect }) {
  return (
    <div className="obj-layout">
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
