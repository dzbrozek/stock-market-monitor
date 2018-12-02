import React from 'react';
import Loader from './Loader';
import {shallow} from 'enzyme';

describe('components:Loader', () => {
	it('should render component', () => {
		const wrapper = shallow(<Loader/>);

		expect(wrapper.find('.loader').exists()).toEqual(true);
	});
});