import './App.css';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/errorBoundary/errorBoundary';

const URL = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

const App = () => {
  return (
    <ErrorBoundary>
      <SearchComponent searchUrl={URL} />
    </ErrorBoundary>
  );
};

export default App;
