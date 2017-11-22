import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

function VoyagesPanel() {
  return (
    <div id="voyages-panel">
      <Masonry
        className="photo-gallery"
        elementType="ul"
      >
        
            <img
              src='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png'
              alt={photo.name}
              width={Math.floor(document.getElementById('app').clientWidth / 4)}
            />
          </li>
        ))}
      </Masonry>
    </div>
  );
}

// VoyagesPanel.propTypes = {
//   photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   handlePhotoClick: PropTypes.func.isRequired,
// };

export default VoyagesPanel;