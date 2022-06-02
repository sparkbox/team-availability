export default function FilterToggle({
  type, onChange, name, checked, label, value,
}) {
  return (
    <label className="cmp-filter-toggle">
      <input
        className="cmp-filter-toggle__input"
        type={type}
        onChange={onChange}
        name={name}
        checked={checked}
        value={value}
        aria-label={label}
      />
      <span className="cmp-filter-toggle__text" aria-hidden="true" data-text={label}>{label}</span>
    </label>
  );
}
