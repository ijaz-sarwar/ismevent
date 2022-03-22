import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Subscriber() {
  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };
  const notify = () =>
    toast.success('Congratulation You Successfully  Subscribe The Channel');
  return (
    <div>
      <section className='cta-subscribe bg-subscribe overlay-dark'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mr-auto'>
              {/* Subscribe Content */}
              <div className='content'>
                <h3>
                  Subscribe to Our <span className='alternate'>Newsletter</span>
                </h3>
                <p>Get in touch with our event plans</p>
              </div>
            </div>
            <div className='col-md-6 ml-auto align-self-center'>
              {/* Subscription form */}
              <form onSubmit={handleSubmit} className='row'>
                <div className='col-lg-8 col-md-12'>
                  <input
                    type='email'
                    className='form-control main white mb-lg-0'
                    placeholder='Email'
                    required='true'
                  />
                </div>
                <div className='col-lg-4 col-md-12'>
                  <div className='subscribe-button'>
                    <button className='btn btn-main-md'>Subscribe</button>
                    <ToastContainer
                      position='top-center'
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscriber;
