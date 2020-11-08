import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRole } from "../../app/AppContext";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { SwitchRoleButton } from "../../components/SwitchRoleButton/SwitchRoleButton";
import { useGetAllPokemon } from "../../net/useGetAllPokemon";
import { Pokemon } from "../../types/Pokemon";
import { usePageParam } from "../../utils/usePageParam";
import {
  Header,
  HeaderButton,
  HeaderTitle,
  Grid,
  HeaderCreateButton,
  HeaderSearchInput,
} from "./PokedexPage.styles";

export function PokedexPage() {
  const [searchText, setSearchText] = React.useState("");
  const { role } = useRole();
  const history = useHistory();
  const page = usePageParam();

  const { isError, error, resolvedData, latestData } = useGetAllPokemon(
    page,
    searchText
  );

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <div>
      <Header>
        <HeaderButton
          onClick={() => history.push(`/pokedex/page/${page - 1}`)}
          disabled={!latestData?.previous}
        >
          Previous
        </HeaderButton>
        <HeaderSearchInput
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          disabled={page !== 0}
        />
        <HeaderTitle>
          <Link to="/">Paul's Pokedex</Link>
          <SwitchRoleButton />
        </HeaderTitle>

        <HeaderButton
          onClick={() => history.push(`/pokedex/page/${page + 1}`)}
          disabled={!latestData?.next}
        >
          Next
        </HeaderButton>
        <HeaderCreateButton
          onClick={() => history.push("/pokemon/create")}
          disabled={role !== "admin"}
        >
          Create
        </HeaderCreateButton>
      </Header>
      <Grid>
        {resolvedData?.results?.map((pokemon: Pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
        {resolvedData?.results.length === 0 && <p>No Pokemon Found</p>}
      </Grid>
    </div>
  );
}
