import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const EmptyMessage = styled.div`
  font-size: 20px;
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

CartItemContainer.propTypes = {
  items: PropTypes.array.isRequired,
  handleRemoveClick: PropTypes.func.isRequired
};

function CartItemContainer({ items, handleRemoveClick }) {
  if (items.length === 0) {
    return (
      <Container>
        <EmptyMessage>Your cart is empty</EmptyMessage>
      </Container>
    );
  }
  return (
    <Container>
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
              <Price>{`$${Number(item.price).toFixed(2)}`}</Price>
              <Remove onClick={() => handleRemoveClick(index)}>remove</Remove>
            </CartItem>
          );
        })
      }
    </Container>
  );
}

export default CartItemContainer;
