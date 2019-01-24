import 'isomorphic-unfetch';

import _find from 'lodash/find';

import endpoints from 'Services/endpoints.json';

export const actionTypes = {
  RESET: 'RESET',
  FAILURE: 'FAILURE',
  FETCH_GAMES_LIST: 'FETCH_GAMES_LIST',
  FETCH_GAMES_LIST_SUCCESS: 'FETCH_GAMES_LIST_SUCCESS',
  FETCH_RUNS: 'FETCH_RUNS',
  FETCH_RUNS_SUCCESS: 'FETCH_RUNS_SUCCESS'
};

export function reset() {
  return { type: actionTypes.RESET };
}

export function failure(error) {
  return { type: actionTypes.FAILURE, error };
}

export function fetchGamesList() {
  return async function(dispatch) {
    await fetch(endpoints.gameList)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchGamesListSuccess(json.data));
      })
      .catch(err => dispatch(failure(err)));
  };
}

export function fetchGamesListSuccess(data) {
  return {
    type: actionTypes.FETCH_GAMES_LIST_SUCCESS,
    data
  };
}

export function fetchRuns(id) {
  return async function(dispatch, getState) {
    const games = getState().games;

    const targetGame = games[id];
    const runsUrl = _find(targetGame.links, { rel: 'runs' }).uri;

    await fetch(runsUrl)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchRunsSuccess(id, json.data));
      })
      .catch(err => dispatch(failure(err)));
  };
}

export function fetchRunsSuccess(id, data) {
  return {
    type: actionTypes.FETCH_RUNS_SUCCESS,
    id,
    data
  };
}
