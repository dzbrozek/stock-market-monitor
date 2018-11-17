import React from 'react';
import {Grid} from 'react-bootstrap';
import ErrorBoundary from './ErrorBoundary';
import StockMonitor from './StockMonitor';

class App extends React.Component {
  render() {
    return (
        <Grid className="app">
            <ErrorBoundary>
                <StockMonitor/>
            </ErrorBoundary>
        </Grid>
    );
  }
}

export default App;
