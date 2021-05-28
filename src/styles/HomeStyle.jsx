import styled from 'styled-components'

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: auto minmax(400px, 640px) auto;
  grid-template-rows: auto auto minmax(400px, 4fr) auto;
  grid-template-areas: 
    ". header ." 
    ". config ." 
    ". game ."
    ". invite .";
  row-gap: 20px;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled.div`
  grid-area: header;
  border-bottom: 3px dashed rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
`; 

const Control = styled.div`
  grid-area: config;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
`;

const Game = styled.div`
  grid-area: game;
`;

const Invite = styled.div`
  grid-area: invite;
  width: 100%;
`;

export {
    HomeLayout,
    Header,
    Control,
    Game,
    Invite,
}