import { useMutation } from "react-query";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";

export function useUpdateSinglePokemon(id: string) {
  return useMutation(
    (values: Pokemon) => axios.put(`/api/pokemon/${id}/`, values),
    {
      onError: (error) => {
        alert("Something went wrong");
        console.error("Error:", error);
      },
    }
  );
}
