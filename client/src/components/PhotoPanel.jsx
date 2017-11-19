import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

const PhotoPanel = ({ photos, handlePhotoClick }) => (
  <div id="photo-panel">
    <Masonry
      className="photo-gallery"
      elementType="ul"
    >
      {photos.map((photo, index) => (
        <li
          className="photo"
          key={index}
          onClick={() => handlePhotoClick(index)}
          role="menuitem"
        >
          <img
            src={photo.image_url}
            alt={photo.name}
            width={Math.floor(document.getElementById('app').clientWidth / 4)}
          />
        </li>
      ))}
    </Masonry>
  </div>
);

PhotoPanel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handlePhotoClick: PropTypes.func.isRequired,
};

export default PhotoPanel;
