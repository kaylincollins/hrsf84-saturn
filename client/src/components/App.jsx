import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SelectPage from './SelectPage';
import sampleData from '../../../sampleData/yelpData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: sampleData.businesses,
      voyage: [],
    };

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
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
