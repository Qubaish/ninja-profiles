import styled from 'styled-components';

export const StyledWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;

export const StyledImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    .source {
        opacity: 0;
        transition: opacity 1200ms;
    }
    .loaded {
        opacity: 1;
    }
`;