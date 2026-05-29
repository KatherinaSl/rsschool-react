import { useContext, type ReactNode } from 'react';
import './searchComponent.css';
import CardComponent from '../card/cardComponent';
import SpinnerComponent from '../spinner/spinnerComponent';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link, Outlet, useSearchParams } from 'react-router';
import PaginationComponent from '../pagination/paginationComponent';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../../context/theme';
import FlyoutComponent from '../flyout/flyoutComponent';
import { useSelector } from 'react-redux';
import { amountOfCards } from '../../store/slice';
import { useSearchAstronomicalObjMutation } from '../../store/apiSlice';
import ErrorMessage from '../error/errorMessage';

export default function SearchComponent(): ReactNode {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const numberOfCards = useSelector(amountOfCards);
  const pageNumber = searchParams.get('pageNumber')
    ? Number(searchParams.get('pageNumber')) - 1
    : 0;
  const [searchAstronomicalObj, { data, isLoading, error, isUninitialized }] =
    useSearchAstronomicalObjMutation();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const title = searchTerm.trim();
    setSearchTerm(title);
    searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
    navigate('/');
  };

  const hangeOnPageChange = (pageNumber: number = 0) => {
    searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
  };

  if (isUninitialized) {
    searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

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

      {data && !isLoading && !error && (
        <>
          <div className="content-layout">
            <div className="result-section">
              {data.astronomicalObjects.length > 0 ? (
                data.astronomicalObjects.map((obj, index) => {
                  return <CardComponent key={index} {...obj} />;
                })
              ) : (
                <p>No astronomical object found for the given search term.</p>
              )}
            </div>
            <Outlet />
          </div>

          {data.astronomicalObjects.length > 0 && numberOfCards > 0 && (
            <FlyoutComponent amount={numberOfCards} />
          )}

          {data.page.numberOfElements > 0 && (
            <PaginationComponent page={data.page} onClick={hangeOnPageChange} />
          )}
        </>
      )}
      {isLoading && !error && <SpinnerComponent />}
    </div>
  );
}
