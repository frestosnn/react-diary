const defaultPopupState = {
  isPopupOpenPost: false
};

const popupOpenPostReduser = (state = defaultPopupState, action) => {
  switch (action.type) {
    case 'IS_OPEN':
      return { ...state, isPopupOpenPost: true };
    case 'IS_CLOSED':
      return { ...state, isPopupOpenPost: false };
    default:
      return state;
  }
};

export default popupOpenPostReduser;
