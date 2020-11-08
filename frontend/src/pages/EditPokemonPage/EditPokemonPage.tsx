import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form } from "./EditPokemonPage.styles";
import { useRole } from "../../app/AppContext";
import { Pokemon } from "../../types/Pokemon";
import { useGetSinglePokemon } from "../../net/useGetSinglePokemon";
import { useUpdateSinglePokemon } from "../../net/useUpdateSinglePokemon";

export function EditPokemonPage() {
  const history = useHistory();
  const { role } = useRole();
  const { id } = useParams<{ id: string }>();
  const [values, setValues] = React.useState<Pokemon>({
    name: "",
    number: 0,
    image: "",
  });

  const { data, isLoading } = useGetSinglePokemon(id);

  React.useEffect(() => {
    if (!isLoading) {
      setValues(data);
    }
  }, [data, isLoading]);

  const setValue = (field: string, value: string | number) =>
    setValues((old: Pokemon) => ({ ...old, [field]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updatePokemonMutation(values);
    history.push(`/pokemon/${id}`);
  };

  const [updatePokemonMutation] = useUpdateSinglePokemon(id);

  if (role !== "admin") {
    return <p>Users do not have permission to edit the Pokedex</p>;
  } else {
    return (
      <Form onSubmit={handleSubmit}>
        <h1>Edit Pokemon</h1>
        <label htmlFor="name">Title</label>
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={(e) => setValue("name", e.target.value)}
            required
          />
        </div>
        <br />
        <label htmlFor="number">Number</label>
        <div>
          <input
            type="number"
            name="number"
            value={values.number}
            onChange={(e) => setValue("number", e.target.value)}
            required
          />
        </div>
        <br />
        <label htmlFor="image">Image</label>
        <div>
          <input
            type="text"
            name="image"
            value={values.image}
            onChange={(e) => setValue("image", e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Update Pokemon</button>
      </Form>
    );
  }
}
