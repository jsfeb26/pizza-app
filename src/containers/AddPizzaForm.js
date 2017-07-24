import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import AddPizzaFormBody from '../components/AddPizzaFormBody';
import { toggleTopping } from '../actions/FormActions';
import { addItem } from '../actions/CartActions';
import CloseIcon from '../static/close.png';

const Close = styled.img`
  position: absolute;
  width: 20px;
  top: 18px;
  right: 18px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

function AddPizzaForm({ isModalOpen, closeModal, loading, error, data, formData, handleToppingClick, handleAddButtonClick }) {
  if (!data) {
    return null;
  }

  if (loading) {
    return (<div>Loading</div>)
  }

  if (error) {
    console.error(error)
    return (<div>An unexpected error occurred</div>)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Add Pizza Form"
    >
      <Close src={CloseIcon} onClick={closeModal} />
      <AddPizzaFormBody
        {...data}
        {...formData}
        handleToppingClick={handleToppingClick}
        handleAddButtonClick={() => {
          handleAddButtonClick(formData);
          closeModal();
        }}
      />
    </Modal>
  );
};

const PizzaQuery = gql`
  query PizzaBySizeQuery($name: PizzaSizes) {
    pizzaSizeByName(name: $name) {
      name
      maxToppings
      basePrice
      toppings {
        defaultSelected
        topping {
          name
          price
        }
      }
    }
  }
`;

const AddPizzaFormWithData = graphql(PizzaQuery, {
  props: ({ data }) => {
    if (!data) {
      return { data: null };
    }

    const pizza = data.pizzaSizeByName;

    return {
      data: {
        maxToppings: pizza ? pizza.maxToppings : null,
        toppings: pizza ? pizza.toppings.map((topping) => ({ ...topping.topping })) : []
      },
      loading: data.loading,
      error: data.loading
    }
  },
  options: (ownProps) => ({ variables: { name: ownProps.pizzaSize } }),
  skip: (ownProps) => !ownProps.pizzaSize
})(AddPizzaForm);

const AddPizzaFormWithDataAndState = connect(
  ({ form }) => ({ formData: form }),
  (dispatch) => ({
    handleToppingClick(topping) {
      dispatch(toggleTopping(topping));
    },
    handleAddButtonClick(formData) {
      dispatch(addItem(formData));
    }
  })
)(AddPizzaFormWithData);

export default AddPizzaFormWithDataAndState;
