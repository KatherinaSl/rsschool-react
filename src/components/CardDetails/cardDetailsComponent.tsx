import { useRef, type ReactNode } from 'react';
import './cardDetailsComponent.css';
import { Link, useSearchParams, useParams } from 'react-router';
import SpinnerComponent from '../spinner/spinnerComponent';
import { useNavigate } from 'react-router';
import CardDetailsInfo from './cardDetailsInfoComponent';
import { useGetAstronomicalObjQuery } from '../../store/apiSlice';

export default function CardDetails(): ReactNode {
  const [searchParams] = useSearchParams();
  const { cardId } = useParams();
  const pageNumber = searchParams.get('pageNumber');
  const cardDetailsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const handleOutside = (event: React.MouseEvent) => {
    if (
      cardDetailsRef.current &&
      !cardDetailsRef.current.contains(event.target as Node)
    ) {
      navigate(`/?pageNumber=${pageNumber}`);
    }
  };

  const handleInside = (event: React.MouseEvent) => event.stopPropagation();
  const { data, isLoading, error } = useGetAstronomicalObjQuery(
    cardId ? cardId : ''
  );

  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);

      return (
        <div role="alert" className="error">
          <h3>An error has occurred:</h3>
          <p>{errMsg}</p>
        </div>
      );
    }
    return (
      <div role="alert" className="error">
        {error.message}
      </div>
    );
  }

  return (
    <>
      {isLoading && <SpinnerComponent />}
      <div className="sidebar-wrapper">
        {!isLoading && (
          <div className="sidebar" ref={cardDetailsRef} onClick={handleInside}>
            <Link to={`/?pageNumber=${pageNumber}`} className="hide-button">
              Hide details
            </Link>

            <h2 className="title">
              Information about astronomical object {data?.name} and its
              location
            </h2>

            {data && <CardDetailsInfo details={data} />}
          </div>
        )}

        <div onClick={handleOutside} className="overlay"></div>
      </div>
    </>
  );
}
