import { useDispatch } from 'react-redux';
import {
  astronomicalObjApi,
  useSearchAstronomicalObjMutation,
} from '../../store/apiSlice';
import './refreshButton.css';

export default function RefreshButtonComponent({
  title,
  pageNumber,
}: {
  title: string;
  pageNumber: number;
}) {
  const dispatch = useDispatch();
  const [searchAstronomicalObj] = useSearchAstronomicalObjMutation();
  const onClick = () => {
    console.log('refresh button');
    dispatch(
      astronomicalObjApi.util.invalidateTags([{ type: 'AstronomicalObject' }])
    );
    searchAstronomicalObj({
      title,
      pageNumber,
    });
  };
  return (
    <button className="refresh-button" onClick={onClick}>
      Refresh
    </button>
  );
}
