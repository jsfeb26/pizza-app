import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CartItemContainer from '../components/CartItemContainer';
import { removeItem } from '../actions/CartActions';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const MenuButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 40px;
  font-size: 14px;
`;

const Total = styled.div`
  text-align: center;
  padding-top: 18px;
  font-size: 18px;
  font-weight: bold;
`;

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  handleRemoveClick: PropTypes.func.isRequired
};

function Cart({ items, total, handleRemoveClick }) {
  return (
    <CartContainer>
      <Link to="/">
        <MenuButton>Back To Menu</MenuButton>
      </Link>
      <Title>your cart</Title>
      <CartItemContainer items={items} handleRemoveClick={handleRemoveClick} />
      <Total>{`Total Price: $${total.toFixed(2)}`}</Total>
    </CartContainer>
  );
}

const CartWithState = connect(
  ({ cart }) => ({ ...cart }),
  (dispatch) => ({
    handleRemoveClick(itemIndex) {
      dispatch(removeItem(itemIndex));
    }
  })
)(Cart);

export default CartWithState;
