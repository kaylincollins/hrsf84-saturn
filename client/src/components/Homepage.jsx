import React from 'react';

function HomePage(props) {
  return (
    <div className="homepage">
      <div className="book">
        <a><img src="/images/book.png" alt="logo" onClick={() => props.book()}/></a>
      </div>
      <div>
        <img className="homeImg" src="https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg" onClick={() => {props.search('New York City, New York')}}/>
        <img className="homeImg" src="https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx" onClick={() => {props.search('San Francisco, California')}}/>
        <img className="homeImg" src="https://thumbs.dreamstime.com/b/iconic-hollywood-sign-los-angeles-california-19251428.jpg" onClick={() => {props.search('Los Angeles, California')}}/>
      </div>
      <br />
      <div className="citysearch">
        <input id="autocomplete" type="text" placeholder="Enter a city here..." onChange={props.autocomplete}/>
        <input id="citybutton" type="submit" value="Go!" onClick={() => {props.search(props.city)}}/>
      </div>
      <div>
      <br />
        <img className="homeImg" src="https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487701021/eiffel-tower-paris-france-EIFFEL0217.jpg?itok=m0MZOYjh"onClick={() => {props.search('Paris, France')}}/>
        <img className="homeImg" src="https://api.services.trvl.com/backgrounds/images/singapore_1.jpg" onClick={() => {props.search('Singapore, Singapore')}}/>
        <img className="homeImg" src="https://i.ytimg.com/vi/WNH7Xc_V2w0/maxresdefault.jpg" onClick={() => {props.search('Sydney, Australia')}}/>
      </div>
    </div>
  );
}

export default HomePage;
