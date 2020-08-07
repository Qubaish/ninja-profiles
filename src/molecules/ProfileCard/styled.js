import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/breakpoints';
import { flipInX } from "react-animations";

const FlipInXAnimation = keyframes`${flipInX}`;

export const StyledProfileCard = styled.div`
    width: 80%;
    padding: 0.5rem;
    background: #fff;
    animation: ${props => props.sec}s ${FlipInXAnimation};
    transition: all .3s ease;
    border: 1px solid #dcdde0;
    box-shadow: 1px 2px 3px rgba(220,221,224,0.6);
    border-radius: 0.3rem;
    box-sizing: border-box;

    :hover {
        transform: scale(1.06);
    }
    @media ${device.sm} { 
        width: 45%;
    }
    @media ${device.lg} { 
        width: 23%;
    }
`;

export const StyledContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
    a {
        color: #000;
        padding-right: 0.5rem;
    }
    h2 {
        margin: 0;
        font-size: 1.4rem;
    }
    p {
        font-size: 1.4rem;
        margin-top: 0.3rem;
    }
`;

export const StyledPersonalDetails = styled.div``;