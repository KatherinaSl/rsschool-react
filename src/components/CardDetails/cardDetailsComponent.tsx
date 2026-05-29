import { type ReactNode } from 'react';
import './cardDetailsComponent.css';
import { Link, useSearchParams, useParams } from 'react-router';
import SpinnerComponent from '../spinner/spinnerComponent';
import CardDetailsInfo from './cardDetailsInfoComponent';
import { useGetAstronomicalObjQuery } from '../../store/apiSlice';
import ErrorMessage from '../error/errorMessage';

export default function CardDetails(): ReactNode {
  const [searchParams] = useSearchParams();
  const { cardId } = useParams();
  const pageNumber = searchParams.get('pageNumber');
  const { data, isLoading, error } = useGetAstronomicalObjQuery(
    cardId ? cardId : ''
  );

  // if (error) {
  //   if ('status' in error) {
  //     const errMsg =
  //       'error' in error ? error.error : JSON.stringify(error.data);

  //     return (
  //       <div role="alert" className="error">
  //         <h3>An error has occurred:</h3>
  //         <p>{errMsg}</p>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div role="alert" className="error">
  //       {error.message}
  //     </div>
  //   );
  // }

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
