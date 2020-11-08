import { useQuery } from "react-query";
import axios from "axios";

export function useGetSinglePokemon(id: string) {
  return useQuery(["pokemon", id], getSinglePokemon);
}

async function getSinglePokemon(key: string, id: string) {
  const response = await axios.get(`/api/pokemon/${id}`);
  return response.data;
}
