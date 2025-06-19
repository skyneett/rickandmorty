import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "./Card";
import CharacterImage from "./CharacterImage";
import CharacterText from "./CharacterText";
import "./CharacterList.css";

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
        gender
        type
      }
    }
  }
`;

const CharacterList = ({ search, sortField, sortDirection }) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: search, page },
  });

  // Reset page and characters when search changes
  useEffect(() => {
    setPage(1);
    setCharacters([]);
  }, [search]);

  // Update characters when new data arrives
  useEffect(() => {
    if (data?.characters?.results) {
      if (page === 1) {
        setCharacters(data.characters.results);
      } else {
        setCharacters(prev => [...prev, ...data.characters.results]);
      }
    }
  }, [data, page]);

  const sortedCharacters = React.useMemo(() => {
    if (!characters.length) return [];
    
    let sorted = [...characters];
    if (sortField) {
      sorted.sort((a, b) => {
        const valueA = (a[sortField] || '').toString().toLowerCase();
        const valueB = (b[sortField] || '').toString().toLowerCase();
        return sortDirection === 'asc' 
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      });
    }
    return sorted;
  }, [characters, sortField, sortDirection]);

  if (error) {
    console.error('Error fetching data:', error);
    return <p className="error-message">Error al cargar personajes: {error.message}</p>;
  }

  return (
    <div className="character-list-container">
      <div className="character-grid">
        {sortedCharacters.map((char) => (
          <Card key={char.id}>
            <CharacterImage src={char.image} alt={char.name} />
            <CharacterText 
              name={char.name}
              species={char.species}
              status={char.status}
              gender={char.gender}
              type={char.type || 'Desconocido'}
            />
          </Card>
        ))}
      </div>
      
      {loading && <div className="loading">Cargando personajes...</div>}
      
      {!loading && data?.characters?.info?.next && (
        <button 
          className="load-more-button"
          onClick={() => setPage(p => p + 1)}
        >
          Cargar más personajes
        </button>
      )}
    </div>
  );
};

export default CharacterList;
