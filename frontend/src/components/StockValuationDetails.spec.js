import React from 'react';
import {shallow} from 'enzyme';
import StockValuationDetails from './StockValuationDetails';

describe('components:StockValuationDetails', () => {
	it('should render component', () => {
		const data = {
			open: '176.7300',
            high: '181.2600',
            low: '174.9300',
            close: '180.9400',
            price: '180.9400',
            volume: '42348987'
		};
		const wrapper = shallow(<StockValuationDetails data={data}/>);
		const paragraphs = wrapper.find('p');

		expect(paragraphs.at(0).text()).toEqual('Open: 176.73');

		expect(paragraphs.at(1).text()).toEqual('High: 181.26');

		expect(paragraphs.at(2).text()).toEqual('Close: 180.94');

		expect(paragraphs.at(3).text()).toEqual('Low: 174.93');

		expect(paragraphs.at(4).text()).toEqual('Price: 180.94');

		expect(paragraphs.at(5).text()).toEqual('Volume: 42348987');
	});
});