import { useAppDispatch } from '@/src/lib/hooks';
import {
  astronomicalObjApi,
  useSearchAstronomicalObjMutation,
} from '../../lib/features/api/apiSlice';
import './refreshButton.css';

export default function RefreshButtonComponent({
  title,
  pageNumber,
}: {
  title: string;
  pageNumber: number;
}) {
  const dispatch = useAppDispatch();
  const [searchAstronomicalObj] = useSearchAstronomicalObjMutation();
  const onClick = () => {
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
