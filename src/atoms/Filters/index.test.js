import React from 'react';
import { render } from '@testing-library/react';
import Filters from './index';

describe('<Filters/>', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<Filters cities={['lund']} onNameChange={jest.fn()} onLocationSelect={jest.fn()}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('shoul render with correct data', () => {
        const { getByTestId } = render(<Filters cities={['lund']} onNameChange={jest.fn()} onLocationSelect={jest.fn()}/>);
        const elem = getByTestId('input');
        const selectElem = getByTestId('select');
        expect(elem.name).toBe('name');
        console.log(selectElem.children);
        expect(selectElem.children).toHaveLength(2);
        expect(selectElem.children[1].innerHTML).toBe('lund');
    });
})