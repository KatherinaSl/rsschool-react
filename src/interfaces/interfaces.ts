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

export interface SearchProps {
  searchUrl: string;
}

export interface ApiResponse {
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
