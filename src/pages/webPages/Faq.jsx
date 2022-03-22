import React, { useEffect } from 'react';

function Faq() {
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
                  <h3>FAQS</h3>
                </div>
                <ol className='breadcrumb p-0 m-0'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item active'>FAQS</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of Page Title  ====*/}
        {/*=========================
=            FAQ            =
==========================*/}
        <section className='section faq'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='section-title'>
                  <h3>
                    Our <span className='alternate'>FAQ</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusm tempor incididunt ut labore dolore magna
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className='accordion-block'>
                  <div id='accordion'>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#One'>
                            <span className='fa fa-plus-circle' />
                            <p> What is ISM Events?</p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='One'
                        className='collapse show'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          ISM Events is an all-in one online solution that
                          caters to different community segments. You can use it
                          to manage events, exhibitions and webinars.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#Two'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              What types of modules are available with ISM
                              Events?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='Two'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          ISM Events compromises of 6 modules - Conference
                          Management, Online Ticketing, Webinar Registration,
                          Wedding management, Family gathering events.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseThree'>
                            <span className='fa fa-plus-circle' />
                            <p>For whom is ISM Events suitable?</p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseThree'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          ISM Events is suitable for event organizers organizing
                          events, conferences, trade shows, exhibitions,
                          sporting event etc.; NGOs, charitable trusts and
                          religious foundations and all those firms and peoples
                          who want event management organization and planning as
                          well.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseFour'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              Are ISM Events's solutions confined to a set
                              region?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseFour'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          yes, ISM Events's solutions are limited to set region
                          as they online event management solutions i.e. you can
                          manage an event in all over Pakistan , but with that
                          we have also going to enhance our services worldwide
                          through our platform.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseFive'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              What types of payment options are available with
                              ISM Events?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseFive'
                        className='collapse'
                        data-parent='#accordion'>
                        <div className='card-body'>
                          ISM Events has a wide array of payment options such as
                          credit cards, debit cards, net banking, cash cards and
                          mobile payments
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='accordion-block'>
                  <div id='accordionTwo'>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseSix'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              Can you manage multiple events using ISM Events's
                              solutions?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseSix'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          Whether you are using the Conference Managemen t
                          solution to organize conferences, the Online Ticketing
                          solution to manage sporting events or the Webinar
                          Management solution to host webinars, the solution has
                          be designed to manage single and multiple events
                          efficiently.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseSeven'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              Do I need to invest in any special equipment to
                              use ISM Events?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseSeven'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          ISM Events is a fully hosted web based solution. You
                          do not need to purchase or install any special
                          hardware or software to use any of the solutions. All
                          you require is a PC with an internet connection.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseEight'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              How does ISM Events Event Management Software
                              increase my ROI?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseEight'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          ISM Events is a technically advanced solution that
                          ensures that precious resource time is not wasted in
                          redundant tasks. The solution focuses on minimal data
                          entry and maximal analysis. With features like 24 x7
                          registration and payment collection, multiple payment
                          options, auto email, personalized invoice, group
                          registration, etc. event management as attendance get
                          a boost, thus increasing ROI.
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        {' '}
                        <h5 className='mb-0'>
                          {' '}
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseNine'>
                            <span className='fa fa-plus-circle' />
                            <p>
                              Do I need to set up bank accounts near an ISM
                              Events office?
                            </p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseNine'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          No, you do not need to set-up a bank account near an
                          ISM Events office. At the time of registration, you
                          are required to provide us with your bank details. We
                          (ISM Events) will send you a cheque or wire your
                          payment as per the payment option selected
                        </div>
                      </div>
                    </div>
                    {/* Collapse */}
                    <div className='card'>
                      {/* Collapse Header */}
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <a
                            style={{ display: 'flex' }}
                            data-toggle='collapse'
                            href='#collapseTen'>
                            <span className='fa fa-plus-circle' />
                            <p>Why should I choose an ISM Events solution?</p>
                          </a>
                        </h5>
                      </div>
                      {/* Collapse Body */}
                      <div
                        id='collapseTen'
                        className='collapse'
                        data-parent='#accordionTwo'>
                        <div className='card-body'>
                          There are many reasons why you should choose an ISM
                          Events solution: One stop solution: Each of ISM
                          Events's solutions are specially designed to manage
                          your business completely online and accelerate your
                          work processes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====  End of FAQ  ====*/}
      </div>
    </div>
  );
}

export default Faq;
