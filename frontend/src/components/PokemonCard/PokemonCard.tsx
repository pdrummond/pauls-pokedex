import React from "react";
import { NavLink } from "react-router-dom";
import { Pokemon } from "../../types/Pokemon";
import { Card, Title, Image } from "./PokemonCard.styles";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card>
      <NavLink to={`/pokemon/${pokemon.id}`}>
        <Image src={`${pokemon.image}`} />
        <Title>{pokemon.name}</Title>
      </NavLink>
    </Card>
  );
}
