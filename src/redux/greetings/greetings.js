import getMessage from '../APIHelper';

const GET_MESSAGE = 'GET_MESSAGE';

const initialState = { message: '' };

export const getRandomMessage = () => async (dispatch) => {
  const message = await getMessage();

  dispatch({
    type: GET_MESSAGE,
    payload: message,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
