import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

export const StyledContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media ${device.md} { 
        width: 80%;
    }
`;

export const StyledProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    justify-content: space-around;
    .profile-card {
        margin-bottom: 1.8rem;
    }
`;
