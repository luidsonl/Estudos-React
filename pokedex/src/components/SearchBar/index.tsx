import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('s') || '');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchParams({ s: value });
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Buscar Pokémon"
    />
  );
};

export default SearchBar;