import styled from 'styled-components';

const InputContainer = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid;
    border-radius: 3px;
    box-sizing: border-box;
    height: 30px;
    width: 100%;
`;

const InputTag = styled.input`
    border: none;
    outline: none;
    font-family: Poppins;
    width: ${props => props.width};
`;

const RightIconContainer = styled.span`
    box-sizing: border-box;
`;

export {
    InputContainer,
    InputTag,
    RightIconContainer,
}