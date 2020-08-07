import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from './index';

const mockProfile = {
    "name": "Simon",
    "office": "LUND",
    "gitHub": "simonpal",
    "twitter": "simonpal",
    "linkedIn": "/in/test/",
    "imagePortraitUrl": "img",
}

describe('<ProfileCard />', () => {
    it('checking snapshot', () => {
        const { asFragment } = render(<ProfileCard className="card" profile={mockProfile}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders profile office text', () => {
        const { getByText } = render(<ProfileCard className="card" profile={mockProfile}/>);
        const linkElement = getByText(/LUND/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('renders profile name', () => {
        const { getByText } = render(<ProfileCard className="card" profile={mockProfile}/>);
        const elem = getByText(/Simon/i);
        expect(elem).toBeInTheDocument();
    });
});

