import React from 'react'
import {
    InputContainer,
    InputTag,
    RightIconContainer,
} from './InputStyle';

const Input = ({
    rightAddon = null,
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
                { rightAddon }
            </RightIconContainer>
        </InputContainer>
    )
}

export default Input;