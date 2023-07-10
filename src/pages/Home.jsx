import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
import Paginacao from "../components/paginacao/Paginacao";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function Home() {

  //Pegando pokemons da Api.
  const [pokemons, setPokemons] = useState([]);

  //Pegando a quantidade máxima de pokemons na API.
  const [maxPokemons, setMaxPokemons] = useState([]);

  //Setando a página atual que o usuário está.
  const [pageNumber, setPageNumber] = useState(1);

  //Setando o offset ou seja, apartir de qual pokemon que vai começar a mostrar, (paginação).
  const [offset, setOffset] = useState(1);

  //Número máximo de pokemons mostrado na tela.
  const limit = 24;

  const getApiData = () => {
    var endpoints = [];
    for (var i = offset; i < (limit + offset); i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
    return response;
  }

  const maxNumberPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/`)
      .then((res) => setMaxPokemons(res.data));
  }

  useEffect(() => {
    maxNumberPokemons();
  }, []);

  useEffect(() => {
    getApiData();
  }, [offset]);

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setOffset(offset - limit);
    }
  }

  const nextPage = () => {
    if (pageNumber <= maxNumberOfPages) {
      setPageNumber(pageNumber + 1);
      setOffset(offset + limit);
    }
  }

  const maxNumberOfPages = Math.ceil(maxPokemons.count / limit);

  return (
    <>
      <Container sx={{ paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon />

          {pokemons.map((pokemon) => (
            <Grid key={pokemon.data.id} item xs={12} sm={4} md={2}>
              <CardPokemon nome={pokemon.data.name} imagem={pokemon.data.sprites.front_default} tipos={pokemon.data.types} />
            </Grid>
          ))}

          <Grid item xs={12} textAlign="center">
            <Paginacao previousPage={previousPage} nextPage={nextPage} paginaAtual={pageNumber} maxNumberOfPages={maxNumberOfPages} />
          </Grid>
        </Grid>
      </Container>

    </>
  )
}   
