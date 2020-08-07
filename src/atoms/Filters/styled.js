import styled from 'styled-components';

export const StyledFilterWrapper = styled.div`
    min-height: 5rem;
    background: #fff;
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #FCFDFF;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
`;

export const StyledInput = styled.input`
    display: block;
    margin: 0;
    padding: 0.8rem 0.8rem;
    color: inherit;
    height: 50px;
    width: 48%;
    font-family: inherit;
    font-size: 1rem;
    font-weight: inherit;
    line-height: 1.8;
    border: 1px solid #dcdde0;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;
    box-sizing: border-box;
    :focus {
        outline: none;
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
    }
`;

export const StyledSelect = styled.select`
    height: 5rem;
    width: 48%;
    border: none;
    padding: 1rem;
    border: 1px solid #dcdde0;
    border-radius: 0.3rem;
    box-shadow: 1px 2px 3px rgba(220,221,224,0.6);
    :focus {
        outline: none;
    }
`;