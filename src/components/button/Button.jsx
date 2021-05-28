import React from 'react'
import {
    ButtonStyled,
    IconButton,
} from './ButtonStyle';

const Button = ({
    icon,
    title = '',
    onClick = () => null
}) => {
    return (
        <IconButton 
            title={title}
            onClick={onClick}>
            { icon }
        </IconButton>
    )
}

export default Button;