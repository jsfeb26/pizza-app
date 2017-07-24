export const TOGGLE_TOPPING = 'TOGGLE_TOPPING';
export const INIT_STATE = 'INIT_STATE';

export function toggleTopping(topping) {
  return {
    type: TOGGLE_TOPPING,
    payload: topping
  };
}

export function initializeState(pizza) {
  return {
    type: INIT_STATE,
    payload: pizza
  };
}
