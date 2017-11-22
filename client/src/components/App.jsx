import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import SelectPage from './SelectPage';
import sampleData from '../../../sampleData/yelpData';
import HomePage from './Homepage';
import $ from 'jquery';
import gKey from '../../../config';

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
    this.search = this.search.bind(this);
    this.autocomplete = this.autocomplete.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'POST',
      url: '/',
      success: (cityInfo) => {
        console.log(cityInfo)
      },
      error: (err) => {
        console.log('ERROR ', err);
      }
    })
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

  autocomplete(changeCity) {
    console.log('A ', changeCity.target.value);
    this.setState({ 
      city: changeCity.target.value
    });
    let autocomplete = new google.maps.places.Autocomplete(
      (document.getElementById('autocomplete')), {
        type: ['(cities)']
      }
    )
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
                autocomplete={this.autocomplete}
                click={this.click}
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

// ' + google.google + '

