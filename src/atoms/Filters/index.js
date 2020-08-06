import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterWrapper, StyledInput, StyledSelect} from './styled';

export default function Filters({cities, onNameChange, onLocationSelect}){
    return (
        <StyledFilterWrapper>
            <StyledInput data-testid="input" placeholder="Name e.g John" name="name" onChange={onNameChange}/>
            <StyledSelect data-testid="select" name="city" onChange={onLocationSelect}>
                <option value="">Filter by Offices</option>
                {cities.map((c, i) => (<option value={c} key={i}>{c}</option>))}
            </StyledSelect>
        </StyledFilterWrapper>
    );
}

Filters.propTypes = {
    cities: PropTypes.array,
    onNameChange: PropTypes.func,
    onLocationSelect: PropTypes.func,
};