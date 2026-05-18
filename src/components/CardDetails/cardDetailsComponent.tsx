import { useEffect, useRef, useState, type ReactNode } from 'react';
import './cardDetailsComponent.css';
import { Link, useSearchParams, useParams } from 'react-router';
import type {
  FullAstronomicalObjectInfo,
  FullAstronomicalObjectResponse,
} from '../../interfaces/interfaces';
import SpinnerComponent from '../spinner/spinnerComponent';
import { useNavigate } from 'react-router';
import CardDetailsInfo from './cardDetailsInfoComponent';

export default function CardDetails(): ReactNode {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const { cardId } = useParams();
  const pageNumber = searchParams.get('pageNumber');

  const [details, setDetails] = useState<FullAstronomicalObjectInfo>();

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

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      setIsLoading(true);

      try {
        setIsLoading(true);

        const response = await fetch(
          `https://stapi.co/api/v2/rest/astronomicalObject?uid=${cardId}`
        );

        if (!response.ok) {
          throw new Error(`Server error. Status: ${response.status}`);
        }

        const apiResponse: FullAstronomicalObjectResponse =
          await response.json();

        setDetails(apiResponse.astronomicalObject);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    void loadData();
  }, [cardId]);

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
              Information about astronomical object {details?.name} and its
              location
            </h2>

            {details && <CardDetailsInfo details={details} />}
          </div>
        )}

        <div onClick={handleOutside} className="overlay"></div>
      </div>
    </>
  );
}
