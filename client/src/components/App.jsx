import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      city: '',
    };

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleCityChange(changeCity) {
    this.setState({
      city: changeCity.target.value,
    })
  }

  search(city) {
    // var init = {
    //   method: "GET",
    //   body: city
    // }
    console.log('S ', city);
    $.ajax({
      method: 'POST',
      url: `/search`,
      data: city,
      success: function(cities) {
        console.log('SUCCESS', cities);
      },
      error: function(err) {
        console.log('ERROR ', err);
      }
    })
    // fetch(`/search/${city}`)
    // .then(response => {
    //   console.log('response HERE', response);
    //   response.json().then(function(photos) {
    //     console.log('P ', photos)
    //   })
    // })

  }

  handlePhotoClick(index) {
    this.setState({ voyage: this.state.voyage.concat(this.state.photos[index]) });
  }

  removeEntry(index) {
    this.setState({
      voyage: this.state.voyage.slice(0, index).concat(this.state.voyage.slice(index + 1)),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="logo" /></a>
        </div>
        <HomePage search={this.search} city={this.state.city} handleCityChange={this.handleCityChange} />
        <BrowserRouter>
          <Switch>
            <Route
              path="/select"
              render={() => (
                <SelectPage
                  photos={this.state.photos}
                  voyage={this.state.voyage}
                  handlePhotoClick={this.handlePhotoClick}
                  removeEntry={this.removeEntry}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
