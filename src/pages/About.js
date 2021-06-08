import React, { useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import Logo from '../components/Logo';
import PokeButton from '../components/PokeButton';
import { connect } from 'react-redux';
import { addToCart } from '../redux/shopping/shopping-actions';
import CartButton from '../components/CartButton';

function About(props) {
  let { name } = useParams();

  const [jsonData, setjsonData] = useState({});
  const [imageURL, setimageURL] = useState({});

  useEffect(() => {
    const fetchJSON = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((pokemonInformation) => {
          // console.log(pokemonInformation);
          // console.log(pokemonInformation.sprites.front_default);
          setjsonData(pokemonInformation);
          setimageURL(pokemonInformation.sprites.front_default);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchJSON();
  }, []);

  return (
    <div className="home">
      <Logo />
      <HomeButton />
      <CartButton />
      <Button
        className="btn-dex"
        onClick={() => {
          console.log(`name of pokemon is ${name}`);
          props.addToCart([name, imageURL]);
        }}
      >
        add to Cart
      </Button>
      {name && jsonData.id ? (
        <>
          <PokeButton
            data={`Pokemon Name: ${
              name.charAt(0).toUpperCase() + name.slice(1)
            }`}
          />

          <PokeButton data={`Height of Pokemon: ${jsonData.height / 10}m`} />

          <PokeButton data={`Weight of Pokemon: ${jsonData.weight / 10}kg`} />

          <Image
            className="image"
            fluid
            src={
              imageURL
                ? imageURL
                : 'https://www.heraldscotland.com/resources/images/5283517/'
            }
          />
          <div>List of Abilities:</div>
          {jsonData.abilities.map((item) => (
            <PokeButton data={item.ability.name} key={item.ability.name} />
          ))}
          <br />
          <div>List of Potential Moves:</div>
          {jsonData.moves.map((item) => (
            <PokeButton data={item.move.name} key={item.move.name} />
          ))}
        </>
      ) : (
        <p>
          {' '}
          The pokemon you have searched for does not exist please go back to the
          home page and try searching again{' '}
        </p>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (title) => dispatch(addToCart(title)),
  };
};

export default connect(null, mapDispatchToProps)(About);
