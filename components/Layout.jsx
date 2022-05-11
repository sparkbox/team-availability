import Logo from './Logo';
import SkipToContent from './SkipToContent';

export default function Layout({ children }) {
  return (
    <div className="obj-layout">
      <header>
        <SkipToContent />
        <Logo />
      </header>
      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
