import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ToppingsList from './ToppingsList';
import AddItemButton from './AddItemButton';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 26px;
  padding-bottom: 18px;
  width: 90%;
  text-transform: capitalize;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToppingHeader = styled.div`
  font-size: 18px;
  line-height: 27px;
`;

const ToppingSubHeader = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

AddPizzaFormBody.propTypes = {
  handleAddButtonClick: PropTypes.func.isRequired,
  handleToppingClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxToppings: PropTypes.number,
  selectedToppingsCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  toppings : PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })),
  selectedToppings: PropTypes.object
};

function AddPizzaFormBody({
  handleAddButtonClick,
  handleToppingClick,
  name,
  selectedToppings,
  selectedToppingsCount,
  price,
  maxToppings,
  toppings
}) {
  return (
    <Body>
      <Header>
        <div>{`${name} pie`}</div>
        <div>{`$${Number(price).toFixed(2)}`}</div>
      </Header>
      <ToppingHeader>Would you like to add pizza toppings?</ToppingHeader>
      {maxToppings &&
        <ToppingSubHeader>
          {`Optional - Choose a maximum of ${maxToppings}.`}
        </ToppingSubHeader>
      }
      <ToppingsList
        handleToppingClick={handleToppingClick}
        selectedToppings={selectedToppings}
        selectedToppingsCount={selectedToppingsCount}
        price={price}
        maxToppings={maxToppings}
        toppings={toppings}
      />
      <AddItemButton handleAddButtonClick={handleAddButtonClick} price={price} />
    </Body>
  );
};

export default AddPizzaFormBody;
