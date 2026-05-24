import './flyoutComponent.css';

export default function FlyoutComponent({
  amount,
  handleOnClick,
}: {
  amount: number;
  handleOnClick: () => void;
}) {
  return (
    <div className="flyout-component">
      <p>{`${amount} cards are selected`}</p>
      <button className="unselect-button" onClick={handleOnClick}>
        Unselect All
      </button>

      <button className="download-button" value="download">
        Download
      </button>
    </div>
  );
}
