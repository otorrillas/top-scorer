import PropTypes from 'prop-types';

const PlayerShape = PropTypes.shape({
  rel: PropTypes.string,
  id: PropTypes.string,
  uri: PropTypes.string
});

export const RunShape = PropTypes.shape({
  times: PropTypes.shape({
    primary_t: PropTypes.number
  }),
  players: PropTypes.arrayOf(PlayerShape)
});

const AssetShape = PropTypes.shape({
  uri: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
});

export const GameShape = PropTypes.shape({
  id: PropTypes.string,
  abbreviation: PropTypes.string,
  assets: PropTypes.objectOf(AssetShape),
  runs: PropTypes.arrayOf(RunShape)
});

export const ContextShape = PropTypes.shape({
  store: PropTypes.object,
  query: PropTypes.object
});
