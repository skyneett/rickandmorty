import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        species
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.characters?.results?.map((char) => (
        <div key={char.id} className="bg-white rounded shadow p-4 flex flex-col items-center">
          <img src={char.image} alt={char.name} className="w-32 h-32 object-cover rounded-full mb-2" />
          <h2 className="font-bold text-lg">{char.name}</h2>
          <p className="text-gray-600">{char.species}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
