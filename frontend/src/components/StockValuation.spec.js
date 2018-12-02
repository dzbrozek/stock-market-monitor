import React from 'react';
import {shallow} from 'enzyme';
import {PromiseState} from 'react-refetch';
import {Panel} from 'react-bootstrap';
import Loader from './Loader';
import ErrorComponent from './Error';
import StockValuation from './StockValuation';
import StockValuationDetails from './StockValuationDetails';


describe('components:StockValuation', () => {
	it('should render pending component', () => {
		const wrapper = shallow(<StockValuation companyStockValuationRequest={PromiseState.create()}/>);

		expect(wrapper.find(Panel).find(Panel.Heading).childAt(0).text()).toEqual('Stock Valuation');

		expect(wrapper.find(Panel).find(Panel.Body).find(Loader).exists()).toEqual(true);
	});

	it('should render rejected component', () => {
		const wrapper = shallow(<StockValuation companyStockValuationRequest={
			PromiseState.reject(new Error('test'))}
		/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(ErrorComponent).props()).toEqual({
			message: 'Unable to fetch stock valuation'
		});
	});

	it('should render fulfilled component', () => {
		const data = {
			open: '176.7300',
            high: '181.2600',
            low: '174.9300',
            close: '180.9400',
            price: '180.9400',
            volume: '42348987'
		};
		const wrapper = shallow(<StockValuation companyStockValuationRequest={PromiseState.resolve(data)}/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(StockValuationDetails).prop('data')).toEqual(data);
	});
});