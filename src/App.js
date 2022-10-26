import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
  const [pokemon, setPokemon] = useState({
    nome: "Pichu",
    tipo: "Electric",
    evoluido: false,
    peso: 2,
    cor: '#FFF380',
    img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  return (
  <>
    <GlobalStyles />
    <FlexContainer>
      <PokemonCard  poke={pokemon} setPoke={setPokemon}/>
    </FlexContainer>
  </>

  );
}

export default App;
