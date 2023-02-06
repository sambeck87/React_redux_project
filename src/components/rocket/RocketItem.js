import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const {
    id,
    rocketName,
    description,
    image,
    reserved,
    handleRocket,
  } = props;

  return (
    <li className="rocket">
      <img className="rocket_image" src={image} alt="rocket" />
      <div className="single-rocket-container">
        <span data-testid="name" className="rocket-name">
          {rocketName}
        </span>

        <div className="rocket-detail">
          <span className={reserved ? 'reserved' : ''}>
            {reserved ? 'Reserved' : ''}
          </span>
          {description}
        </div>
        <button
          data-testid="button"
          type="button"
          className={reserved ? 'cancel-reservation' : 'reserve-rocket'}
          onClick={() => {
            handleRocket(id);
          }}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleRocket: PropTypes.func.isRequired,
};
