import React from 'react';
import PropTypes from 'prop-types';

import VoyagesPanel from './VoyagesPanel';
import VoyageView from './VoyageView';

function JournalPage({
  photos, voyage, handlePhotoClick, removeEntry, saveVoyage,
}) {
  return (
    <div id="journal">
      <VoyagesPanel  />
      <VoyageView voyage={voyage} removeEntry={removeEntry} saveVoyage={saveVoyage} select />
    </div>
  );
}

// SelectPage.propTypes = {
//   photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   handlePhotoClick: PropTypes.func.isRequired,
//   removeEntry: PropTypes.func.isRequired,
//   saveVoyage: PropTypes.func.isRequired,
// };

export default JournalPage;