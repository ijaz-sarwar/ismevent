import React, { useState, useEffect } from 'react';

function Schedule() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeClass, setActiveClass] = useState(1);
  return (
    <div>
      <section className='section schedule'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-title'>
                <h3>
                  Event <span className='alternate'>Schedule</span>
                </h3>
                <p>See what we match for you</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='schedule-tab'>
                <ul className='nav nav-pills text-center'>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeClass === 1 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => setActiveClass(1)}>
                      Day-01
                      <span>20 june 2022</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeClass === 2 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => setActiveClass(2)}>
                      Day-02
                      <span>21 june 2022</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className={`nav-link ${
                        activeClass === 3 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => setActiveClass(3)}>
                      Day-03
                      <span>22 june 2022</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='schedule-contents bg-schedule'>
                <div className='tab-content' id='pills-tabContent'>
                  {activeClass === 1 ? (
                    <div
                      className='tab-pane fade show active schedule-item'
                      id='nov20'>
                      {/* Headings */}
                      <ul className='m-0 p-0'>
                        <li className='headings'>
                          <div className='time'>Time</div>
                          <div className='speaker'>Speaker</div>
                          <div className='subject'>Subject</div>
                          <div className='venue'>Venue</div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>9.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-one.jpg'
                                alt='speaker-thumb-one'
                              />
                              <span className='name'>Ramzan Talib</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>
                              DataBase Management System
                            </div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>10.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-two.jpg'
                                alt='speaker-thumb-two'
                              />
                              <span className='name'>Umar Sarwar</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Information Security</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>12.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-three.jpg'
                                alt='speaker-thumb-three'
                              />
                              <span className='name'>Irfan Khan</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Compiler Construction</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>2.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-four.jpg'
                                alt='speaker-thumb-four'
                              />
                              <span className='name'>Shaikh Amir</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Operating System</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium </div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>3.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-five.jpg'
                                alt='speaker-thumb-five'
                              />
                              <span className='name'>Rao Sohail</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>
                              Artificial Intelligence
                            </div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>3.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-six.jpg'
                                alt='speaker-thumb-six'
                              />
                              <span className='name'>Nafees Ayub</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Computer Networks</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : activeClass === 2 ? (
                    <div className='schedule-item'>
                      {/* Headings */}
                      <ul className='m-0 p-0'>
                        <li className='headings'>
                          <div className='time'>Time</div>
                          <div className='speaker'>Speaker</div>
                          <div className='subject'>Subject</div>
                          <div className='venue'>Venue</div>
                        </li>{' '}
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>11.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-four.jpg'
                                alt='speaker-thumb-four'
                              />
                              <span className='name'>Shaikh Amir</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Operating System</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium </div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>12.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-five.jpg'
                                alt='speaker-thumb-five'
                              />
                              <span className='name'>Rao Sohail</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>
                              Artificial Intelligence
                            </div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>1.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-six.jpg'
                                alt='speaker-thumb-six'
                              />
                              <span className='name'>Nafees Ayub</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Computer Networks</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>2.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-one.jpg'
                                alt='speaker-thumb-one'
                              />
                              <span className='name'>Ramzan Talib</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>
                              DataBase Management System
                            </div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>3.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-two.jpg'
                                alt='speaker-thumb-two'
                              />
                              <span className='name'>Umar Sarwar</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Information Security</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>4.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-three.jpg'
                                alt='speaker-thumb-three'
                              />
                              <span className='name'>Irfan Khan</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Compiler Construction</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : activeClass === 3 ? (
                    <div className='schedule-item'>
                      {/* Headings */}
                      <ul className='m-0 p-0'>
                        <li className='headings'>
                          <div className='time'>Time</div>
                          <div className='speaker'>Speaker</div>
                          <div className='subject'>Subject</div>
                          <div className='venue'>Venue</div>
                        </li>{' '}
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>11.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-seven.jpg'
                                alt='speaker-thumb-four'
                              />
                              <span className='name'>SamiUllah</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Web Designing</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium </div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>12.00 AM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-eight.jpg'
                                alt='speaker-thumb-five'
                              />
                              <span className='name'>Aater Javeed</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Theory of Automata</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>1.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-six.jpg'
                                alt='speaker-thumb-six'
                              />
                              <span className='name'>Nafees Ayub</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Computer Networks</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>2.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-one.jpg'
                                alt='speaker-thumb-one'
                              />
                              <span className='name'>Ramzan Talib</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>
                              DataBase Management System
                            </div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>3.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-two.jpg'
                                alt='speaker-thumb-two'
                              />
                              <span className='name'>Umar Sarwar</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Information Security</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                        {/* Schedule Details */}
                        <li className='schedule-details'>
                          <div className='block'>
                            {/* time */}
                            <div className='time'>
                              <i className='fa fa-clock-o' />
                              <span className='time'>4.00 PM</span>
                            </div>
                            {/* Speaker */}
                            <div className='speaker'>
                              <img
                                src='images/speakers/speaker-thumb-three.jpg'
                                alt='speaker-thumb-three'
                              />
                              <span className='name'>Irfan Khan</span>
                            </div>
                            {/* Subject */}
                            <div className='subject'>Compiler Construction</div>
                            {/* Venue */}
                            <div className='venue'>Auditorium</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
