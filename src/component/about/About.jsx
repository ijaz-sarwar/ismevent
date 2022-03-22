import React from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
function About() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div>
      <section className='section about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 align-self-center'>
              <div className='image-block bg-about'>
                <img
                  className='img-fluid'
                  src='images/speakers/featured-speaker.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='col-lg-8 col-md-6 align-self-center'>
              <div className='content-block'>
                <h2>
                  About The <span className='alternate'>ISM Events</span>
                </h2>
                <div className='description-one'>
                  <p>
                    We Provide dedicated, sincerely committed and highly
                    profiled events management services, specializing in
                    planning and coordinating events. As we are being considered
                    one of the top Event Planner and Event Management Companies
                    in Pakistan.
                  </p>
                </div>
                <div className='description-two'>
                  <p>
                    We pride ourselves in putting on the bespoke event around
                    Pakistan. any type of events, which could be Family Events,
                    like Weddings, Get-Together, Corporate Events, Gala Nights,
                    Conferences, Exhibitions, Seminars or any other type of
                    Event
                  </p>
                </div>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <StripeCheckout
                      className='App'
                      token={onToken}
                      billingAddress={true}
                      stripeKey='pk_test_51KabWXSEeadvZm8geJGxrZueHdXZ6GFN8ACblrwY6hLTFfdaHlphtPBfquu3CMRREvTEI5xSMPfTmfHf51GF8ok2002IeQQJtE'>
                      <button className='btn btn-main-md'>Buy ticket</button>
                    </StripeCheckout>
                  </li>
                  <li className='list-inline-item'>
                    <Link to='/about' className='btn btn-transparent-md'>
                      Read more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
