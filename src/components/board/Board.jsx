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
}) => (
    <BoardTable width={width} height={height}>
        <BoardLayout rows={rows} cols={cols}>
            <Cells
                rows={rows}
                cols={cols}
                boardState={boardState}
                onClick={onClick}
                enabled={enabled}
            />
        </BoardLayout>
    </BoardTable>
));

export default Board
