// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
//

// const Checkout = () => (
//   const onToken = (token) => {
//   console.log(token);
//   };
// return(
//   <StripeCheckout
//     className='App'
//     token={onToken}
//     billingAddress={true}
//     stripeKey='pk_test_51KabWXSEeadvZm8geJGxrZueHdXZ6GFN8ACblrwY6hLTFfdaHlphtPBfquu3CMRREvTEI5xSMPfTmfHf51GF8ok2002IeQQJtE'>
//     {/* <button
//       style={{
//         background: '#ff6600',
//         border: 'none',
//         color: 'white',
//       }}>
//       Buy Ticket
//     </button> */}
//   </StripeCheckout>
// );
// export default Checkout;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
function Checkout() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      className='App'
      token={onToken}
      billingAddress={true}
      stripeKey='pk_test_51KabWXSEeadvZm8geJGxrZueHdXZ6GFN8ACblrwY6hLTFfdaHlphtPBfquu3CMRREvTEI5xSMPfTmfHf51GF8ok2002IeQQJtE'>
      {/* <button
      style={{
//         background: '#ff6600',
//         border: 'none',
//         color: 'white',
//       }}>
//       Buy Ticket
//     </button> */}
    </StripeCheckout>
  );
}

export default Checkout;
