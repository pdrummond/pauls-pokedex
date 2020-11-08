import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form } from "./CreatePokemonPage.styles";
import { Pokemon } from "../../types/Pokemon";

export function CreatePokemonPage() {
  const history = useHistory();
  const [values, setValues] = React.useState<Pokemon>({
    id: 0,
    name: "",
    number: 0,
    image: "",
  });

  const setValue = (field: string, value: string | number) =>
    setValues((old: Pokemon) => ({ ...old, [field]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPokemonMutation(values);
    history.push("/");
  };

  const [createPokemonMutation] = useMutation(
    (values: Pokemon) => axios.post("/api/pokemon/", values),
    {
      onError: (error) => {
        alert("Something went wrong");
        console.error("Error:", error);
      },
    }
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create New Pokemon</h1>
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
      <button type="submit">Create Pokemon</button>
    </Form>
  );
}
