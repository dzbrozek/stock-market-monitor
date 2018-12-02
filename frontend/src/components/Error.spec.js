import React from 'react';
import {shallow} from 'enzyme';
import Error from './Error';

describe('components:Error', () => {
	it('should render component', () => {
		const message = 'Test message';
		const wrapper = shallow(<Error message={message}/>);

		expect(wrapper.props()).toEqual({
			className: 'error',
			children: message
		});
	});
});