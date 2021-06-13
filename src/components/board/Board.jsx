import React, { useMemo } from 'react'
import renderCells from './RenderCells';
import { 
    BoardTable, 
    BoardLayout 
} from './BoardStyled';

const Board = ({
    onClick = () => {},
    rows = 3,
    cols = 3,
    width,
    height,
    boardState,
    enabled = false,
}) => {
    const renderedCells = useMemo(() => 
        renderCells(rows, cols, boardState, onClick, enabled), 
    [rows, cols, boardState, onClick, enabled]);

    return (
        <BoardTable width={width} height={height}>
            <BoardLayout rows={rows} cols={cols}>
                { renderedCells }
            </BoardLayout>
        </BoardTable>
    )
}

export default Board
