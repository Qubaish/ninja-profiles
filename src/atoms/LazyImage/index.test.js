import React from 'react';
import { render } from '@testing-library/react';
import LazyImage from './index';

describe('<LaxyImage />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render( <LazyImage
            className="avatar"
            aspectRatio={1 / 1}
            lqip=""
            src="http://random.jpg"
            alt="ninja profile"
        />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render with correct data', () => {
        const { getByRole, getByTestId } = render( <LazyImage
            className="avatar"
            aspectRatio={1 / 1}
            lqip=""
            src="http://random.jpg/"
            alt="ninja profile"
        />);
        const elem = getByRole('img');
        const aspectElem = getByTestId('ratio');
        expect(aspectElem).toHaveStyle(`padding-bottom : ${100 / 1/1}%`);
        expect(elem).toBeTruthy()
        expect(elem.alt).toBe('ninja profile');
        expect(elem.src).toBe('http://random.jpg/');
    });
});