import { useDispatch, useSelector } from 'react-redux';
import './flyoutComponent.css';
import { removeAll, selectedCards } from '../../store/slice';
import exportToCsv from '../../utils/convertToCSV';

export default function FlyoutComponent({ amount }: { amount: number }) {
  const dispatch = useDispatch();
  const cards = useSelector(selectedCards);
  const handleOnClick = () => dispatch(removeAll());
  const handleOnClickDownload = (): void => {
    const title = `${cards.length}_items.csv`;
    exportToCsv(title, cards);
  };

  return (
    <div className="flyout-component">
      <p>{`${amount} cards are selected`}</p>
      <button className="unselect-button" onClick={handleOnClick}>
        Unselect All
      </button>

      <button
        className="download-button"
        value="download"
        onClick={handleOnClickDownload}
      >
        Download
      </button>
    </div>
  );
}
