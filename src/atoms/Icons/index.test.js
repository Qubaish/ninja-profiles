import React from 'react';
import { render } from '@testing-library/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Icons from './index';

const mockIcons = [{icon: faLinkedin, name: 'linkedin', href: 'http://www.helloworld.com'}];

describe('<Icons />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<Icons icons={mockIcons} target="_blank"/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render icon with correct data', () => {
        const { getByTestId } = render(<Icons icons={mockIcons} target="_blank"/>);
        const elem = getByTestId('icon-0');
        expect(elem.target).toBe('_blank');
        expect(elem.href).toBe('http://www.helloworld.com/');
    });
    it('should check number of icons to rendered', () => {
        const data = [...mockIcons, ...mockIcons];
        const { getAllByTestId } = render(<Icons icons={data} target="_blank"/>);
        const elems = getAllByTestId(/icon/i);
        expect(elems).toHaveLength(2)

    });

});