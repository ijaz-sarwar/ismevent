import React from 'react';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <div>
      <section className='registration'>
        <div className='container-fuild p-0'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 p-0'>
              <div className='service-block bg-service overlay-primary text-center'>
                <div className='row no-gutters'>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-microphone' />
                      <h5>8 Speakers</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-flag' />
                      <h5>500 + Seats</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-ticket' />
                      <h5>300 tickets</h5>
                    </div>
                  </div>
                  <div className='col-6'>
                    {/* Service item */}
                    <div className='service-item'>
                      <i className='fa fa-calendar' />
                      <h5>3 days event</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
