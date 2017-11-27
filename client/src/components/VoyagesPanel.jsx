import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

function VoyagesPanel({ voyages, handleVoyageClick }) {
  return (
    <div id="photo-panel">
      <h2 className="journal-page-header">Select a Saved Voyage</h2>
      <Masonry
        className="photo-gallery"
        elementType="ul"
      >
        {voyages.map((voyage, index) => (
          <li
            className="voyage"
            key={voyage._id}
            onClick={() => handleVoyageClick(index)}
            role="menuitem"
          >
            <div>
              <img
                src={voyage.list[0].image_url}
                alt={voyage.location}
                width={Math.floor(document.getElementById('app').clientWidth / 4)}
              />
            </div>
            <div className="voyage-name"> {voyage.location} </div>

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
