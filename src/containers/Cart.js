import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { removeItem } from '../actions/CartActions';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuButton = styled.button`
  cursor: pointer;
  width: 200px;
  height: 40px;
`

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 18px;
  margin: 18px;
  border: 1px solid black;
  text-transform: capitalize;
`;

const Name = styled.div`
  flex-basis: 70%;
`;

const Price = styled.div`
  flex-basis: 15%;
  padding: 0 18px;
`;

const Remove = styled.div`
  flex-basis: 15%;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Total = styled.div`
  text-align: center;
  padding-top: 18px;
`;

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

function Cart({ items, total, handleRemoveClick }) {
  return (
    <CartContainer>
      <Link to="/">
        <MenuButton>Back To Menu</MenuButton>
      </Link>
      <CartItemContainer>
        {
          items.map((item, index) => {
            const toppings = Object.keys(item.selectedToppings).reduce((acc, topping) => {
              if (!acc) {
                return topping;
              }

              return `${acc}, ${topping}`;
            }, '');

            return (
              <CartItem key={index}>
                <Name>{`${item.name} pizza ${toppings ? `with ${toppings}` : ''}`}</Name>
                <Price>{`$${item.price.toFixed(2)}`}</Price>
                <Remove onClick={() => handleRemoveClick(index)}>remove</Remove>
              </CartItem>
            );
          })
        }
      </CartItemContainer>
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
