import { SET_MESSAGES, ADD_MESSAGE } from './messagesActions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default messagesReducer;
