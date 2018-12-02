import React from 'react';
import {shallow} from 'enzyme';
import CompanyReport from './CompanyReport';
import CompanyInfo from '../containers/CompanyInfo';
import StockValuation from '../containers/StockValuation';
import CurrentStockPrice from '../containers/CurrentStockPrice';

describe('components:CompanyReport', () => {
	it('should render component', () => {
		const company = 'Apple';
		const wrapper = shallow(<CompanyReport company={company}/>);
		
		expect(wrapper.find(CompanyInfo).prop('company')).toEqual(company);

		expect(wrapper.find(StockValuation).prop('company')).toEqual(company);

		expect(wrapper.find(CurrentStockPrice).prop('company')).toEqual(company);
	});
});