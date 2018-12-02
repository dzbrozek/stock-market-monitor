import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import {shallow} from 'enzyme';
import PageError from './PageError';

const TestComponent = () => <p/>;

describe('components:ErrorBoundary', () => {
	it('should render component', () => {
		const wrapper = shallow(<ErrorBoundary><TestComponent/></ErrorBoundary>);

		expect(wrapper.find(TestComponent).exists()).toEqual(true);

		wrapper.setState({
			hasError: true
		});

		expect(wrapper.find(PageError).exists()).toEqual(true);
	});
});