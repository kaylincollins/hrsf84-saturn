import React from 'react';
import PropTypes from 'prop-types';

import VoyageEntry from './VoyageEntry';

function VoyageView({ voyage, removeEntry, select }) {
  return (
    <div id="voyage-view">
      <ul>
        {voyage.map((entry, index) => (
          <VoyageEntry
            entry={entry}
            key={entry.id + index}
            removeEntry={() => removeEntry(index)}
          />
        ))}
      </ul>
      {select ? <button id="save-voyage">Save Voyage</button> : ''}
    </div>
  );
}

VoyageView.propTypes = {
  voyage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  removeEntry: PropTypes.func.isRequired,
  select: PropTypes.bool,
};

VoyageView.defaultProps = {
  select: false,
};

export default VoyageView;
