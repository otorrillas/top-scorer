import React from 'react';
import PropTypes from 'prop-types';

const TotalTime = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      {minutes} minutes and {seconds} seconds
    </>
  );
};

TotalTime.propTypes = {
  time: PropTypes.number.isRequired
};

export default TotalTime;
