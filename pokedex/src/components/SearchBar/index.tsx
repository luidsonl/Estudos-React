import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './style.css'

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('s') || '');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    setSearchParams({ s: searchTerm });
    navigate(`/search/${searchTerm}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="Buscar Pokémon"
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;