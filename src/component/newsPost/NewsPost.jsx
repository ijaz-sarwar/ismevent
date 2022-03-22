import React from 'react';

function NewsPost() {
  return (
    <div>
      <section className='news section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3>
                  ISM Event <span className='alternate'>News</span>
                </h3>
                <p>Stay tunned with ISM For coming events</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <img
                    src='images/news/post-thumb-one.jpg'
                    alt='post-image'
                    className='img-fluid'
                  />
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>Jul</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <p>
                      How the Pandemic changed the public perception about
                      ground bussiness?
                    </p>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        Admi
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        350
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        30
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <img
                    src='images/news/post-thumb-two.jpg'
                    alt='post-image'
                    className='img-fluid'
                  />
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>May</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <p>
                      The Future of Sustainable Business Travel in the Meetings
                      Industry.
                    </p>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        Admin
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        350
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        30
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 m-md-auto col-sm-8 col-10 m-auto'>
              <div className='blog-post'>
                <div className='post-thumb'>
                  <img
                    src='images/news/post-thumb-three.jpg'
                    alt='post-image'
                    className='img-fluid'
                  />
                </div>
                <div className='post-content'>
                  <div className='date'>
                    <h4>
                      20<span>Apr</span>
                    </h4>
                  </div>
                  <div className='post-title'>
                    <p>
                      Destinations International Helms Meetings Industry
                      Diversity Study
                    </p>
                  </div>
                  <div className='post-meta'>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <i className='fa fa-user-o' />
                        Admin
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-heart-o' />
                        350
                      </li>
                      <li className='list-inline-item'>
                        <i className='fa fa-comments-o' />
                        30
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPost;
