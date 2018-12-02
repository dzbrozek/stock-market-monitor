import React from 'react';
import PageError from './PageError';
import {shallow} from 'enzyme';

describe('components:PageError', () => {
	it('should render component', () => {
		const wrapper = shallow(<PageError/>);

		expect(wrapper.find('h1').text()).toEqual('Error');
		expect(wrapper.find('p').text()).toEqual('Something went wrong');
	});
});