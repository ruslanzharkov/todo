import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../client/components/Button';

describe('Button', () => {
    it('Renders button to user', () => {

        const button = renderer.create(
            <Button/>
        );

        const json = button.toJSON();
        expect(json).toMatchSnapshot();
    });
});