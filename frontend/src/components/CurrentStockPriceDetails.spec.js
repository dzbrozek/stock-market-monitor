import {shallow} from 'enzyme';
import React from 'react';
import CurrentStockPriceDetails from './CurrentStockPriceDetails';

describe('components:CurrentStockPriceDetails', () => {
	it('should render component for closed stock market', () => {
		const data = {
			is_open: false,
			price: null
		};
		const wrapper = shallow(<CurrentStockPriceDetails data={data}/>);

		expect(wrapper.props()).toEqual({
			className: 'warning',
			children: 'Stock market is currently closed'
		});

	});
	it('should render component for open stock market without known current price', () => {
		const data = {
			is_open: true,
			price: null
		};
		const wrapper = shallow(<CurrentStockPriceDetails data={data}/>);

		expect(wrapper.props()).toEqual({
			className: 'warning',
			children: 'Price not available'
		});
	});

	it('should render component for open stock market with known current price', () => {
		const data = {
			is_open: true,
			price: '41.3132'
		};
		const wrapper = shallow(<CurrentStockPriceDetails data={data}/>);

		expect(wrapper.text()).toEqual('Current Price: 41.31');
	});
});