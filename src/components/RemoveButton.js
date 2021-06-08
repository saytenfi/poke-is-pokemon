import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/shopping/shopping-actions';

function RemoveButton(props) {
  return (
    <Button
      onClick={() => {
        console.log('removing from cart button click');
        props.removeFromCart(props.data);
      }}
    >
      remove {props.data}(s) from your pokemon roster
    </Button>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (title) => dispatch(removeFromCart(title)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveButton);
