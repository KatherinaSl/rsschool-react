import './checkboxComponent.css';

export default function CheckboxComponent({
  handleOnChange,
  checked,
}: {
  handleOnChange: () => void;
  checked: boolean;
}) {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} onChange={handleOnChange} />
        Select
      </label>
    </div>
  );
}
