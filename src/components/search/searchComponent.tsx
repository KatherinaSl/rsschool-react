import {
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import './searchComponent.css';
import CardComponent from '../card/cardComponent';
import type { SearchProps, ApiResponse } from '../../interfaces/interfaces';
import SpinnerComponent from '../spinner/spinnerComponent';
import FallbackComponent from '../errorBoundary/fallbackComponent';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link, Outlet, useSearchParams } from 'react-router';
import PaginationComponent from '../pagination/paginationComponent';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../context/theme';
import FlyoutComponent from '../flyout/flyoutComponent';
import { useSelector } from 'react-redux';
import { amountOfCards } from '../../store/slice';

export default function SearchComponent(props: SearchProps): ReactNode {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');
  const [activeSearch, setActiveSearch] = useLocalStorage('searchTerm');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<ApiResponse>();
  const [error, setError] = useState<Error>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const PAGE_SIZE = 6;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const numberOfCards = useSelector(amountOfCards);

  const fetchData = useCallback(
    async (title: string): Promise<ApiResponse | undefined> => {
      const pageNumber = searchParams.get('pageNumber')
        ? Number(searchParams.get('pageNumber')) - 1
        : 0;

      try {
        const response = await fetch(
          `${props.searchUrl}?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ name: title }),
          }
        );

        if (!response.ok)
          throw new Error(
            `Server error. Status: ${response.status} error code`
          );

        const apiResponse = (await response.json()) as ApiResponse;
        setResponse(apiResponse);
        return apiResponse;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Something went wrong.', error.message);
          setError(error);
        }
      }
    },
    [props.searchUrl, searchParams]
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

    setIsLoading(true);
    setError(undefined);
    navigate('/');
  };

  return (
    <div className={`search-component ${theme}`}>
      <div className="header">
        <h1>Star Track Astronomical Objects Search:</h1>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme}>
          {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
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
      </div>

      {response && !isLoading && !error && (
        <>
          <div className="content-layout">
            <div className="result-section">
              {response.astronomicalObjects.length > 0 ? (
                response.astronomicalObjects.map((obj, index) => {
                  return <CardComponent key={index} {...obj} />;
                })
              ) : (
                <p>No astronomical object found for the given search term.</p>
              )}
            </div>
            <Outlet />
          </div>

          {response.astronomicalObjects.length > 0 && numberOfCards > 0 && (
            <FlyoutComponent amount={numberOfCards} />
          )}

          {response.page.numberOfElements > 0 && (
            <PaginationComponent {...response.page} />
          )}
        </>
      )}
      {isLoading && !error && <SpinnerComponent />}
      {error && <FallbackComponent message={error.message} />}
    </div>
  );
}
