import React from 'react'
import {
    InputContainer,
    InputTag,
    RightIconContainer,
} from './InputStyle';

const Input = ({
    RightAddon = null,
    value,
    onChange,
    disabled = false,
    readOnly = false,
    width = '100%',
}) => {
    return (
        <InputContainer>
            <InputTag 
                onChange={onChange} 
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                width={width}
            />
            <RightIconContainer>
                { RightAddon }
            </RightIconContainer>
        </InputContainer>
    )
}

export default Input;