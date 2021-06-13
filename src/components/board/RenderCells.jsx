import Cross from '../icons/Cross';
import Circle from '../icons/Circle';
import IconTransition from '../icons/IconTransition';
import { 
    BoardCell,  
} from './BoardStyled';
import { getSymbolInfo } from '../../utils';
import { symbols } from '../../enums';

const AnimationRendering = (props) => {
    let Render = props.symbol ? (
            props.symbol.symbol === symbols.CROSS ? 
                <Cross /> : 
                <Circle />
        ) : null;
    return props?.last ? 
        <IconTransition>
            { Render }
        </IconTransition> : Render;
}


export default (rows, cols, boardState, onClick, enabled) => {
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
                    onClick={() => !symbol && enabled ? onClick(row, col) : null} >
                        <AnimationRendering 
                            symbol={symbol} 
                            last={isAnimated} />
                </BoardCell>
            );
        }
    return cells;
};