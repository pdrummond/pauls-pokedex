import { useMutation } from "react-query";
import axios from "axios";

export function useDeleteSinglePokemon(id: string) {
  return useMutation(() => axios.delete(`/api/pokemon/${id}/`), {
    onError: (error) => {
      alert("Something went wrong");
      console.error("Error:", error);
    },
  });
}
