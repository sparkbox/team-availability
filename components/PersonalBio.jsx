import Show from './Show';

export default function PersonalBio({ name, bio }) {
  return (
    <Show when={bio}>
      <section aria-labelledby="personal-bio" className="cmp-personal-bio">
        <h3 id="personal-bio" className="cmp-personal-bio__header">
          About
          {' '}
          {name}
        </h3>
        <p className="cmp-personal-bio__content">
          {bio}
        </p>
      </section>
    </Show>
  );
}
