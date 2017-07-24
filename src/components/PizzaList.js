import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PizzaListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PizzaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 18px;
  margin: 18px;
  border: 1px solid black;
  cursor: pointer;
`;

const PizzaName = styled.div`
  text-transform: capitalize;
`;

PizzaList.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
  pizzaSizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    basePrice: PropTypes.number
  }))
};

function PizzaList({ pizzaSizes, handleModalOpen }) {
  return (
    <PizzaListContainer>
      {
        pizzaSizes.map((pizzaSize) => (
          <PizzaItem
            key={pizzaSize.name}
            onClick={() => handleModalOpen(pizzaSize)}
          >
            <PizzaName>{`${pizzaSize.name} pie`}</PizzaName>
            <div>{`$${Number(pizzaSize.basePrice).toFixed(2)}+`}</div>
          </PizzaItem>
        ))
      }
    </PizzaListContainer>
  );
};

export default PizzaList;
