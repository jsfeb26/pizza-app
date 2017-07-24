import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 50px;
  cursor: pointer;
  font-size: 18px;
`;

AddItemButton.propTypes = {
  handleAddButtonClick: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
};

function AddItemButton({ handleAddButtonClick, price }) {
  return (
    <Button onClick={handleAddButtonClick}>{`Add To Cart $${price.toFixed(2)}`}</Button>
  );
};

export default AddItemButton;
