import React from 'react';
import PropTypes from 'prop-types';

import VoyageEntry from './VoyageEntry';

function VoyageView({
  voyage, removeEntry, saveVoyage, select,
}) {
  return (
    <div id="voyage-view">
      <ul>
        {voyage.map((entry, index) => (
          <VoyageEntry
            entry={entry}
            key={entry.shortid}
            removeEntry={() => removeEntry(index)}
          />
        ))}
      </ul>
      {select ? <button id="save-voyage" onClick={saveVoyage}>Save Voyage</button> : ''}
    </div>
  );
}

VoyageView.propTypes = {
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeEntry: PropTypes.func.isRequired,
  saveVoyage: PropTypes.func,
  select: PropTypes.bool,
};

VoyageView.defaultProps = {
  saveVoyage: () => {},
  select: false,
};

export default VoyageView;
