export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function removeItem(itemIndex) {
  return {
    type: REMOVE_ITEM,
    payload: itemIndex
  };
}
