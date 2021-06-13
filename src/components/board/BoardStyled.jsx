import styled from 'styled-components';

const BoardTable = styled.div.attrs(props => ({
    width: props.width || '300px',
    height: props.height || '300px',
}))`
    background: rgba(0, 0, 0, 0.12);
    width: ${props => props.width};
    height: ${props => props.height};
`;

const BoardCell = styled.button`
    width: 100%;
    height: 100%;
    background: #14bdac;
    border: none;
    padding: 3px;
    box-sizing: border-box;
    font-family: none !important;
    cursor: ${prop => prop.enabled ? `normal` : `wait`};
`;

const BoardLayout = styled.div.attrs(props => ({
    rows: props.rows || 3,
    cols: props.cols || 3
}))`
    display: grid;
    grid-template-columns: repeat(${props => props.cols}, 1fr);
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    grid-gap: 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

export {
    BoardTable,
    BoardCell,
    BoardLayout
};

