// @flow
import * as React from 'react';
import PageError from './PageError';

type State = {
    hasError: boolean
}

type Props = {
    children: React.Node
}

export default class ErrorBoundary extends React.Component<Props, State> {
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    render(): React.Node {
        if(this.state.hasError) {
            return <PageError/>;
        }

        return this.props.children;
    }
}