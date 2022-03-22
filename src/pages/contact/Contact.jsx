import React, { useEffect } from 'react';
import Register from '../../component/register/Register';
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <section className='page-title bg-title overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <div className='title'>
                  <h3>Contact Us</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        <section className='section contact-form'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    Tell Us <span className='alternate'>Your Requirement</span>
                  </h3>
                  <p>Have you an individual plan? Please let us know.</p>
                </div>
              </div>
            </div>
            {/* <form action='#' className='row'>
              <div className='col-md-6'>
                <input
                  type='text'
                  className='form-control main'
                  name='name'
                  id='name'
                  placeholder='Name'
                />
              </div>
              <div className='col-md-6'>
                <input
                  type='email'
                  className='form-control main'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </div>
              <div className='col-md-12'>
                <input
                  type='text'
                  className='form-control main'
                  name='phone'
                  id='phone'
                  placeholder='Phone'
                />
              </div>
              <div className='col-md-12'>
                <textarea
                  name='message'
                  id='message'
                  className='form-control main'
                  rows={10}
                  placeholder='Your Message'
                  defaultValue={''}
                />
              </div>
              <div className='col-12 text-center'>
                <button type='submit' className='btn btn-main-md'>
                  Send Message
                </button>
              </div>
            </form> */}
          </div>
        </section>
        <Register />
      </div>
    </div>
  );
}

export default Contact;
