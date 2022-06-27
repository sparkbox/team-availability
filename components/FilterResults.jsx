export default function FilterResults({ numResults, numTotal }) {
  return (
    <div className="cmp-filter-results" aria-live="polite" role="status">
      <span>{`${numResults} of ${numTotal} `}</span>
      <span>meet your criteria</span>
    </div>
  );
}
