import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Button from '../../client/components/Button';

describe('Button', () => {
    it('Renders button to user', () => {

        const button = shallow(
            <Button/>
        );

        expect(shallowToJson(button)).toMatchSnapshot();
    });
});