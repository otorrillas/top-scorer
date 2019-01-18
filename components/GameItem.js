import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

const GameItem = ({ id, name, logo }) => (
  <>
    <p>
      <img src={logo} alt={`${name} logo`} />
      <Link href={`/games/${id}`}>{name}</Link>
    </p>
  </>
);

GameItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default GameItem;