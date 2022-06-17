export default function TradingCardNumResults({ numResults, numTotal }) {
  return (
    <div className="cmp-trading-card-num-results" aria-live="polite" role="status">
      <span>{`${numResults} of ${numTotal} `}</span>
      <span>meet your criteria</span>
    </div>
  );
}
