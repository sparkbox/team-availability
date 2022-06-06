import Logo from './Logo';
import SearchBox from './SearchBox';
import SkipToContent from './SkipToContent';

export default function Layout({ teamMembers, children }) {
  return (
    <div className="obj-layout">
      <header>
        <SkipToContent />
        <Logo />
        <SearchBox teamMembers={teamMembers} />
      </header>
      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
