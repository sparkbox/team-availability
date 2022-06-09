import CopyToClipboardButton from './CopyToClipboardButton';
import Show from './Show';

export default function PersonalBio({ name, bio }) {
  return (
    <Show when={bio}>
      <section aria-labelledby="personal-bio" className="cmp-personal-bio">
        <div className="cmp-personal-bio__header">
          <h3 id="personal-bio" className="cmp-personal-bio__heading">
            About
            {' '}
            {name}
          </h3>
          <CopyToClipboardButton content={bio} label="Copy Bio" />
        </div>
        <p className="cmp-personal-bio__content">
          {bio}
        </p>
      </section>
    </Show>
  );
}
