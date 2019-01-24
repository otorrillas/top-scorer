export const mockRuns = [
  {
    videos: { links: [{ uri: 'https://video-url' }] },
    players: [{ id: 'playerId' }],
    times: { primary_t: 450 }
  }
];

export const mockGames = {
  '1234': {
    abbreviation: 'test',
    assets: {
      'cover-medium': {
        uri: 'https://cover-medium-url'
      }
    },
    runs: mockRuns
  }
};

export const mockGamesResponse = [
  {
    id: '1234',
    ...mockGames['1234']
  },
  {
    id: '45678',
    ...mockGames['1234']
  }
];
