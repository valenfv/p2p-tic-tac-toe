import React from 'react';
import Cross from '../icons/Cross';
import Circle from '../icons/Circle';
import IconTransition from '../icons/IconTransition';
import { 
    BoardCell,  
} from './BoardStyled';
import { getSymbolInfo } from '../../utils';
import { symbols } from '../../enums';

const AnimationRendering = React.memo((props) => {
    let Render = props.symbol ? (
            props.symbol.symbol === symbols.CROSS ? 
                <Cross /> : 
                <Circle />
        ) : null;
    return props?.last ? 
        <IconTransition>
            { Render }
        </IconTransition> : Render;
});

const getAriaLabel = (cellSymbol, playerSymbol, row, col) => {
    if(!cellSymbol && playerSymbol)
        return `play a ${playerSymbol === symbols.CIRCLE ? `circle` : `cross`} on row ${row + 1} and column ${col + 1}`;
    if(!playerSymbol)
        return `board cell, waiting for a friend to connect`;
    return `cell not available, there is currently a ${playerSymbol === symbols.CIRCLE ? `circle` : `cross`} in there`;
}

const Cells = React.memo(({ 
    rows, 
    cols, 
    boardState, 
    onClick, 
    enabled,
    playerSymbol
}) => {
    let cells = [];
    for(let row = 1; row <= rows; row++)
        for(let col = 1; col <= cols; col++){
            const { symbol, isAnimated } = getSymbolInfo(row, col, boardState);
            cells.push(
                <BoardCell 
                    data-row={row} 
                    data-col={col} 
                    key={cells.length + 1} 
                    tabIndex="0"
                    role="button"
                    enabled={enabled}
                    aria-disabled={!enabled}
                    aria-label={getAriaLabel(symbol, playerSymbol, row, col)}
                    onClick={() => !symbol && enabled ? onClick(row, col) : null} >
                        <AnimationRendering 
                            symbol={symbol} 
                            last={isAnimated} />
                </BoardCell>
            );
        }
    return cells;
});

export default Cells;