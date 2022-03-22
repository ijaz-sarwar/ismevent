import React, { useEffect } from 'react';
import Speakers from '../../component/speaker/Speakers';
import About from './../../component/about/About';

function AboutUs() {
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
                  <h3>About Us</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>About US</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*===========================
=            About            =
============================*/}

        <About />
      </div>
      <div>
        <Speakers />
        {/*====  End of Speakers  ====*/}
        {/*==================================Testimonial==================================*/}
        <section className='section testimonial'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    What People <span className='alternate'>Say?</span>
                  </h3>
                  <p>
                    Reduce the risk of accidental data breaches & protect your
                    business from malicious threats. Protect your data against
                    modern threats without handcuffing your employees
                    productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt-20'>
              <div className='col-lg-4 col-md-6'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Thanks team ism for Providing strategic planning, stunning
                      design and superior production and management services for
                      events.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals 1.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Jack</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Harnessing creativity and perfecting the craft with
                      practical experience providing great services for event
                      planning Really like to work with team ism.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals 2.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Robert Smith</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Distributed Database</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mx-auto'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Their innate style and inherent knowledge can be seen and
                      measured in execution of originality in design and
                      concept.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals 3.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Adam Smith</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Testimonial  ====*/}
        {/*==============================================
=            Call to Action Subscribe            =
===============================================*/}
        <section className='cta-subscribe bg-subscribe overlay-dark'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 mr-auto'>
                {/* Subscribe Content */}
                <div className='content'>
                  <h3>
                    Subscribe to Our{' '}
                    <span className='alternate'>Newsletter</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusm tempor
                  </p>
                </div>
              </div>
              <div className='col-md-6 ml-auto align-self-center'>
                {/* Subscription form */}
                <form action='#' className='row'>
                  <div className='col-lg-8 col-md-12'>
                    <input
                      type='email'
                      className='form-control main white mb-lg-0'
                      placeholder='Email'
                    />
                  </div>
                  <div className='col-lg-4 col-md-12'>
                    <div className='subscribe-button'>
                      <button className='btn btn-main-md'>Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Call to Action Subscribe  ====*/}
        {/*================================
=            Google Map            =
=================================*/}
        <section className='map'>
          {/* Google Map */}
          <div id='map' />
          <div className='address-block'>
            <h4>Docklands Convention</h4>
            <ul className='address-list p-0 m-0'>
              <li>
                <i className='fa fa-home' />
                <span>
                  Street Address, Location, <br />
                  City, Country.
                </span>
              </li>
              <li>
                <i className='fa fa-phone' />
                <span>[00] 000 000 000</span>
              </li>
            </ul>
            <a href='#' className='btn btn-white-md'>
              Get Direction
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
