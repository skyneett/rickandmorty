import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "./Card";
import CharacterImage from "./CharacterImage";
import CharacterText from "./CharacterText";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

const CharacterList = ({ search }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: search },
  });

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">Error al cargar personajes</p>;

  return (
    <div className="character-list">
      {data?.characters?.results?.map((char) => (
        <Card key={char.id}>
          <CharacterImage src={char.image} alt={char.name} />
          <CharacterText name={char.name} species={char.species} status={char.status} />
        </Card>
      ))}
    </div>
  );
};

export default CharacterList;
