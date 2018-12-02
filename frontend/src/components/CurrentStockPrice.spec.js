import React from 'react';
import {shallow} from 'enzyme';
import {PromiseState} from 'react-refetch';
import {Panel} from 'react-bootstrap';
import Loader from './Loader';
import ErrorComponent from './Error';
import CurrentStockPrice from './CurrentStockPrice';
import CurrentStockPriceDetails from './CurrentStockPriceDetails';


describe('components:StockValuation', () => {
	it('should render pending component', () => {
		const wrapper = shallow(<CurrentStockPrice companyCurrentPriceRequest={PromiseState.create()}/>);

		expect(wrapper.find(Panel).find(Panel.Heading).childAt(0).text()).toEqual('Current Stock Price');

		expect(wrapper.find(Panel).find(Panel.Body).find(Loader).exists()).toEqual(true);
	});

	it('should render rejected component', () => {
		const wrapper = shallow(<CurrentStockPrice companyCurrentPriceRequest={
			PromiseState.reject(new Error('test'))}
		/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(ErrorComponent).props()).toEqual({
			message: 'Unable to fetch current stock price'
		});
	});

	it('should render fulfilled component', () => {
		const data = {
			is_open: true,
			price: '176.7300'
		};
		const wrapper = shallow(<CurrentStockPrice companyCurrentPriceRequest={PromiseState.resolve(data)}/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(CurrentStockPriceDetails).prop('data')).toEqual(data);
	});
});