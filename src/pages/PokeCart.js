import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import HomeButton from '../components/HomeButton';
import PokeButton from '../components/PokeButton';
import RemoveButton from '../components/RemoveButton';

function PokeCart({ cart }) {
  return (
    <div className="home">
      <HomeButton />
      <Container>
        <Row className="centerDiv">
          <div className="col-lg-12 text-center">
            <h2 className="text-uppercase title-text">Pokémon Roster</h2>
            <p className="para">
              Here is a list of all the pokémon within your pokémon roster
            </p>
          </div>
        </Row>
        <div className="contain">
          <div className="centerDiv">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div>
                  <Image
                    className="image"
                    fluid
                    src={
                      item[1]
                        ? item[1]
                        : 'https://www.heraldscotland.com/resources/images/5283517/'
                    }
                  />
                  <PokeButton data={item[0]} key={item.title} />{' '}
                  <RemoveButton data={item[0]} />
                </div>
              ))
            ) : (
              <p className="">Your roster is empty at this time </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(PokeCart);
