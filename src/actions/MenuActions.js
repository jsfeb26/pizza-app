export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(selectedSize) {
  return {
    type: OPEN_MODAL,
    payload: { selectedSize: selectedSize.toUpperCase() }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}
