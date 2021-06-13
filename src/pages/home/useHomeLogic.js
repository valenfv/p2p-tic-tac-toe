import { useEffect, useState, useCallback } from 'react';
import { getTicTacToeFormat, determineMatch } from '../../utils';
import { p2pStatus, symbols } from '../../enums'
import useP2P from '../../hooks/useP2P';

const getFriendId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('friend');
};

const useHomeLogic = () => {
    const [boardState, setBoardState] = useState([])
    const [lastMove, setLastMove] = useState({});
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
  
    const {
      peer,
      status,
      symbol,
      isTurn,
      update,
    } = useP2P(getFriendId(), lastMove);
  
    const handleClick = useCallback(
        (row, col, symbol) => {
          const move = getTicTacToeFormat(row, col, symbol);
          setLastMove(move)
          return setBoardState([...(boardState.concat(move))])
        }
    , [boardState]);
  
    useEffect(() => {
      if(update){
        setBoardState(prev => [...prev.concat(update)]);
      } 
    }, [update])
  
    useEffect(() => {
      const match = determineMatch(boardState);
      setTimeout(() => {
        if(boardState.length === 9 && !match){
          setBoardState([]);
        }else{
          if(match){
            setBoardState([]);
            window.emojisplosion({
              emojiCount: 100,
            });
          }
          if(match === symbols.CROSS)
            setXScore(prev => prev + 1)
          if(match === symbols.CIRCLE)
            setOScore(prev => prev + 1)
        }
      }, 500);
    }, [boardState])

    useEffect(() => {
      if(status === p2pStatus.DISCONNECTED){
        setBoardState([]);
        setXScore(0)
        setOScore(0)
      }
    }, [status]);

    return [
        boardState,
        xScore,
        oScore,
        peer?.id,
        status,
        symbol,
        isTurn,
        !!getFriendId(),
        handleClick,
    ];
}

export { useHomeLogic };