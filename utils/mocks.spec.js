import { mockGames } from './mocks';

describe('Utils - mocks', () => {
  test('games', () => {
    expect(mockGames).toMatchSnapshot();
  });
});
