import { OPEN_MODAL, CLOSE_MODAL } from '../actions/MenuActions';

const defaultState = {
  isModalOpen: false,
  selectedSize: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
        isModalOpen: true
      };
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
}
