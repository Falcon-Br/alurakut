import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 10px;
  max-width: 500px;

  /*
  .profileArea{
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }*/

  @media(min-width: 860px){
      max-width: 1110px;
      display: grid;
      grid-template-areas: 
        "profileArea welcomeArea profileRelationsArea";
      grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;