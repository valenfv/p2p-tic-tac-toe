import Cross from './components/icons/Cross';
import { symbols } from './enums';

const getTicTacToeFormat = (row, col, symbol) => ({
    symbol,
    position: {
        row,
        col,
    } 
});

const getSymbolInfo = (row, col, boardState) => ({
    symbol: boardState.find(state => 
            state?.position?.row === row && 
            state?.position?.col === col
        ),
    isAnimated: boardState.findIndex(state => 
            state?.position?.row === row && 
            state?.position?.col === col) 
        === boardState.length - 1,
});

const isWinner = (symbol, board) => {
    if(board){
        return  (board[0][0]?.symbol?.symbol === symbol &&
                board[0][1]?.symbol?.symbol === symbol &&
                board[0][2]?.symbol?.symbol === symbol) ||

                (board[1][0]?.symbol?.symbol === symbol &&
                board[1][1]?.symbol?.symbol === symbol &&
                board[1][2]?.symbol?.symbol === symbol) ||

                (board[2][0]?.symbol?.symbol === symbol &&
                board[2][1]?.symbol?.symbol === symbol &&
                board[2][2]?.symbol?.symbol === symbol) ||

                (board[0][0]?.symbol?.symbol === symbol &&
                board[1][0]?.symbol?.symbol === symbol &&
                board[2][0]?.symbol?.symbol === symbol) ||

                (board[0][1]?.symbol?.symbol === symbol &&
                board[1][1]?.symbol?.symbol === symbol &&
                board[2][1]?.symbol?.symbol === symbol) ||

                (board[0][2]?.symbol?.symbol === symbol &&
                board[1][2]?.symbol?.symbol === symbol &&
                board[2][2]?.symbol?.symbol === symbol) ||

                (board[0][0]?.symbol?.symbol === symbol &&
                board[1][1]?.symbol?.symbol === symbol &&
                board[2][2]?.symbol?.symbol === symbol);
    }

};

const determineMatch = (boardState) => {
    let board = Array(3).fill().map(() => Array(3).fill()); 
    for(let row = 1; row <= 3; row++)
        for(let col = 1; col <= 3; col++){
            board[row - 1][col - 1] = getSymbolInfo(row, col, boardState);
        }
    console.log("ESTE ES EL BOARD: ", board)
    const crossWinner =  isWinner(symbols.CROSS, board);
    const circleWinner =  isWinner(symbols.CIRCLE, board);
    
    if(!crossWinner && !circleWinner)
        return undefined;
    return crossWinner ? symbols.CROSS : symbols.CIRCLE;
};

export {
    getTicTacToeFormat,
    getSymbolInfo,
    determineMatch,
};