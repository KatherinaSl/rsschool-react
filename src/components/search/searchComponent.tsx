import { useCallback, useEffect, useState, type ReactNode } from 'react';
import './searchComponent.css';
import CardComponent from '../card/cardComponent';
import type {
  SearchProps,
  ApiResponse,
  AstronomicalObject,
} from '../../interfaces/interfaces';
import SpinnerComponent from '../spinner/spinnerComponent';
import FallbackComponent from '../errorBoundary/fallbackComponent';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link } from 'react-router';

export default function SearchComponent(props: SearchProps): ReactNode {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');
  const [activeSearch, setActiveSearch] = useLocalStorage('searchTerm');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<AstronomicalObject[]>([]);
  const [error, setError] = useState<Error>();

  const fetchData = useCallback(
    async (title: string): Promise<ApiResponse | undefined> => {
      try {
        const response = await fetch(props.searchUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ name: title }),
        });

        if (!response.ok)
          throw new Error(
            `Server error. Status: ${response.status} error code`
          );

        const apiResponse = (await response.json()) as ApiResponse;
        setData(apiResponse.astronomicalObjects);
        return apiResponse;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Something went wrong.', error.message);
          setError(error);
        }
      }
    },
    [props.searchUrl]
  );

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      setIsLoading(true);
      setError(undefined);

      try {
        await fetchData(activeSearch);
      } finally {
        setIsLoading(false);
      }
    };

    void loadData();
  }, [activeSearch, fetchData]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const title = searchTerm.trim();

    setActiveSearch(title);

    localStorage.setItem('searchTerm', title);

    setIsLoading(true);
    setError(undefined);
  };

  return (
    <div className="search-component">
      <div className='header'>
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link to="/about">About</Link>
      </div>

      <div>
        <input
          name="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleOnClick}>
          Search
        </button>
        <div className="result-section">
          {data &&
            !error &&
            (data.length > 0 ? (
              data.map((obj, index) => <CardComponent key={index} {...obj} />)
            ) : (
              <p>No astronomical object found for the given search term.</p>
            ))}
        </div>

        {isLoading && !error && <SpinnerComponent />}
        {error && <FallbackComponent message={error.message} />}
      </div>
    </div>
  );
}
