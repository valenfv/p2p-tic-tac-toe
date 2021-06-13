import React from 'react'
import {
    ButtonStyled,
    IconButton,
} from './ButtonStyled';
import ReactTooltip from 'react-tooltip';


const Button = React.memo(({
    Icon,
    title = '',
    tooltipText = null,
    onClick = () => null
}) => (
    <>
        { tooltipText && <ReactTooltip place="top" type="dark" effect="solid"/> }
        <IconButton 
            data-tip={tooltipText}
            title={title}
            onClick={onClick}>
            { Icon }
        </IconButton>
    </>
));

export default Button;