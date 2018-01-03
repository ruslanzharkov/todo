import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import AddForm from '../../client/components/AddForm';
import Button from '../../client/components/Button';
import { configure } from 'enzyme';

describe('AddForm', () => {
    configure({ adapter: new Adapter() });
   it('Render Form', () => {
           const wrapper = shallow(
               <AddForm />
           );
           expect(wrapper.find('h1').text()).toBe('ToDo application');
           expect(wrapper.find('input').length).toBe(1);
           expect(wrapper.contains(<Button />)).toBe(true);
   });
});