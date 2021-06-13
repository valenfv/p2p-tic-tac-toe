import React from 'react'
import {
    StyledLink
} from './LinkStyled';
import ReactTooltip from 'react-tooltip';

const Link = React.memo(({
    tooltipText = null,
    children,
    ...other
}) => (
    <>
        { tooltipText && <ReactTooltip place="top" type="dark" effect="solid"/> }
        <StyledLink
            data-tip={tooltipText}
            {...other}
        >
            { children }
        </StyledLink>
    </>
));

export default Link;