export default function FieldsetGroup({ legend, children }) {
  return (
    <fieldset className="cmp-fieldset-group">
      <legend className="cmp-fieldset-group__legend">{legend}</legend>
      {children}
    </fieldset>
  );
}
