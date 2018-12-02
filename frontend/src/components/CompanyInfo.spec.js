import React from 'react';
import {shallow} from 'enzyme';
import CompanyInfo from './CompanyInfo';
import {PromiseState} from 'react-refetch';
import {Panel} from 'react-bootstrap';
import Loader from './Loader';
import ErrorComponent from './Error';
import CompanyInfoDetails from './CompanyInfoDetails';


describe('components:CompanyInfo', () => {
	it('should render pending component', () => {
		const wrapper = shallow(<CompanyInfo companyInfoRequest={PromiseState.create()}/>);

		expect(wrapper.find(Panel).find(Panel.Heading).childAt(0).text()).toEqual('Company Info');

		expect(wrapper.find(Panel).find(Panel.Body).find(Loader).exists()).toEqual(true);
	});

	it('should render rejected component', () => {
		const wrapper = shallow(<CompanyInfo companyInfoRequest={PromiseState.reject(new Error('test'))}/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(ErrorComponent).props()).toEqual({
			message: 'Unable to fetch company info'
		});
	});

	it('should render fulfilled component', () => {
		const data = {
			symbol: 'AA',
            name: 'Apple',
            website: '',
            logo: ''
		};
		const wrapper = shallow(<CompanyInfo companyInfoRequest={PromiseState.resolve(data)}/>);

		expect(wrapper.find(Panel).find(Panel.Body).find(CompanyInfoDetails).prop('data')).toEqual(data);
	});
});