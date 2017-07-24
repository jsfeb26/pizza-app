import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PreviewContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = styled.div`
  text-transform: uppercase;
  padding-bottom: 9px;
  font-size: 18px;
  text-align: center;
`;

const Cart = styled.div`
  padding: 9px;
  border: 1px solid black;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #F1F1F1;
  }
`;

const CartInfo = styled.div`
  text-transform: capitalize;
`;

CartPreview.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
};

function CartPreview({ items, total }) {
  if (!items) {
    return null;
  }

  return (
    <PreviewContainer>
      <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
        <Cart>
          <Header>cart</Header>
          <CartInfo>{`${items.length} items`}</CartInfo>
          <CartInfo>{`total: $${total.toFixed(2)}`}</CartInfo>
        </Cart>
      </Link>
    </PreviewContainer>
  );
};

export default CartPreview;
