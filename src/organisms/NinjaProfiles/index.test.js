import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import NinjaProfiles from './index';

const mockProfile = [{
    name: "Simon",
    office: "LUND",
}, {
    name: "Lint",
    office: "LUND",
}, {
    name: 'john',
    office: 'Stockholm'
}];


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]),
    })
);
describe('<NinjaProfiles />', () => {
    beforeEach(() => {
        fetch.mockClear();
    });
    it('checking snapshot', async () => {
        const { asFragment } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => asFragment());
        expect(elem).toMatchSnapshot();
    });
    it('checking records not found', async() => {
        const { getByText } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByText(/No Records Found/i));
        expect(elem).toBeInTheDocument();
    });
    it('render profiles with correct quantity', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([...mockProfile, ...mockProfile]),
            })
        );
        const { getByTestId } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByTestId('profile-wrapper'));
        expect(elem.children).toHaveLength(6);
    });
    it('search profiles with incorrect name', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([...mockProfile]),
            })
        );
        const { getByTestId, getByText } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByTestId('input'));
        fireEvent.change(elem, { target: { value: 'SimonMock' } })
        const msg = await waitForElement(() => getByText(/No Records Found/i));
        expect(msg).toBeInTheDocument();
    });
    it('search profiles with correct name', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([...mockProfile]),
            })
        );
        const { getByTestId, getByText } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByTestId('input'));
        fireEvent.change(elem, { target: { value: 'Lint' } })
        const msg = await waitForElement(() => getByText(/Lint/i));
        expect(msg).toBeInTheDocument();
    });
    it('search profiles with correct offic location', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([...mockProfile]),
            })
        );
        const { getByTestId } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByTestId('select'));
        fireEvent.change(elem, { target: { value: 'LUND' } })
        const profiles = await waitForElement(() => getByTestId('profile-wrapper'));
        expect(profiles.children).toHaveLength(2);
    });
    it('search profiles with empty office location', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([...mockProfile]),
            })
        );
        const { getByTestId } = render(<NinjaProfiles />);
        const elem = await waitForElement(() => getByTestId('select'));
        fireEvent.change(elem, { target: { value: "" } })
        const profiles = await waitForElement(() => getByTestId('profile-wrapper'));
        expect(profiles.children).toHaveLength(3);
    });
});