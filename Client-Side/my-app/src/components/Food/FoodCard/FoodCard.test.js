import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { FoodCard } from './FoodCard';
import FoodCardContent from './FoodCardContent/FoodCardContent';

configure({adapter: new Adapter()});

describe('<FoodCard/>', () => {
    // it('should render show content button', () => {
    //     const wrapper = shallow(<FoodCard />);
    //     expect(wrapper.find(FoodCardContent)).toHaveLength(1);
    // });
});