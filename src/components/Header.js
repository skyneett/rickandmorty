import React from "react";

const Header = ({ onSearch }) => {
  return (
    <header style={{ background: '#111827', color: 'white', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Rick and Morty App</h1>
      <input
        type="text"
        placeholder="Buscar personaje..."
        style={{ padding: '0.5rem', borderRadius: '0.5rem', width: '100%', maxWidth: 320, color: '#111827', border: '1px solid #e5e7eb' }}
        onChange={e => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
