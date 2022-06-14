export default function TradingCardNumResults({ numResults, numTotal }) {
  return (
    <div className="cmp-trading-card-num-results" aria-live="polite">
      {numResults}
      {' '}
      of
      {' '}
      {numTotal}
      {' '}
      meet your criteria
    </div>
  );
}
