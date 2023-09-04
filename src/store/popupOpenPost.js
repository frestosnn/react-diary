const defaultPopupState = {
  isPopupOpenPost: false
};

const IS_POPUP_OPEN_POST_OPEN = 'IS_POPUP_OPEN_POST_OPEN';
const IS_POPUP_OPEN_POST_CLOSED = 'IS_POPUP_OPEN_POST_CLOSED';

const popupOpenPostReduser = (state = defaultPopupState, action) => {
  switch (action.type) {
    case IS_POPUP_OPEN_POST_OPEN:
      return { ...state, isPopupOpenPost: true };
    case IS_POPUP_OPEN_POST_CLOSED:
      return { ...state, isPopupOpenPost: false };
    default:
      return state;
  }
};

export default popupOpenPostReduser;

export const isPopupOpenPostOpenAction = payload => ({ type: IS_POPUP_OPEN_POST_OPEN, payload });
export const isPopupOpenPostClosedAction = payload => ({
  type: IS_POPUP_OPEN_POST_CLOSED,
  payload
});
