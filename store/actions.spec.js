import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from './actions';
import { mockGames, mockRuns } from 'Utils/mocks';
import endpoints from 'Services/endpoints.json';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux - actions', () => {
  test('export action types', () => {
    expect(actions.actionTypes).toMatchSnapshot();
  });

  test('should create a RESET action', () => {
    expect(actions.reset()).toMatchSnapshot();
  });

  test('should create a FAILURE action', () => {
    expect(actions.failure('test error')).toMatchSnapshot();
  });

  test('should create a FETCH_GAMES_LIST_SUCCESS action', () => {
    expect(actions.fetchGamesListSuccess(mockGames)).toMatchSnapshot();
  });

  test('should create a FETCH_RUN_SUCCESS action', () => {
    expect(actions.fetchRunsSuccess(1234, mockRuns)).toMatchSnapshot();
  });

  describe('FETCH_GAMES_LIST', () => {
    const store = mockStore();
    it('should dispatch a fetchGamesListSuccess on success', () => {
      nock(endpoints.gameList)
        .get('/')
        .reply(
          200,
          JSON.stringify({
            data: mockGames
          })
        );

      store
        .dispatch(actions.fetchGamesList())
        .then(expect(store.getActions()).toMatchSnapshot());
    });

    it('should dispatch a failure action on error', () => {
      nock(endpoints.gameList)
        .get('/')
        .reply(500);

      store
        .dispatch(actions.fetchGamesList())
        .then(expect(store.getActions()).toMatchSnapshot());
    });
  });
});
