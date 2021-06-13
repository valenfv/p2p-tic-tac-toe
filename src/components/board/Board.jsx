import React from 'react'
import Cells from './Cells';
import { 
    BoardTable, 
    BoardLayout 
} from './BoardStyled';

const Board = React.memo(({
    onClick = () => {},
    rows = 3,
    cols = 3,
    width,
    height,
    boardState,
    enabled = false,
    playerSymbol,
}) => (
    <BoardTable width={width} height={height}>
        <BoardLayout rows={rows} cols={cols} aria-live="polite">
            <Cells
                rows={rows}
                cols={cols}
                boardState={boardState}
                onClick={onClick}
                enabled={enabled}
                playerSymbol={playerSymbol}
            />
        </BoardLayout>
    </BoardTable>
));

export default Board
