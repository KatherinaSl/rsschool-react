import './App.css';
import { Component, type ReactNode } from 'react';
import SearchComponent from './components/search/searchComponent';

const URL =
  'https://stapi.co/api/v2/rest/astronomicalObject/search?pageNumber=0';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchComponent searchUrl={URL} />
      </>
    );
  }
}

export default App;
