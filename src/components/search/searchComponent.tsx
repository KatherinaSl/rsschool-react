import { Component, type ReactNode } from 'react';
import './searchComponent.css';
import CardComponent from '../card/cardComponent';
import type {
  SearchProps,
  SearchState,
  ApiResponse,
} from '../../interfaces/interfaces';
import SpinnerComponent from '../spinner/spinnerComponent';
import FallbackComponent from '../errorBoundary/fallbackComponent';

export default class SearchComponent extends Component<
  SearchProps,
  SearchState
> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
      isLoading: false,
    };
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
  };

  fetchData = async (): Promise<ApiResponse | undefined> => {
    this.setState({ isLoading: true });

    const title = this.state.searchTerm.trim();
    localStorage.setItem('searchTerm', title);

    try {
      const response = await fetch(
        `https://stapi.co/api/v2/rest/astronomicalObject/search`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({ name: title }),
        }
      );

      if (!response.ok)
        throw new Error(`Server error. Status: ${response.status} error code`);

      const apiResponse = (await response.json()) as ApiResponse;
      this.setState({
        data: apiResponse.astronomicalObjects,
        isLoading: false,
      });
      return apiResponse;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Something went wrong.', error.message);
        this.setState({ error: error });
      }
    }
  };

  render(): ReactNode {
    const { data, isLoading, error } = this.state;
    return (
      <div className="search-component">
        <h1>Star Track Astronomical Objects Search:</h1>
        <div>
          <input
            name=""
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
              !error &&
              (data.length > 0 ? (
                data.map((obj, index) => <CardComponent key={index} {...obj} />)
              ) : (
                <p>No actronomical object found for the given search term.</p>
              ))}
          </div>

          {isLoading && !error && <SpinnerComponent />}
          {error && <FallbackComponent message={error.message} />}
        </div>
      </div>
    );
  }
}
