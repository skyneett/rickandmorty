import React from "react";

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-2xl font-bold mb-2 md:mb-0">Rick and Morty App</h1>
      <input
        type="text"
        placeholder="Buscar personaje..."
        className="p-2 rounded text-black w-full md:w-64"
        onChange={e => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
