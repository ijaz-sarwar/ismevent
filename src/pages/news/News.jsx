import React, { useEffect } from 'react';

function News() {
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
                  <h3>News Details</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>News Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*================================
=            News Posts            =
=================================*/}
        <section className='news section'>
          <div className='container'>
            <div className='row mt-30'>
              <div className='col-lg-8 col-md-10 mx-auto'>
                <div className='block'>
                  {/* Article */}
                  <article className='blog-post single'>
                    <div className='post-thumb'>
                      <img
                        src='images/news/single-post.jpg'
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
                        <h3>
                          How to reduce cyber risk in the age of ransom ware.
                        </h3>
                      </div>
                      <div className='post-meta'>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <i className='fa fa-user-o' />
                            <a href='#'>Admin</a>
                          </li>
                          <li className='list-inline-item'>
                            <i className='fa fa-heart-o' />
                            <a href='#'>350</a>
                          </li>
                          <li className='list-inline-item'>
                            <i className='fa fa-comments-o' />
                            <a href='#'>30</a>
                          </li>
                        </ul>
                      </div>
                      <div className='post-details'>
                        <p>
                          Lean how to manage your cyber risks and costs with
                          robust security controls and machine learning
                        </p>
                        <p>
                          As ransom ware attacks can be costly, organizations
                          must be equipped with both traditional and innovative
                          tools in order to avoid huge expenses following an
                          incident
                        </p>
                        <p>
                          There are important best practices that organizations
                          can use to reduce cyber risk and be prepared to avoid
                          the expensive costs of responding to ransomware
                          incidents.
                        </p>
                        <div className='quotes'>
                          <blockquote>
                            Join this webinar to learn: <br />• Why traditional
                            edge security technologies are necessary, but not
                            sufficient <br />• How a robust set of security
                            controls can reduce the save time and cost of a
                            cyberattack <br />• Best practices for addressing
                            ransomware threats – including immutable backups,
                            machine learning-based anomaly detection and
                            automated recovery – in the data centre or cloud
                          </blockquote>
                        </div>
                        <div className='share-block'>
                          <div className='tag'>
                            <p>Tags:</p>
                            <ul className='list-inline'>
                              <li className='list-inline-item'>
                                <a href='#'>Event,</a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>Conference,</a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>Business</a>
                              </li>
                            </ul>
                          </div>
                          <div className='share'>
                            <p>Share:</p>
                            <ul className='social-links-share list-inline'>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-facebook' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-twitter' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-instagram' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-rss' />
                                </a>
                              </li>
                              <li className='list-inline-item'>
                                <a href='#'>
                                  <i className='fa fa-vimeo' />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className='col-lg-4 col-md-10 mx-auto'>
                <div className='sidebar'>
                  {/* Category Widget */}
                  <div className='widget category'>
                    {/* Widget Header */}
                    <h5 className='widget-header'>Categories</h5>
                    <ul className='category-list m-0 p-0'>
                      <li>
                        <a href>
                          Strategy Planning{' '}
                          <span className='float-right'>(6)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Corporate Identity{' '}
                          <span className='float-right'>(9)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Brand Creation<span className='float-right'>(3)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Entertainment<span className='float-right'>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href>
                          Conference<span className='float-right'>(7)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Latest post */}
                  <div className='widget latest-post'>
                    <h5 className='widget-header'>Latest Post</h5>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-one.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href='https://allevents.in/faisalabad/textile-asia-2022-exhibition-faisalabad/200022018653540?ref=cityhome'>
                            Textile Asia 2022 exhibition Faisalabad
                          </a>
                        </h6>
                        <a href='https://allevents.in/faisalabad/textile-asia-2022-exhibition-faisalabad/200022018653540?ref=cityhome'>
                          <span className='fa fa-calendar' />
                          Mar 26, 2022 - Mar 28, 2022
                        </a>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-two.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href='https://allevents.in/faisalabad/real-estate-expo/200022028533308'>
                            Real estate expo in Faisalabad
                          </a>
                        </h6>
                        <p href='https://allevents.in/faisalabad/real-estate-expo/200022028533308'>
                          <span className='fa fa-calendar' />
                          Mar 12, 2022 - Mar 13, 2022
                        </p>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-three.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href='https://allevents.in/faisalabad/pakistan-art-and-craft-expo-2022-3rd-edition/200022114727451?ref=cityhome'>
                            Pakistan Art and Craft Expo 2022 (3rd Edition)
                          </a>
                        </h6>
                        <p href='https://allevents.in/faisalabad/pakistan-art-and-craft-expo-2022-3rd-edition/200022114727451?ref=cityhome'>
                          <span className='fa fa-calendar' />
                          Mar 11 2022
                        </p>
                      </div>
                    </div>
                    {/* Post */}
                    <div className='media'>
                      <img
                        src='images/news/post-thumb-sm-four.jpg'
                        className='img-fluid'
                        alt='post-thumb'
                      />
                      <div className='media-body'>
                        <h6>
                          <a href='https://stayhappening.com/e/family-gala-E2ISU87WGDN'>
                            Family Gala
                          </a>
                        </h6>
                        <p href='https://stayhappening.com/e/family-gala-E2ISU87WGDN'>
                          <span className='fa fa-calendar' />
                          Fri Mar 04 2022
                        </p>
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

export default News;
