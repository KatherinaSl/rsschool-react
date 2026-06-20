import { type ReactNode } from 'react';
import './cardDetailsComponent.css';
import { Link, useSearchParams, useParams } from 'react-router';
import SpinnerComponent from '../spinner/spinnerComponent';
import CardDetailsInfo from './cardDetailsInfoComponent';
import { useGetAstronomicalObjQuery } from '../../lib/features/api/apiSlice';
import ErrorMessage from '../error/errorMessage';

export default function CardDetails(): ReactNode {
  const [searchParams] = useSearchParams();
  const { cardId } = useParams();
  const pageNumber = searchParams.get('pageNumber');
  const { data, isLoading, error } = useGetAstronomicalObjQuery(
    cardId ? cardId : ''
  );

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      {isLoading && <SpinnerComponent />}
      <div className="sidebar-wrapper">
        {!isLoading && (
          <div className="sidebar">
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
      </div>
    </>
  );
}
