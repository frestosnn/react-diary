const defaultPopupState = {
  isPopupAddPostOpen: false
};

const IS_POPUP_ADD_OPEN = 'IS_POPUP_ADD_OPEN';
const IS_POPUP_ADD_CLOSED = 'IS_POPUP_ADD_CLOSED';

const popupAddPostReduser = (state = defaultPopupState, action) => {
  switch (action.type) {
    case IS_POPUP_ADD_OPEN:
      return { ...state, isPopupAddPostOpen: true };
    case IS_POPUP_ADD_CLOSED:
      return { ...state, isPopupAddPostOpen: false };
    default:
      return state;
  }
};

export default popupAddPostReduser;

export const isPopupAddOpenAction = payload => ({ type: IS_POPUP_ADD_OPEN, payload });
export const isPopupAddClosedAction = payload => ({ type: IS_POPUP_ADD_CLOSED, payload });
