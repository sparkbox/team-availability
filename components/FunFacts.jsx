import Show from './Show';

export default function FunFacts({ funFacts }) {
  return (
    <Show when={funFacts.length > 0}>
      <section aria-labelledby="fun-facts" className="cmp-fun-facts">
        <h2 id="fun-facts" className="cmp-fun-facts__header">Fun Facts</h2>
        <Show when={funFacts.length === 1}>
          <p className="cmp-fun-facts__fact">{funFacts[0]}</p>
        </Show>
        <Show when={funFacts.length > 1}>
          <ul className="cmp-fun-facts__list">
            {funFacts.map((fact) => <li key={fact} className="cmp-fun-facts__fact">{fact}</li>)}
          </ul>
        </Show>
      </section>
    </Show>
  );
}
