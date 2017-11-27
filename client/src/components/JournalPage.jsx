import React from 'react';
import PropTypes from 'prop-types';

import VoyagesPanel from './VoyagesPanel';
import VoyageView from './VoyageView';

function JournalPage({
  voyages, voyage, handleVoyageClick,
}) {
  return (
    <div id="journal">
      <VoyagesPanel voyages={voyages} handleVoyageClick={handleVoyageClick} />
      <VoyageView voyage={voyage} select={false} />
    </div>
  );
}

JournalPage.propTypes = {
  voyages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleVoyageClick: PropTypes.func.isRequired,
};

export default JournalPage;
