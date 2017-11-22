import React from 'react';
import PropTypes from 'prop-types';

class VoyageEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };

    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    let details = null;

    if (this.state.showDetails) {
      details = (
        <div className="voyage-entry-details">
          <div>{this.props.entry.name}</div>
          {this.props.entry.location.display_address.map((line, key) => (
            <div className="address" key={line + key}>{line}</div>
          ))}
        </div>
      );
    }

    return (
      <li
        className="voyage-entry"
        onClick={this.toggleDetails}
        role="menuitem"
      >
        <div className="voyage-image">
          <span onClick={this.props.removeEntry} role="button" tabIndex={0}>&#x2717;</span>
          <img
            src={this.props.entry.image_url}
            alt={this.props.entry.name}
            width={Math.floor(document.getElementById('app').clientWidth / 4) - 50}
          />
        </div>
        {details}
      </li>
    );
  }
}

VoyageEntry.propTypes = {
  entry: PropTypes.shape({
    name: PropTypes.String,
    location: PropTypes.shape([]),
    image_url: PropTypes.String,
  }).isRequired,
  removeEntry: PropTypes.func.isRequired,
};

export default VoyageEntry;
