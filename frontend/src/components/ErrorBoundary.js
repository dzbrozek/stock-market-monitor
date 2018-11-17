import React from 'react';
import PageError from './PageError';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    render() {
        if(this.state.hasError) {
            return <PageError/>;
        }

        return this.props.children;
    }
}