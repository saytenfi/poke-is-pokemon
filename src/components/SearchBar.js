import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [pokemonName, setpokemonName] = useState('');

  return (
    <InputGroup className="mb-3 searchBar">
      <FormControl
        placeholder="Pokémon's name"
        aria-label="Pokémon's name"
        aria-describedby="basic-addon2"
        onChange={(event) => {
          setpokemonName(event.target.value);
          console.log(pokemonName);
        }}
      />
      <InputGroup.Append>
        <Link to={`/${pokemonName}`}>
          <Button variant="secondary" className="searchButton">
            Search
          </Button>
        </Link>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default SearchBar;
