export const GET_MESSAGES = 'hello/messages/MESSAGES';

const initialState =
  {
    greeting: 'LOADING'
  };

export const setMessages = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const getMessages = () => async (dispatch) => {
  const result = await fetch('http://localhost:3000/v1/messages');
  const data = await result.json();
  dispatch(setMessages(data));
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;