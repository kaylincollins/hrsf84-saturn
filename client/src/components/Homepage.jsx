import React from 'react';
import { Link } from 'react-router-dom'

function HomePage(props) {
  return (
    <div>
      <div>
        <img src="https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg" onClick={() => {props.search('New York City, New York')}}/>
        <img src="https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx" onClick={() => {props.search('San Francisco, California')}}/>
        <img src="https://thumbs.dreamstime.com/b/iconic-hollywood-sign-los-angeles-california-19251428.jpg" onClick={() => {props.search('Los Angeles, California')}}/>
      </div>
      <br />
      <input type="text" placeholder="Enter a city here..." onChange={props.handleCityChange}/>
      <input type="submit" value="Go!" onClick={() => {props.search(props.city)}}/>
      <div>
      <br />
        <img src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1487701021/eiffel-tower-paris-france-EIFFEL0217.jpg?itok=m0MZOYjh"onClick={() => {props.search('Paris, France')}}/>
        <img src="https://api.services.trvl.com/backgrounds/images/singapore_1.jpg" onClick={() => {props.search('Singapore, Singapore')}}/>
        <img src="https://i.ytimg.com/vi/WNH7Xc_V2w0/maxresdefault.jpg" onClick={() => {props.search('Sydney, Australia')}}/>
      </div>
    </div>
  );
}

export default HomePage;

// <Link to='/select'>Submit!</Link></button>
