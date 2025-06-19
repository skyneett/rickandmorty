import React from "react";
import "./Header.css";

const Header = ({ onSearch, onSort, sortField, sortDirection }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Rick and Morty App</h1>
        <div className="header-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar personaje..."
              className="search-input"
              onChange={e => onSearch(e.target.value)}
            />
          </div>
          <div className="sort-controls">
            <button 
              onClick={() => onSort('name')} 
              className={`sort-button ${sortField === 'name' ? sortDirection : ''}`}
            >
              Nombre {sortField === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
            </button>
            <button 
              onClick={() => onSort('gender')} 
              className={`sort-button ${sortField === 'gender' ? sortDirection : ''}`}
            >
              Género {sortField === 'gender' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
            </button>
            <button 
              onClick={() => onSort('type')} 
              className={`sort-button ${sortField === 'type' ? sortDirection : ''}`}
            >
              Tipo {sortField === 'type' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
