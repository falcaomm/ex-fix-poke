import React, { useState } from 'react'
import { Card, PokemonName, PokemonType, EvolveButton } from './styles'

const PokemonCard = (props) => {

  const [botao, setBotao] = useState("Evoluir")

  console.log(botao);
  console.log(props.poke);
  console.log(props.poke.evoluido);

  const evoluirPokemon = () => {
    if (props.poke.evoluido === false) {

      setBotao("Evoluir de novo!")

      props.setPoke({
        ...props.poke,
        nome: "Pikachu",
        tipo: "Electric",
        evoluido: true,
        peso: 6,
        cor: 'yellow',
        img: 'https://archives.bulbagarden.net/media/upload/b/b8/025Pikachu_LG.png',
      })

    } else if (props.poke.evoluido === true) {

      setBotao("Recomeçar!")

      props.setPoke({
        ...props.poke,
        nome: "Raichu",
        tipo: "Electric",
        evoluido: "end",
        peso: 30,
        cor: '#fda50f',
        img: 'https://archives.bulbagarden.net/media/upload/8/88/026Raichu.png',
      })

    } else if (props.poke.evoluido === "end") {

      setBotao("Evoluir!")

      props.setPoke({
        ...props.poke,
        nome: "Pichu",
        tipo: "Electric",
        evoluido: false,
        peso: 2,
        cor: '#FFF380',
        img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
      })

    }
  }
  return (
    <Card color={props.poke.cor}>
      <img src={props.poke.img} alt={`Pokemon`} />
      <PokemonName>{props.poke.nome}</PokemonName>
      <PokemonType>{props.poke.tipo}</PokemonType>
      <p>{props.poke.peso}kg</p>


      <EvolveButton onClick={() => evoluirPokemon()}>{botao}</EvolveButton>
    </Card>
  )
}

export default PokemonCard