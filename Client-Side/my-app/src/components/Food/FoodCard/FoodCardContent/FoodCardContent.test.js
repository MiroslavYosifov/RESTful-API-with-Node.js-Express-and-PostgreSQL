import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FoodCardContent from './FoodCardContent';
import Toolbar from '../../../Navigation/Toolbar/Toolbar';

configure({adapter: new Adapter()});

describe('<FoodCard/>', () => {
    it('should render show content button', () => {
        const wrapper = shallow(<FoodCardContent />);
        expect(wrapper.find(Toolbar)).toHaveLength(0);
    });
});