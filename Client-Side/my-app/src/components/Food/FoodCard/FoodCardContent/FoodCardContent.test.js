import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FoodCardContent from './FoodCardContent';
import Toolbar from '../../../Navigation/Toolbar/Toolbar';

configure({adapter: new Adapter()});

describe('<FoodCard/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FoodCardContent />);
    });

    it('should no render <Toolbar/>', () => {

        expect(wrapper.find(Toolbar)).toHaveLength(0);
    });
    it('should render show content button', () => {
        expect(wrapper.find(Toolbar)).toHaveLength(0);
    });
});