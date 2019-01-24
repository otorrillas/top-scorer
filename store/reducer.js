import _keyBy from 'lodash/keyBy';

import { actionTypes } from './actions';

export const initialState = {
  error: null,
  games: [],
  selectedGame: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.RESET:
      return {
        ...initialState
      };

    case actionTypes.FETCH_GAMES_LIST_SUCCESS:
      return {
        ...state,
        games: _keyBy(action.data, 'id')
      };

    case actionTypes.FETCH_RUNS_SUCCESS:
      return {
        ...state,
        games: {
          ...state.games,
          [action.id]: {
            ...state.games[action.id],
            runs: action.data
          }
        }
      };
    default:
      return state;
  }
}

export default reducer;
