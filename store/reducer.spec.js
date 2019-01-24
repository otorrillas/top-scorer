import reducer from './reducer';
import { actionTypes } from './actions';

import { mockRuns, mockGamesResponse } from 'Utils/mocks';

describe('Redux - reducer', () => {
  test('failure sets error field', () => {
    expect(
      reducer([], {
        type: actionTypes.FAILURE,
        error: 'Some error'
      })
    ).toMatchSnapshot();
  });

  test('reset sets state to initial state', () => {
    expect(
      reducer(
        [
          {
            type: actionTypes.FAILURE,
            error: 'Some error'
          }
        ],
        {
          type: actionTypes.RESET
        }
      )
    ).toMatchSnapshot();
  });

  test('fetch game list success populates games', () => {
    expect(
      reducer([], {
        type: actionTypes.FETCH_GAMES_LIST_SUCCESS,
        data: mockGamesResponse
      })
    ).toMatchSnapshot();
  });

  test('fetch runs appends runs to games', () => {
    const id = mockGamesResponse[0].id;
    const result = reducer(
      [],
      { type: actionTypes.FETCH_GAMES_LIST_SUCCESS, data: mockGamesResponse },
      {
        type: actionTypes.FETCH_RUNS_SUCCESS,
        id,
        data: mockRuns
      }
    );

    expect(result).toMatchSnapshot();
    expect(result.games[id].runs).toBe(mockRuns);
  });
});
