import React, { useEffect } from 'react';

function Testimonial() {
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
                  <h3>Our Testimonial</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Our Testimonial</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*=================================
=            Testimonial            =
==================================*/}
        <section className='section testimonial'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    What People <span className='alternate'>Say?</span>
                  </h3>
                  <p>Why consider ISM as your next event planner</p>
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
                          <p>Sunny Ali</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Ecommerce</p>
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
                      WE HAD A FABULOUS TIME!!!! I know I may be a bit biased
                      but I think that was the best event ever!! Seriously
                      everything was perfect. Everyone had such an amazing time.
                      We didn’t want it to end!!.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals4.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Hisham Sarwar</p>
                        </div>
                        {/* Profession */}
                        <div className='profession'>
                          <p>Freelancer</p>
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
                      First, I have a whole new definition for what a world
                      class event really is… The difference between our event
                      and every other I have ever experienced is summarized in
                      one word: magic. A magical event ever.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals5.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Ali Hussain</p>
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
              <div className='col-lg-4 col-md-6 mx-auto'>
                {/* Testimonial */}
                <div className='testimonial-item'>
                  {/* Given Comment */}
                  <div className='comment'>
                    <p>
                      Team ISM, I don’t have the words to express the gratitude
                      that I have for the unbelievable feat that you pulled off
                      in seven days. I keep thinking of words to describe the
                      experience, but remarkable, unreal, incredible,
                      spectacular ever.
                    </p>
                  </div>
                  <div className='person'>
                    <div className='media'>
                      {/* Person Image */}
                      <img
                        src='images/speakers/testominals6.jpg'
                        alt='person-image'
                      />
                      <div className='media-body'>
                        {/* Person Name */}
                        <div className='name'>
                          <p>Nasir Madni</p>
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
      </div>
    </div>
  );
}

export default Testimonial;
