import { Component, type ReactNode } from 'react';
import './searchComponent.css';
import CardComponent from '../card/cardComponent';
import type {
  SearchProps,
  SearchState,
  ApiResponse,
} from '../../interfaces/interfaces';

export default class SearchComponent extends Component<
  SearchProps,
  SearchState
> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { searchTerm: localStorage.getItem('searchTerm') || '' };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  handleOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    this.fetchData();
    localStorage.setItem('searchTerm', this.state.searchTerm);
  };

  fetchData = async (): Promise<ApiResponse> => {
    try {
      const response = await fetch(
        'https://stapi.co/api/v2/rest/astronomicalObject/search?pageNumber=0',
        {
          method: 'GET',
        }
      );
      const apiResponse = (await response.json()) as ApiResponse;
      this.setState({ data: apiResponse.astronomicalObjects });
      return apiResponse;
    } catch (error) {
      console.error(error);
    }
  };

  render(): ReactNode {
    const { data } = this.state;
    return (
      <div className="search-component">
        <h1>Star Track Astronomical Objects Search:</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={this.handleOnChange.bind(this)}
          />
          <button type="submit" onClick={this.handleOnClick.bind(this)}>
            Search
          </button>
          <div className="result-section">
            {data &&
              data.length > 0 &&
              data.map((obj, index) => <CardComponent key={index} {...obj} />)}
          </div>
        </div>
      </div>
    );
  }
}
