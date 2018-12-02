import React from 'react';
import {shallow} from 'enzyme';
import SearchInput from './SearchInput';
import {DebounceInput} from 'react-debounce-input';

describe('components:SearchInput', () => {
	it('should render component', () => {
		const onChange = jest.fn();
		const props = {
			value: 'query',
			onChange
		};
		const wrapper = shallow(<SearchInput {...props}/>);
		const input = wrapper.find(DebounceInput);

		expect(input.props()).toMatchObject({
			type: 'text',
			placeholder: 'Company symbol',
			debounceTimeout: 300,
			value: props.value,
			className: 'form-control'
		});

		input.simulate('change', {
			target: {
				value: 'test'
			}
		});

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('test');
	});
});