import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export default styled.span`
    opacity: 0;
    animation: ${animation} 1s forwards;
`;
