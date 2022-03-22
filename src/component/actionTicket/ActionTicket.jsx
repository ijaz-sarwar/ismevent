import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
function ActionTicket() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div>
      <section className='cta-ticket bg-ticket overlay-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {/* Get ticket info */}
              <div className='content-block'>
                <h2>
                  Get Ticket <span className='alternate'>Now!</span>
                </h2>
                <p>Let's connect with ISM Event</p>
                <StripeCheckout
                  className='App'
                  token={onToken}
                  billingAddress={true}
                  stripeKey='pk_test_51KabWXSEeadvZm8geJGxrZueHdXZ6GFN8ACblrwY6hLTFfdaHlphtPBfquu3CMRREvTEI5xSMPfTmfHf51GF8ok2002IeQQJtE'>
                  <button className='btn btn-main-md'>Buy ticket</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
        <div className='image-block'>
          <img
            src='images/speakers/speaker-ticket.png'
            alt=''
            className='img-fluid'
          />
        </div>
      </section>
    </div>
  );
}

export default ActionTicket;
