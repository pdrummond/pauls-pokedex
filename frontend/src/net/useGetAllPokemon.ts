import axios from "axios";
import { usePaginatedQuery } from "react-query";
import { Pokemon } from "../types/Pokemon";

export interface PaginatedResultSet {
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

const PAGE_LIMIT = 30;

export function useGetAllPokemon(page: number, searchText: string) {
  return usePaginatedQuery<PaginatedResultSet, Error>(
    ["all-pokemon", page, searchText],
    getAllPokemon
  );
}

async function getAllPokemon(k = 0, page = 0, searchText = "") {
  const response = await axios.get(
    `/api/pokemon?search=${searchText}&limit=${PAGE_LIMIT}&offset=${
      page * PAGE_LIMIT
    }&page=${page}`
  );
  return response.data;
}
