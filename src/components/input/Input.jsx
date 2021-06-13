import React from 'react'
import {
    InputContainer,
    InputTag,
    RightIconContainer,
} from './InputStyled';

const Input = React.memo(({
    RightAddon = null,
    value,
    onChange,
    disabled = false,
    readOnly = false,
    width = '100%',
    ...other
}) => (
    <InputContainer>
        <InputTag 
            onChange={onChange} 
            value={value}
            disabled={disabled}
            readOnly={readOnly}
            width={width}
            {...other}
        />
        <RightIconContainer>
            { RightAddon }
        </RightIconContainer>
    </InputContainer>
));

export default Input;