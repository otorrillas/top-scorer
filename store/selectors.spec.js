import { getGames } from './selectors';
import { mockGames } from 'Utils/mocks';

describe('Redux - selectors', () => {
  const state = {
    games: mockGames
  };

  describe('getGames', () => {
    test('returns mockGames', () => {
      expect(getGames(state)).toMatchSnapshot();
    });

    test('returns undefined on empty state', () => {
      expect(getGames({})).toMatchSnapshot();
    });
  });
});
