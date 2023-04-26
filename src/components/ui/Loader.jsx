import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <>
      <FontAwesomeIcon icon={faChargingStation} size="6x" className="pulse" />
    </>
  );
}

export default Loader;
