const defaultPopupState = {
  isPopupAddPostOpen: false
};

const popupAddPostReduser = (state = defaultPopupState, action) => {
  switch (action.type) {
    case 'IS_POPUP_OPEN':
      return { ...state, isPopupAddPostOpen: true };
    case 'IS_CLOSED':
      return { ...state, isPopupAddPostOpen: false };
    default:
      return state;
  }
};

export default popupAddPostReduser;
