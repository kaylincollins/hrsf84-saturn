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
        console.log('CI ', cityInfo);
        this.setState({
          photos: cityInfo
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

  render() {
    return (
      <div className="container">
        <div className="logo">
          <a href="/"><img src="/images/logo.png" alt="logo" /></a>
        </div>
        <HomePage 
                  search={this.search} 
                  city={this.state.city} 
                  handleCityChange={this.handleCityChange} 
                />
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

/*<Route
              exact path="/"
              render={() => {
                <HomePage 
                  search={this.search} 
                  city={this.state.city} 
                  handleCityChange={this.handleCityChange} 
                />
              }}
            />*/
