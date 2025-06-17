import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterList from "./components/CharacterList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import './App.css';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [search, setSearch] = useState("");

  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header onSearch={setSearch} />
        <main className="flex-1">
          <CharacterList search={search} />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
