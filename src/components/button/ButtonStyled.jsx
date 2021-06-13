import styled from 'styled-components';

const ButtonStyled = styled.button`
    box-sizing: border-box;
    height: 30px;
    background: transparent;
    border: none;
    padding: 0px;
`;

const IconButton = styled(ButtonStyled)`
    width: 30px;
    padding: 5px;
    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
    &:active {
        background: rgba(0, 0, 0, 0.20);
    }
`;

export {
    ButtonStyled,
    IconButton,
};