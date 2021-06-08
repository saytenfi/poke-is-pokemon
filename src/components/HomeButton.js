import React from 'react';
import PokeButton from './PokeButton';
import { Link } from 'react-router-dom';

function HomeButton() {
  return (
    <Link to={`/`} className="btn-dex">
      <PokeButton data="← Home" />
    </Link>
  );
}

export default HomeButton;
