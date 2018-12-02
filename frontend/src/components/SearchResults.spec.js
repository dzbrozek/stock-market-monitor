import React from 'react';
import {shallow} from 'enzyme';
import {PromiseState} from 'react-refetch';
import SearchResults from './SearchResults';
import SearchResultList from './SearchResultList';
import ErrorComponent from './Error';

const onSelect = jest.fn();

describe('components:SearchResults', () => {
	it('should render pending component', () => {
		const wrapper = shallow(<SearchResults companySearchRequest={PromiseState.create()}
		                                       onSelect={onSelect}/>);

		expect(wrapper.type()).toEqual(null);
	});

	it('should render rejected component', () => {
		const wrapper = shallow(<SearchResults companySearchRequest={PromiseState.reject(new Error('test'))}
		                                       onSelect={onSelect}/>);

		expect(wrapper.find(ErrorComponent).prop('message')).toEqual('Unable to find companies');
	});

	it('should render fulfilled component', () => {
		const data = [
			{symbol: 'AA', name: 'Apple'},
			{symbol: 'BB', name: 'Microsoft'}
		];
		const wrapper = shallow(<SearchResults companySearchRequest={PromiseState.resolve(data)}
		                                       onSelect={onSelect}/>);
		
		expect(wrapper.find(SearchResultList).props()).toEqual({
			data,
			onSelect
		});
	});
});