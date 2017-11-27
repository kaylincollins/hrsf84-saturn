import React from 'react';
import PropTypes from 'prop-types';

import VoyageEntry from './VoyageEntry';

function VoyageView({
  voyage, removeEntry, saveVoyage, select,
}) {
  return (
    <div id="voyage-view">
      <h1 className="voyage-view-header">Your Voyage</h1>
      <ul>
        {voyage.map((entry, index) => (
          <VoyageEntry
            entry={entry}
            key={entry.shortid}
            removeEntry={() => removeEntry(index)}
            select={select}
          />
        ))}
      </ul>
      {select ? <button id="save-voyage" onClick={saveVoyage}>Save Voyage</button> : ''}
    </div>
  );
}

VoyageView.propTypes = {
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeEntry: PropTypes.func,
  saveVoyage: PropTypes.func,
  select: PropTypes.bool,
};

VoyageView.defaultProps = {
  removeEntry: () => {},
  saveVoyage: () => {},
  select: false,
};

export default VoyageView;
