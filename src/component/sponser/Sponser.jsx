import React from 'react';

function Sponser() {
  return (
    <div>
      <section className='sponsors section bg-sponsors overlay-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3>
                  Our <span className='alternate'>Sponsors</span>
                </h3>
                <p>With these make it possible</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              {/* Title */}
              <div className='sponsor-title text-center'>
                <h5>Platinum Sponsors</h5>
              </div>
              <div className='block text-center'>
                {/* Sponsors image list */}
                <ul className='list-inline sponsors-list'>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/pt-spon-two.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/Sponser1.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/Sponser2.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/Sponser3.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                </ul>
              </div>
              {/* Title */}
              <div className='sponsor-title text-center'>
                <h5>Gold Sponsors</h5>
              </div>
              <div className='block text-center'>
                {/* Sponsors image list */}
                <ul className='list-inline sponsors-list'>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/Sponser1.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/pt-spon-two.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <div className='image-block text-center'>
                      <img
                        src='images/sponsors/Sponser2.jpg'
                        alt='sponsors-logo'
                        className='img-fluid'
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className='sponsor-btn text-center'>
                <a
                  href='https://docs.google.com/forms/d/1GJORvk51-mRvqWXPil8DAN_zR7YKKGzZQUvEetQxPNE/'
                  className='btn btn-main-md'>
                  Become a sponsor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponser;
