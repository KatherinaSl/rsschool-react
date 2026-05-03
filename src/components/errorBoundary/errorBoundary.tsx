import { Component, type ReactNode } from 'react';
import type {
  ErroBoundaryState,
  ErrorBoundaryProps,
} from '../../interfaces/interfaces';
import FallbackComponent from './fallbackComponent';

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErroBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <FallbackComponent
          message={this.state.errorMessage}
          onReset={() => {
            this.setState({ hasError: false });
          }}
        />
      );
    }

    return this.props.children;
  }
}
