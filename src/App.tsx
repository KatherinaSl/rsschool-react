import './App.css';
import { Component, type ReactNode } from 'react';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import ErrorButton from './components/errorBoundary/errorButton';

const URL = 'https://stapi.co/api/v2/rest/astronomicalObject/search';

class App extends Component {
  render(): ReactNode {
    return (
      <ErrorBoundary>
        <SearchComponent searchUrl={URL} />
        <ErrorButton />
      </ErrorBoundary>
    );
  }
}

export default App;
