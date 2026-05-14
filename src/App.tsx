import './App.css';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router';
import ErrorNotFound from './components/errorBoundary/errorNotFound';
import AboutComponent from './components/about/aboutComponent';

const URL = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route index element={<SearchComponent searchUrl={URL} />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
