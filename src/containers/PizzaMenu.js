import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { openModal, closeModal } from '../actions/MenuActions';
import { initializeState } from '../actions/FormActions';
import AddPizzaForm from '../containers/AddPizzaForm';
import PizzaList from '../components/PizzaList';
import CartPreview from '../components/CartPreview';
import Loading from '../components/Loading';

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

PizzaMenu.propTypes = {
  isModalOpen: PropTypes.bool,
  selectedSize: PropTypes.string,
  handleModalOpen: PropTypes.func.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  pizzaSizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    basePrice: PropTypes.number
  })),
  cart: PropTypes.object
};

function PizzaMenu({
  isModalOpen,
  selectedSize,
  handleModalOpen,
  handleCloseModal,
  loading,
  error,
  pizzaSizes,
  cart
}) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error)
    return (<div>An unexpected error occurred</div>)
  }

  return (
    <div>
      <CartPreview {...cart} />
      <Title>pizza menu</Title>
      <PizzaList handleModalOpen={handleModalOpen} pizzaSizes={pizzaSizes} />
      <AddPizzaForm
        isModalOpen={isModalOpen}
        closeModal={handleCloseModal}
        pizzaSize={selectedSize}
      />
    </div>
  );
}

const PizzaQuery = gql`
  query PizzaQuery {
    pizzaSizes {
      name
      basePrice
      toppings {
        topping {
          name
          price
        }
        defaultSelected
      }
    }
  }
`;

const PizzaMenuWithData = graphql(PizzaQuery, {
  props: ({ data }) => ({ ...data })
})(PizzaMenu);

const PizzaMenuWithDataAndState = connect(
  ({ menu, cart }) => ({
    selectedSize: menu.selectedSize,
    isModalOpen: menu.isModalOpen,
    cart
  }),
  (dispatch) => ({
    handleModalOpen(pizza) {
      dispatch(openModal(pizza.name));
      dispatch(initializeState(pizza));
    },
    handleCloseModal() {
      dispatch(closeModal());
    }
  })
)(PizzaMenuWithData);

export default PizzaMenuWithDataAndState;
