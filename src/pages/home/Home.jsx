import React from 'react';
import Board from '../../components/board/Board'
import { symbols } from '../../enums'
import TurnControl from '../../components/control/TurnControl'
import InviteComponent from '../../components/invite/Invite';
import Circle from '../../components/icons/Circle'
import Cross from '../../components/icons/Cross'
import { useHomeLogic } from './useHomeLogic';

import {
  HomeLayout,
  Header,
  Control,
  Game,
  Invite,
} from './HomeStyle'

const InviteIcon = React.memo(({ symbol }) => {
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
});

const Home = () => {
  const [
    boardState,
    xScore,
    oScore,
    peerId,
    status,
    symbol,
    isTurn,
    invited,
    handleClick,
] = useHomeLogic();

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
            invited={invited} 
            myId={peerId} 
            status={status}
            SymbolIcon={<InviteIcon symbol={symbol} />}
          />
        </Invite>
      </HomeLayout>
    </>
  );
}

export default React.memo(Home);
