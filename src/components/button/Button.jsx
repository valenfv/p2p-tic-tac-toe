import React from 'react'
import {
    ButtonStyled,
    IconButton,
} from './ButtonStyle';
import ReactTooltip from 'react-tooltip';


const Button = ({
    Icon,
    title = '',
    tooltipText = null,
    onClick = () => null
}) => {
    return (
        <>
            { tooltipText && <ReactTooltip place="top" type="dark" effect="solid"/> }
            <IconButton 
                data-tip={tooltipText}
                title={title}
                onClick={onClick}>
                { Icon }
            </IconButton>
        </>
    )
}

export default Button;