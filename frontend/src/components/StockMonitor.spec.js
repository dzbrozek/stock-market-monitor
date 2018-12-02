import React from 'react';
import {shallow} from 'enzyme';
import StockMonitor from './StockMonitor';
import SearchInput from './SearchInput';
import SearchResults from '../containers/SearchResults';
import CompanyReport from './CompanyReport';

describe('components:StockMonitor', () => {
	it('should render component', () => {
		const wrapper = shallow(<StockMonitor/>);
		wrapper.setState({
			query: 'test query',
			showSearchResults: false
		});

		expect(wrapper.find('h1').text()).toEqual('Stock Monitor');

		expect(wrapper.find(SearchInput).prop('value')).toEqual('test query');

		expect(wrapper.find(SearchResults).exists()).toEqual(false);

		expect(wrapper.find(CompanyReport).exists()).toEqual(false);


		wrapper.setState({
			showSearchResults: true
		});

		expect(wrapper.find(SearchResults).prop('query')).toEqual('test query');

		wrapper.setState({
			selectedCompany: 'AA'
		});

		expect(wrapper.find(CompanyReport).prop('company')).toEqual('AA');
	});
});