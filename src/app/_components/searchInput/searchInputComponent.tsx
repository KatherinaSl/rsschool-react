'use client';

import { type ReactNode } from 'react';
import styles from './searchInputComponent.module.css';
// import SpinnerComponent from '../spinner/spinnerComponent';
import useLocalStorage from '../../../components/hooks/useLocalStorage';
// import { useSearchParams } from 'react-router';
// import { useNavigate } from 'react-router';
import { redirect } from 'next/navigation';
// import { ThemeContext } from '../../context/theme';
// import { useSearchAstronomicalObjMutation } from '../../lib/features/api/apiSlice';
// import ErrorMessage from '../error/errorMessage';
// import ResultsComponent from '../results/resultsComponent';
// import PaginationComponent from '../pagination/paginationComponent';
// import RefreshButtonComponent from '../refreshButton/refreshButton';

export default function SearchInputComponent(): ReactNode {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm');
  // const [searchParams] = useSearchParams();
  // const searchParams = useSearchParams();
  // const navigate = useNavigate();
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const pageNumber = searchParams.get('pageNumber')
  // ? Number(searchParams.get('pageNumber')) - 1
  // : 0;
  // const [searchAstronomicalObj, { data, isLoading, error, isUninitialized }] =
  //   useSearchAstronomicalObjMutation();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const title = searchTerm.trim();
    setSearchTerm(title);
    // searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
    // navigate('/');
    redirect('/');
  };

  // const hangeOnPageChange = (pageNumber: number = 0) => {
  //   searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
  // };

  // if (isUninitialized) {
  //   searchAstronomicalObj({ title: searchTerm, pageNumber: pageNumber });
  // }

  // if (error) {
  //   return <ErrorMessage error={error} />;
  // }

  // return (
  // <div className={`search-component ${theme}`}>
  {
    /* <div className="header"> */
  }
  {
    /* <h1>Star Track Astronomical Objects Search:</h1> */
  }
  {
    /* <Link to="/about">About</Link> */
  }
  {
    /* <button onClick={toggleTheme}>
          {theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */
  }
  {
    /* </div> */
  }

  {
    /* <RefreshButtonComponent title={searchTerm} pageNumber={pageNumber} /> */
  }
  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        className={styles.input}
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button className={styles.button} type="submit" onClick={handleOnClick}>
        Search
      </button>
    </div>
  );
  {
    /* {data && !isLoading && !error && (
        <>
          <ResultsComponent searchTerm={searchTerm} data={data} />
          {data.page.numberOfElements > 0 && (
            <PaginationComponent page={data.page} onClick={hangeOnPageChange} />
          )}
        </>
      )} */
  }
  {
    /* {isLoading && !error && <SpinnerComponent />} */
  }
  // </div>
  // );
}
