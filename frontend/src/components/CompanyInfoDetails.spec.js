import {shallow} from 'enzyme';
import React from 'react';
import CompanyInfoDetails from './CompanyInfoDetails';

describe('components:CompanyInfoDetails', () => {
	it('should render full component', () => {
		const data = {
			symbol: 'AA',
            name: 'Apple',
            website: 'http://website.com',
            logo: 'http://logo.com/logo.png'
		};
		const wrapper = shallow(<CompanyInfoDetails data={data}/>);
		const paragraphs = wrapper.find('p');

		expect(paragraphs.at(0).text()).toEqual('Symbol: AA');

		expect(paragraphs.at(1).text()).toEqual('Name: Apple');

		expect(paragraphs.at(2).text()).toEqual('Website:visit');
		expect(paragraphs.at(2).find('a').props()).toEqual({
			href: data.website,
			target: '_blank',
			rel: 'noopener noreferrer',
			children: 'visit'
		});

		expect(paragraphs.at(3).text()).toEqual('Logo:');
		expect(paragraphs.at(3).find('img').props()).toEqual({
			src: data.logo,
			width: 30,
			height: 30,
			alt: 'logo'
		});
	});

	it('should render basic component', () => {
		const data = {
			symbol: 'AA',
            name: 'Apple',
            website: '',
            logo: ''
		};
		const wrapper = shallow(<CompanyInfoDetails data={data}/>);
		const paragraphs = wrapper.find('p');

		expect(paragraphs.at(0).text()).toEqual('Symbol: AA');

		expect(paragraphs.at(1).text()).toEqual('Name: Apple');

		expect(paragraphs.at(2).text()).toEqual('Website:N/A');

		expect(paragraphs.at(3).text()).toEqual('Logo:N/A');
	});
});