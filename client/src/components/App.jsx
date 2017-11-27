import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import shortid from 'shortid';
import $ from 'jquery';

import SelectPage from './SelectPage';
import sampleData from '../../../sampleData/yelpData';
import HomePage from './Homepage';
import JournalPage from './JournalPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: sampleData.businesses,
      voyage: [],
      city: 'San Francisco',
      username: '',
      voyages: [],
    };

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.saveVoyage = this.saveVoyage.bind(this);
    this.search = this.search.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
    this.setState = this.setState.bind(this);
    this.handleVoyageClick = this.handleVoyageClick.bind(this);
    this.checkForUsername = this.checkForUsername.bind(this);
  }

  search(city) {
    $.ajax({
      type: 'POST',
      url: '/search',
      data: { search: city },
      success: (cityInfo) => {
        this.setState({
          photos: cityInfo,
        }, () => {
          this.props.history.push('/select');
        });
      },
      error: (err) => {
        console.log('ERROR ', err);
      },
    });
  }

  autocomplete(changeCity) {
    this.setState({
      city: changeCity.target.value,
    });
    new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
      type: ['(cities)'],
    });
  }

  handlePhotoClick(index) {
    this.setState({
      voyage: this.state.voyage.concat(Object.assign(
        { shortid: shortid.generate() },
        this.state.photos[index],
      )),
    });
  }

  handleVoyageClick(index) {
    this.setState({ voyage: this.state.voyages[index].list });
  }

  removeEntry(index) {
    this.setState({
      voyage: this.state.voyage.slice(0, index).concat(this.state.voyage.slice(index + 1)),
    });
  }

  saveVoyage() {
    let { username } = this.state;
    if (!this.state.username) {
      username = prompt('Enter a username');
      this.setState({ username });
    }

    $.ajax({
      type: 'POST',
      url: '/voyages',
      data: { username, location: this.state.city, list: this.state.voyage },
      success: (voyages) => {
        this.setState({
          voyages: JSON.parse(voyages),
        }, () => {
          this.props.history.push('/voyages');
        });
      },
      error: (err) => {
        console.log('ERROR ', err);
      },
    });
  }

  checkForUsername() {
    let { username } = this.state;
    if (!this.state.username) {
      username = prompt('Enter a username');
      this.setState({ username });
    }
    $.ajax({
      type: 'POST',
      url: '/usersVoyages',
      data: { username },
      success: (voyages) => {
        this.setState({
          voyages: JSON.parse(voyages),
        }, () => {
          this.props.history.push('/voyages');
        });
      },
      error: (err) => {
        console.log('ERROR ', err);
      },
    });
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
                autocomplete={this.autocomplete}
                click={this.click}
                book={this.checkForUsername}
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
                book={this.checkForUsername}
              />
            )}
          />
          <Route
            path="/voyages"
            render={() => (
              <JournalPage
                voyages={this.state.voyages}
                voyage={this.state.voyage}
                handleVoyageClick={this.handleVoyageClick}
                removeEntry={this.removeEntry}
                saveVoyage={this.saveVoyage}
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
