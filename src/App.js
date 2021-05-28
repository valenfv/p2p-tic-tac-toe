import React, { useState, useCallback, useEffect } from 'react';
import Board from './components/board/Board'
import { getTicTacToeFormat, determineMatch } from './utils';
import { symbols } from './enums'
import useP2P from './hooks/useP2P';


import TurnControl from './components/control/TurnControl'
import InviteComponent from './components/invite/Invite';
import Circle from './components/icons/Circle'
import Cross from './components/icons/Cross'

import {
  HomeLayout,
  Header,
  Control,
  Game,
  Invite,
} from './styles/HomeStyle'

const getFriendId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('friend');
};

const inviteIcon = (symbol) => {
  if(!symbol) return(<b>TBD</b>);
  if(symbol === symbols.CROSS)
    return(
      <span style={{ width: '24px', height: '24px' }}>
        <Cross width="24px" height="24px" fill="#545454" /> 
      </span>);
  return(
    <span style={{ width: '24px', height: '24px' }}> 
      <Circle width="24px" height="24px" fill="#545454" />
    </span>
  ); 
}

const App = () => {
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
    if(boardState.length === 9 && !match){
      setBoardState([]);
    }else{
      if(match){
        setBoardState([]);
        window.emojisplosion();
      }
      if(match === symbols.CROSS)
        setXScore(prev => prev + 1)
      if(match === symbols.CIRCLE)
        setOScore(prev => prev + 1)
    }
  }, [boardState])

  return (
    <>
      <HomeLayout>
        <Header>
          <h1>P2P Tic Tac Toe</h1>
          <p>
            P2P Tic Tac Toe is a P2P-backend-free game developed in ReactJS 😎 
          </p>
        </Header>
        <Control>
          <TurnControl 
            isTurn={symbol === symbols.CROSS && isTurn || symbol === symbols.CIRCLE && !isTurn}
            RightSymbol={
              <Cross fill={ symbol == symbols.CROSS ? '#14bdac' :'#545454'} />
            } 
            score={xScore}
            body={symbol === symbols.CROSS ? `Your turn` : `Turn's`} />
          <TurnControl  
            isTurn={symbol === symbols.CIRCLE && isTurn || symbol === symbols.CROSS && !isTurn}
            RightSymbol={
              <Circle fill={ symbol == symbols.CIRCLE ? '#14bdac' :'#545454'} />
            } 
            score={oScore}
            body={symbol === symbols.CIRCLE ? `Your turn` : `Turn's`} />
        </Control>
        <Game>
          <Board 
            rows="3" 
            cols="3" 
            width="400px" 
            height="400px" 
            boardState={boardState}
            enabled={isTurn}
            onClick={(row, col) => {
              handleClick(row, col, symbol)
            }} />
        </Game>
        <Invite>
          <InviteComponent 
            myId={peer?.id} 
            status={status}
            symbolIcon={inviteIcon(symbol)}
          />
        </Invite>
      </HomeLayout>
    </>
  );
}

export default App;
