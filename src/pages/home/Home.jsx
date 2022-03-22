import React, { useEffect } from 'react';
import About from './../../component/about/About';
import Speakers from './../../component/speaker/Speakers';
import Schedule from './../../component/schedule/Schedule';
import Register from './../../component/register/Register';
import PricingTable from './../../component/pricingTable/PricingTable';
import ActionTicket from './../../component/actionTicket/ActionTicket';
import Sponser from './../../component/sponser/Sponser';
import NewsPost from './../../component/newsPost/NewsPost';
import StripeCheckout from 'react-stripe-checkout';
function Home() {
  const onToken = (token) => {
    console.log(token);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <h1>Cyber Security</h1>
                <h2>Conference 2022</h2>
                <h6>02-05 July 2022 Faisalabad</h6>
                {/* Action Button */}
                {/* <a href='#' className='btn btn-white-md'>
                  get ticket now
                </a> */}

                <StripeCheckout
                  className='App'
                  token={onToken}
                  billingAddress={true}
                  stripeKey='pk_test_51KabWXSEeadvZm8geJGxrZueHdXZ6GFN8ACblrwY6hLTFfdaHlphtPBfquu3CMRREvTEI5xSMPfTmfHf51GF8ok2002IeQQJtE'>
                  <button className='btn btn-white-md'>get ticket now</button>
                </StripeCheckout>
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
    </div>
  );
}

export default Home;
