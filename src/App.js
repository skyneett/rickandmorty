import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterList from "./components/CharacterList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Header 
          onSearch={setSearch}
          onSort={handleSort}
          sortField={sortField}
          sortDirection={sortDirection}
        />
        <main className="main-content">
          <CharacterList 
            search={search}
            sortField={sortField}
            sortDirection={sortDirection}
          />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
