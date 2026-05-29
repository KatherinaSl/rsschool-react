import './App.css';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';
import ErrorNotFound from './components/errorBoundary/errorNotFound';
import AboutComponent from './components/about/aboutComponent';
import CardDetails from './components/CardDetails/cardDetailsComponent';
import { ThemeProvider } from './context/themeProvider';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<SearchComponent />} />
              <Route path="/cardDetails/:cardId" element={<SearchComponent />}>
                <Route index element={<CardDetails />} />
              </Route>
            </Route>
            <Route path="/about" element={<AboutComponent />} />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
