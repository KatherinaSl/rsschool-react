import './App.css';
import { Component, type ReactNode } from 'react';
import SearchComponent from './components/search/searchComponent';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <SearchComponent searchUrl='' />
      </>
    );
  }
}

export default App;
