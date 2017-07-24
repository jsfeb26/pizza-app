import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 18px 0;
`;

const ToppingLabel = styled.label`
  padding: 9px 0;
  text-transform: capitalize;
  flex-basis: 33%;
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
`;

ToppingsList.propTypes = {
  handleToppingClick: PropTypes.func.isRequired,
  maxToppings: PropTypes.number,
  selectedToppingsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  toppings : PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })),
  selectedToppings: PropTypes.object
};

function ToppingsList({ handleToppingClick, selectedToppings, selectedToppingsCount, price, maxToppings, toppings }) {
  return (
      <ListContainer>
        {toppings.map((topping) => (
          <ToppingLabel key={topping.name}>
            <ToppingCheckbox
              type="checkbox"
              disabled={!selectedToppings[topping.name] && maxToppings === selectedToppingsCount}
              checked={!!selectedToppings[topping.name]}
              onChange={() => handleToppingClick(topping)}
            />
            {`${topping.name} +$${topping.price.toFixed(2)}`}
          </ToppingLabel>
        ))}
      </ListContainer>
  );
};

export default ToppingsList;
