import styled, { keyframes } from 'styled-components'

const Card = styled.span`
    background: #FFF;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    border-radius: 3px;
    margin: 5px;
    width: 250px;
    ${({ isTurn }) => isTurn && `box-shadow: 0 8px 6px -6px black;`}
`;

const Icon = styled.span`
    width: 24px;
    height: 24px;
    flex-grow: 1;
`;

const TurnAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Body = styled.span`
    margin-left: 10px;
    flex-grow: 10;
    animation: ${TurnAnimation} 1s alternate infinite;
`;

const Score = styled.span`
    margin-left: 10px;
    font-weight: bold;
    flex-grow: 1;
`;

export {
    Card,
    Icon,
    Body,
    Score,
};