import { useViewContext } from '../context/ViewContext';

export default function ViewToggle() {
  const { view, setView } = useViewContext();

  return (
    <div className="cmp-view-toggle" data-view={view}>
      <label className="cmp-view-toggle__button">
        <input
          className="cmp-view-toggle__input"
          type="radio"
          checked={(view === 'grid')}
          onChange={() => setView('grid')}
          name="view-select"
          value="grid"
          aria-label="grid view"
        />
        <svg className="cmp-view-toggle__icon cmp-view-toggle__icon--grid" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="10" height="10" />
          <rect x="0.5" y="15.5" width="10" height="10" />
          <rect x="14.5" y="15.5" width="11" height="10" />
          <rect x="14.5" y="0.5" width="11" height="10" />
        </svg>
      </label>
      <label className="cmp-view-toggle__button">
        <input
          className="cmp-view-toggle__input"
          type="radio"
          checked={(view === 'list')}
          onChange={() => setView('list')}
          name="view-select"
          value="list"
          aria-label="list view"
        />
        <svg className="cmp-view-toggle__icon cmp-view-toggle__icon--list" width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <rect width="26" height="6" />
          <rect y="10" width="26" height="6" />
          <rect y="20" width="26" height="6" />
        </svg>
      </label>
    </div>
  );
}
