import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {Grid} from 'react-bootstrap';
import ErrorBoundary from './ErrorBoundary';
import StockMonitor from './StockMonitor';

describe('components:App', () => {
	it('should render component', () => {
		const wrapper = shallow(<App/>);

		expect(wrapper.find(Grid).find(ErrorBoundary).find(StockMonitor).exists()).toEqual(true);
	});
});