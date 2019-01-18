import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

const GameItem = ({ id, name, logo }) => (
  <>
    <p>
      <img src={logo} alt={`${name} logo`} />
      <Link href={{ pathname: '/game', query: { id } }}>
        <a>{name}</a>
      </Link>
    </p>
  </>
);

GameItem.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default GameItem;
