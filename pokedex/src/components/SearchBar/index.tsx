import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar Pokémon"
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default SearchBar;