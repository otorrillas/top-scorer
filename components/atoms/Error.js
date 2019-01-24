import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <>
    <h1>Error</h1>
    <p>{message}</p>
  </>
);

Error.propTypes = {
  message: PropTypes.string.isRequired
};

export default Error;
