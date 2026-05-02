export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location?: {
    uid: string;
    name: string;
  };
}

export interface SearchProps {
  searchUrl: string;
}

export interface SearchState {
  searchTerm: string;
  data?: AstronomicalObject[]
}

export interface ApiResponse {
  astronomicalObjects: AstronomicalObject[];
}