import styled from 'styled-components'

const InviteContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background: #FFF;
    width: 100%;
    gap: 10px;
`;

const LabelValueContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: ${prop => prop.flexGrow};
`;

export {
    InviteContainer,
    LabelValueContainer,
};