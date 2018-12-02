import React from 'react';
import {shallow} from 'enzyme';
import SearchResultList from './SearchResultList';

const onSelect = jest.fn();

describe('components:SearchResultList', () => {
	it('should render result list', () => {
		const data = [
			{symbol: 'AA', name: 'Apple'},
			{symbol: 'BB', name: 'Microsoft'}
		];
		const wrapper = shallow(<SearchResultList data={data}
		                                          onSelect={onSelect}/>);
		const paragraphs = wrapper.find('p');

		expect(paragraphs.map(node => node.text())).toEqual(['Apple', 'Microsoft']);

		paragraphs.at(1).simulate('click');

		expect(onSelect).toHaveBeenCalledTimes(1);
		expect(onSelect).toHaveBeenCalledWith('BB');
	});

	it('should render empty result list', () => {
		const data = [];
		const wrapper = shallow(<SearchResultList data={data}
		                                         onSelect={onSelect}/>);

		expect(wrapper.find('p').text()).toEqual('No results to display');
	});
});