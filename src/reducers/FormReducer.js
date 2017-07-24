import { TOGGLE_TOPPING, INIT_STATE } from '../actions/FormActions';

const defaultState = {
  name: '',
  selectedToppings: {},
  selectedToppingsCount: 0,
  price: 0
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case INIT_STATE:
      const pizza = action.payload;

      const defaultToppings = pizza.toppings
        .filter((t) => t.defaultSelected)
        .map((t) => t.topping);
      const price = defaultToppings.reduce((total, topping) => {
         return total + topping.price;
      }, pizza.basePrice);
      const selectedToppingsCount = defaultToppings.length;

      const selectedToppings = {};
      defaultToppings.forEach((topping) => {
        selectedToppings[topping.name] = topping;
      });

      return {
        ...state,
        name: pizza.name,
        selectedToppings,
        price,
        selectedToppingsCount
      };
    case TOGGLE_TOPPING:
      const topping = action.payload;

      let newCount;
      let newPrice;
      const selectedToppingsCopy = {...state.selectedToppings};

      if (selectedToppingsCopy[topping.name]) {
        delete selectedToppingsCopy[topping.name];
        newPrice = state.price - topping.price;
        newCount = state.selectedToppingsCount - 1;
      } else {
        selectedToppingsCopy[topping.name] = topping;
        newPrice = state.price + topping.price;
        newCount = state.selectedToppingsCount + 1;
      }

      return {
        ...state,
        selectedToppings: selectedToppingsCopy,
        selectedToppingsCount: newCount,
        price: newPrice
      };
    default:
      return state;
  }
}
