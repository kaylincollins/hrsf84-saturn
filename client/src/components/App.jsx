import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import SelectPage from './SelectPage';
import sampleData from '../../../sampleData/yelpData';
import HomePage from './Homepage';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: sampleData.businesses,
      voyage: [],
      city: 'San Francisco',
      username: '',
    };

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.saveVoyage = this.saveVoyage.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.search = this.search.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleCityChange(changeCity) {
    this.setState({ 
      city: changeCity.target.value
    });
  }

  search(city) {
    $.ajax({
      type: 'POST',
      url: '/search',
      data: {'search': city},
      success: (cityInfo) => {
        this.setState({
          photos: cityInfo
        }, function() {
          this.props.history.push('/select');
        })
      },
      error: (err) => {
        console.log('ERROR ', err);
      }
    })
  }

  handlePhotoClick(index) {
    this.setState({ voyage: this.state.voyage.concat(this.state.photos[index]) });
  }

  removeEntry(index) {
    this.setState({
      voyage: this.state.voyage.slice(0, index).concat(this.state.voyage.slice(index + 1)),
    });
  }

  saveVoyage() {
    console.log('!!!!!!!!!!!!in save voyage');
    let { username } = this.state;
    if (!this.state.username) {
      username = prompt('Enter a username');
      this.setState({ username });
    }

    $.post('/voyages', { username, location: this.state.city, list: this.state.voyage });
  }

  render() {
    return (
      <div className="container">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="logo" /></a>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                search={this.search}
                city={this.state.city}
                handleCityChange={this.handleCityChange}
              />
            )}
          />
          <Route
            path="/select"
            render={() => (
              <SelectPage
                photos={this.state.photos}
                voyage={this.state.voyage}
                handlePhotoClick={this.handlePhotoClick}
                removeEntry={this.removeEntry}
                saveVoyage={this.saveVoyage}
              />
            )}
          />
          <Route
            path="/voyages"
            render={() => (
              <JournalPage
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(App);
