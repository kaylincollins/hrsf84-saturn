import React from 'react';
import PropTypes from 'prop-types';

import VoyagesPanel from './VoyagesPanel';
import VoyageView from './VoyageView';

function JournalPage({
  voyages, voyage, handleVoyageClick, removeEntry, saveVoyage,
}) {
  return (
    <div id="journal">
      <VoyagesPanel voyages={voyages} handleVoyageClick={handleVoyageClick} />
      <VoyageView voyage={voyage} removeEntry={removeEntry} saveVoyage={saveVoyage} select />
    </div>
  );
}

JournalPage.propTypes = {
  voyages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleVoyageClick: PropTypes.func.isRequired,
  removeEntry: PropTypes.func.isRequired,
  saveVoyage: PropTypes.func.isRequired,
};

export default JournalPage;