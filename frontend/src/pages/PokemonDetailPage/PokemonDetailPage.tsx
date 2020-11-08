import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRole } from "../../app/AppContext";
import { useDeleteSinglePokemon } from "../../net/useDeleteSinglePokemon";
import { useGetSinglePokemon } from "../../net/useGetSinglePokemon";

import {
  AdminButtons,
  Body,
  Header,
  HeaderButton,
  Message,
  Name,
  NationalNumber,
} from "./PokemonDetailPage.styles";

export function PokemonDetailPage() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { role } = useRole();
  const { isLoading, data } = useGetSinglePokemon(id);
  const [deletePokemonMutation] = useDeleteSinglePokemon(id);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Header>
        <HeaderButton onClick={() => history.push("/")}>Home</HeaderButton>
      </Header>
      <Body>
        <Name>{data.name}</Name>
        <NationalNumber>National Number: {data.number} </NationalNumber>
        <img width="200px" src={data.image} alt={data.name} />
        <Message>TODO: Add more Pokemon stats here</Message>
        {role === "admin" && (
          <AdminButtons>
            <button onClick={() => history.push(`/pokemon/${id}/edit`)}>
              Edit Pokemon
            </button>
            <button
              onClick={async (e) => {
                e.preventDefault();
                if (
                  window.confirm(`Are you sure you want to kill ${data.name}`)
                ) {
                  await deletePokemonMutation();
                  history.goBack();
                }
              }}
            >
              Kill Pokemon
            </button>
          </AdminButtons>
        )}
      </Body>
    </div>
  );
}
