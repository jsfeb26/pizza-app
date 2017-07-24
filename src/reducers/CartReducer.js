import { ADD_ITEM, REMOVE_ITEM } from '../actions/CartActions';

const defaultState = {
  items: [],
  total: 0
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [ ...state.items, action.payload ],
        total: state.total + action.payload.price
      };
    case REMOVE_ITEM:
      const itemsCopy = [ ...state.items ];
      const total = state.total - itemsCopy[action.payload].price;
      itemsCopy.splice(action.payload, 1);

      return {
        items: itemsCopy,
        total
      };
    default:
      return state;
  }
}
