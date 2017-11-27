import React from 'react';
import PropTypes from 'prop-types';

function HomePage({
  search, autocomplete, city, book,
}) {
  return (
    <div className="homepage">
      <div className="book" onClick={() => book()} role="button" tabIndex={0}>
        <img src="/images/book.png" alt="logo" />
      </div>
      <div>
        <div className="homeImgContainer" onClick={() => search('New York City, New York')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg" alt="New York City, New York" />
        </div>
        <div className="homeImgContainer" onClick={() => search('San Francisco, California')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx" alt="San Francisco, California" />
        </div>
        <div className="homeImgContainer" onClick={() => search('Los Angeles, California')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://thumbs.dreamstime.com/b/iconic-hollywood-sign-los-angeles-california-19251428.jpg" alt="Los Angeles, California" />
        </div>
      </div>
      <br />
      <div className="citysearch">
        <input
          id="autocomplete"
          type="text"
          placeholder="Enter a city here..."
          onChange={autocomplete}
        />
        <input id="citybutton" type="submit" value="Go!" onClick={() => search(city)} />
      </div>
      <div>
        <br />
        <div className="homeImgContainer" onClick={() => search('Paris, France')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487701021/eiffel-tower-paris-france-EIFFEL0217.jpg?itok=m0MZOYjh" alt="Paris, France" />
        </div>
        <div className="homeImgContainer" onClick={() => search('Singapore, Singapore')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://api.services.trvl.com/backgrounds/images/singapore_1.jpg" alt="Singapore, Singapore" />
        </div>
        <div className="homeImgContainer" onClick={() => search('Sydney, Australia')} role="menuitem" tabIndex={0}>
          <img className="homeImg" src="https://i.ytimg.com/vi/WNH7Xc_V2w0/maxresdefault.jpg" alt="Sydney, Australia" />
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  search: PropTypes.func.isRequired,
  autocomplete: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  book: PropTypes.func.isRequired,
};

export default HomePage;
