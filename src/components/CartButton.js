import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function CartButton() {
  return (
    <Link to={'/pokeCart'}>
      <Button variant="secondary" className="searchButton btn-dex">
        Pokémon Cart
      </Button>
    </Link>
  );
}

export default CartButton;
