// import { Component, React } from 'react';

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// export class GoogleMap extends Component {
//   fetchPlaces(mapProps, map) {
//     const { google } = mapProps;
//     const service = new google.maps.places.PlacesService(map);
//     // ...
//   }
//   render() {
//     const style = {
//       width: '100%',
//       height: '30%',
//       marginTop: 50,
//     };
//     return (
//       <>
//         <Map
//           google={this.props.google}
//           zoom={14}
//           style={style}
//           initialCenter={{
//             lat: 31.4161,
//             lng: 73.07,
//           }}
//           onReady={this.fetchPlaces}>
//           <Marker onClick={this.onMarkerClick} name={'Current location'} />

//           <InfoWindow onClose={this.onInfoWindowClose}>
//             <div></div>
//           </InfoWindow>
//         </Map>
//       </>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDaCs6JdBmk3QL5CPo5hYQj5cNpmTSZIBg',
// })(App);

import React from 'react';

function GoogleMap() {
  return (
    <div>
      <section className='map bg-googleMap '>
        {/* Google Map */}
        <div id='map' />
        <div className='address-block '>
          <h4>ISM Event Managment</h4>
          <ul className='address-list p-0 m-0'>
            <li>
              <i className='fa fa-home' />
              <span>
                Government college University, <br />
                Faisalabad, Pakistan.
              </span>
            </li>
            <li>
              <i className='fa fa-phone' />
              <span>+92 3465630541</span>
            </li>
          </ul>
          <a
            href='https://www.google.com/maps/place/Government+College+University+Faisalabad/@31.4160721,73.0699918,15z/data=!4m5!3m4!1s0x0:0x39e814b7f874c28d!8m2!3d31.4160721!4d73.0699918'
            className='btn btn-white-md'>
            Get Direction
          </a>
        </div>
      </section>
    </div>
  );
}

export default GoogleMap;
