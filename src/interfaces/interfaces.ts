import type { ReactNode } from 'react';

export interface AstronomicalObject {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location?: {
    uid: string;
    name: string;
  };
}

export interface FullAstronomicalObjectResponse {
  astronomicalObject: FullAstronomicalObjectInfo;
}

export interface FullAstronomicalObjectInfo {
  uid: string;
  name: string;
  astronomicalObjectType: string;
  location?: CardDetails;
}

interface CardDetails {
  astronomicalObjectType: string;
  location: {
    uid: string;
    name: string;
  };
}

export interface SearchProps {
  searchUrl: string;
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface ApiResponse {
  page: Page;
  astronomicalObjects: AstronomicalObject[];
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErroBoundaryState {
  hasError: boolean;
  error?: Error;
  errorMessage?: string;
}

export interface FallBackUIProps {
  message?: string;
  onReset?: () => void;
}
