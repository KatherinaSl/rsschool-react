import './App.css';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import ErrorNotFound from './components/errorBoundary/errorNotFound';
import AboutComponent from './components/about/aboutComponent';
import CardDetails from './components/CardDetails/cardDetailsComponent';

const URL = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<SearchComponent searchUrl={URL} />} />
            <Route
              path="/cardDetails/:cardId"
              element={<SearchComponent searchUrl={URL} />}
            >
              <Route index element={<CardDetails />} />
            </Route>
          </Route>
          <Route path="/about" element={<AboutComponent />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
