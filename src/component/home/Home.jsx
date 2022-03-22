import React from 'react';
import Schedule from '../schedule/Schedule';
import About from '../about/About';
import Speakers from '../speaker/Speakers';
import Register from '../register/Register';
import PricingTable from '../pricingTable/PricingTable';
import ActionTicket from '../actionTicket/ActionTicket';
import Sponser from '../sponser/Sponser';
import NewsPost from '../newsPost/NewsPost';
import Subscriber from '../subscriber/Subscriber';
import GoogleMap from '../googleMap/GoogleMap';
function Home() {
  return (
    <div>
      {' '}
      <section className='banner bg-banner-one overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              {/* Content Block */}
              <div className='block'>
                {/* Coundown Timer */}
                <div className='timer' />
                <h1>Business</h1>
                <h2>Conference 2017</h2>
                <h6>02-05 July 2017 California</h6>
                {/* Action Button */}
                <a href='#' className='btn btn-white-md'>
                  get ticket now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Speakers />
      <Schedule />
      <Register />
      <PricingTable />
      <ActionTicket />
      <Sponser />
      <NewsPost />
      <Subscriber />
      <GoogleMap />
    </div>
  );
}

export default Home;
