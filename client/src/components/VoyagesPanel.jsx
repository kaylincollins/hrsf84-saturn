import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

function VoyagesPanel({voyages, handleVoyageClick}) {
  return (
    <div id="voyages-panel">
      <Masonry
        className="photo-gallery"
        elementType="ul"
      >
        {voyages.map((voyage, index) => (
          <li
            className="voyage"
            key={index}
            onClick={() => handleVoyageClick(index)}
            role="menuitem"
          >
            <img
              src={voyage.list[0].image_url}
              alt={voyage.location}
              width={Math.floor(document.getElementById('app').clientWidth / 4)}
            />
          </li>
        ))}
      </Masonry>
    </div>
  );
}

VoyagesPanel.propTypes = {
  voyages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleVoyageClick: PropTypes.func.isRequired,
};

export default VoyagesPanel;