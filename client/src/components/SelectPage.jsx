import React from 'react';
import PropTypes from 'prop-types';

import PhotoPanel from './PhotoPanel';
import VoyageView from './VoyageView';

const SelectPage = ({
  photos, voyage, handlePhotoClick, removeEntry,
}) => (
  <div id="select">
    <PhotoPanel photos={photos} handlePhotoClick={handlePhotoClick} />
    <VoyageView voyage={voyage} removeEntry={removeEntry} select />
  </div>
);

SelectPage.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handlePhotoClick: PropTypes.func.isRequired,
  removeEntry: PropTypes.func.isRequired,
};

export default SelectPage;
