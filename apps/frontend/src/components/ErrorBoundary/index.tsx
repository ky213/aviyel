import { Component, ErrorInfo } from 'react';

export interface ErrorBoundaryState {
  error: Error | undefined;
  errorInfo: ErrorInfo | undefined;
}

class ErrorBoundary extends Component {
  state: ErrorBoundaryState = { error: undefined, errorInfo: undefined };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      const errorDetails =
        process.env.NODE_ENV === 'development' ? (
          <details>
            {error?.toString()}
            <br />
            {errorInfo?.componentStack}
          </details>
        ) : undefined;
      return (
        <div style={{ width: '60%', margin: 'auto' }}>
          <h2 className="error">An unexpected error has occurred.</h2>
          {errorDetails}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
