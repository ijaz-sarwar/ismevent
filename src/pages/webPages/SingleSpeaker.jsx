import React, { useEffect } from 'react';

function SingleSpeaker() {
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
                  <h3>Speaker Details</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>Speaker Details</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        <section className='section single-speaker'>
          <div className='container'>
            <div className='block'>
              <div className='row'>
                <div className='col-lg-5 col-md-6 align-self-md-center'>
                  <div className='image-block'>
                    <img
                      src='images/speakers/single-speaker.jpg'
                      className='img-fluid'
                      alt='speaker'
                    />
                  </div>
                </div>
                <div className='col-lg-7 col-md-6 align-self-center'>
                  <div className='content-block'>
                    <div className='name'>
                      <h3>Rafay Bloch</h3>
                    </div>
                    <div className='profession'>
                      <p>Cyber Security Researcher</p>
                    </div>
                    <div className='details'>
                      <p>
                        An information security expert and evangelist listed as
                        `Top 25 threat seekers of 2014` and `The 15 Most
                        Successful Ethical Hackers WorldWide`by SCmagazine for
                        the issues he uncovered with Android.
                        <br />
                      </p>
                      <p>
                        Listed as one of Pakistan's 25 high achievers under 25
                        years of age. Apart from this rafay is also Author of
                        "Ethical Hacking And Pentesting Book". Rafay’s work has
                        also been featured into many national/international
                        magazines, newspapers and forums. These include websites
                        such as SC magazine, Forbes, Yahoo news, Metasploit,
                        threatpost etc. His research has been accepted at
                        international conferences such CSP, SecureBrasil,
                        Defcamp, Blackhat
                      </p>
                    </div>
                    <div className='social-profiles'>
                      <h5>Social Profiles</h5>
                      <ul className='list-inline social-list'>
                        <li className='list-inline-item'>
                          <a href='https://twitter.com/rafaybaloch?lang=en'>
                            <i className='fa fa-twitter' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='https://uk.linkedin.com/in/rafaybaloch'>
                            <i className='fa fa-linkedin' />
                          </a>
                        </li>
                        <li className='list-inline-item'>
                          <a href='https://www.facebook.com/rafaybalochofficialpage'>
                            <i className='fa fa-facebook' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='block-2'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='personal-info'>
                    <h5>Personal Information</h5>
                    <p>
                      An information security expert and evangelist listed as
                      `Top 25 threat seekers of 2014` and `The 15 Most
                      Successful Ethical Hackers WorldWide`by SCmagazine for the
                      issues he uncovered with Android.
                    </p>
                    <ul className='m-0 p-0'>
                      <li>
                        University of Westminster Masters in Cyber Security and
                        Forensics Distinction 2020 - 2021
                      </li>
                      <li>
                        Riphah International University Masters in Information
                        Security 2019 - 2020
                      </li>
                      <li>
                        Bahria University Bachelors In Computer ScienceComputer
                        Science 2010 - 2014
                      </li>
                      <li>
                        Elearn security Penetration Testing Professional (eCPPT)
                        ELearn Security Issued Feb 2017
                      </li>
                      <li>
                        Computer Hacking Forensic Investigator (CHFI) EC-Council
                        Issued Oct 2015
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='skills'>
                    <h5>Personal Skills</h5>
                    <p>
                      Rafay Baloch is now a proud figure of Pakistan. He has
                      used himself for positive purposes and earned name for
                      Pakistan. A security information report publishing agency
                      named Checkmarx has listed Rafay Baloch in White Hat
                      hackers of 2014
                    </p>
                    <div className='skill-bars'>
                      {/* SkillBar */}
                      <div className='skill-bar'>
                        {/* Title */}
                        <p>Cyber Security Researcher</p>
                        {/* Progress Bar */}
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{ width: '90%' }}>
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                      {/* SkillBar */}
                      <div className='skill-bar'>
                        {/* Title */}
                        <p> Published Author on Ethical Hacking</p>
                        {/* Progress Bar */}
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{ width: '85%' }}>
                            <span>85%</span>
                          </div>
                        </div>
                      </div>
                      {/* SkillBar */}
                      <div className='skill-bar'>
                        {/* Title */}
                        <p>Chevening Scholar</p>
                        {/* Progress Bar */}
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{ width: '80%' }}>
                            <span>80%</span>
                          </div>
                        </div>
                      </div>
                      {/* SkillBar */}
                      <div className='skill-bar'>
                        {/* Title */}
                        <p>Penetration Testing</p>
                        {/* Progress Bar */}
                        <div className='progress'>
                          <div
                            className='progress-bar'
                            role='progressbar'
                            style={{ width: '80%' }}>
                            <span>80%</span>
                          </div>
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

export default SingleSpeaker;
