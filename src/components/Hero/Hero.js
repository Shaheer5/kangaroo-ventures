import React from 'react';

export default function Hero() {
  return (
    <section className="banner">
      <div className="bg-banger">
        <div className="container">
          <div className="padding-bottom-64 padding-top-72 mobilePaddingNone">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 col-sm-12 header">
                <div className="padding-bottom-24 Mdcenter">
                  <h1 className="m-0 text-white fontSize56 fontWeight400 lineHeight115 Bakbak">
                    Open your bank account in the U.S
                  </h1>
                </div>
                <div className="padding-bottom-32 mix-blend-mode Mdcenter">
                  <p className="m-0 barlow bannerSubheading fontSize22 fontWeight400 lineHeight140 mix-blend-mode">
                    Setup your business in U.S fast, easy and without any legal hassles. Business formation, virtual
                    office guaranteed
                  </p>
                </div>
                <div className="padding-bottom-24">
                  <div className="bannerInput-box md-marginAuto">
                    <form>
                      <input type="email" placeholder="Your Email" name="" required />
                      <button className="barlow bannerButton fontSize16 fontWeight700 lineHeight150">
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
                <div className="padding-bottom-32 Mdcenter">
                  <span className="barlow bannerForm-text fontSize22 fontWeight500 lineHeight136">
                    Only from <span className="green">$250</span> + <span className="fontSize17 fontWeight400">State Fees</span>
                  </span>
                </div>
                <div className="md-justifyCenter">
                  <img height="63px" width="93px" src="media/Frame.svg" alt="Ui Icon" />
                </div>
              </div>
              <div className="col-lg-6 col-md-8 col-sm-11 anim6">
                <div className="transformX">
                  <div className="position-relative">
                    <picture className="lazyload w-100 rounded10">
                      <source srcset="media/nobody2x.webp" media="(min-width: 960px)" />
                      <source srcset="media/nobody1x.webp" media="(min-width: 1000px)" />
                      <img
                        alt="nobody pitcher"
                        height="395px"
                        width="660px"
                        className="lazy lazyload w-100 h-100 rounded10"
                        src='/media/nobody1x.png'
                        // src="public/media/nobody1x.png"
                      />
                    </picture>
                    <div className="reviewBox1 d-flex align-items-center floatAnimation">
                      <div>
                        <img
                          height="58px"
                          width="58px"
                          src="media/Ellipse 33.png"
                          alt="profile"
                          className="lazy lazyload"
                        />
                      </div>
                      <div className="mx-3">
                        <p className="m-0 barlow reviewHeading fontSize16 fontWeight500">Yousaf Mirza</p>
                        <span className="m-0 barlow reviewText">Grown 250% with KV</span>
                      </div>
                      <div>
                        <img height="48px" width="48px" src="media/yousaf.png" alt="profile" className="lazy lazyload" />
                      </div>
                    </div>
                    <div className="reviewBox2 d-flex justify-content-center align-items-center">
                      <img
                        height="70px"
                        width="261px"
                        src="media/review2.svg"
                        alt="review"
                        className="lazy lazyload floatAnimationX"
                      />
                      <img
                        height="40px"
                        width="40px"
                        src="media/arrow.svg"
                        alt="Rectangle"
                        className="lazy lazyload ms-4 floatAnimationX"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-banner2">
        <div className="container padding-bottom-72">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 padding-bottom-48 Mdcenter">
              <div className="padding-bottom-12">
                <div className="icon-box md-marginAuto">
                  <img height="24px" width="24px" src="media/Physical-Business.svg" alt="Ui Icon" />
                </div>
              </div>
              <div className="padding-bottom-12">
                <h4 className="m-0 barlow text-dark fontSize22 fontWeight500 lineHeight136">
                  Physical Business Address
                </h4>
              </div>
              <p className="m-0 barlow fontSize18 fontWeight400 lineHeight133 bannertext-onLight">
                Kangaroo Ventures will help you solve your international clients' payment issues and problems
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 padding-bottom-48 Mdcenter">
              <div className="padding-bottom-12">
                <div className="icon-box md-marginAuto">
                  <img height="24px" width="24px" src="media/Bank.svg" alt="Ui Icon" />
                </div>
              </div>
              <div className="padding-bottom-12">
                <h4 className="m-0 barlow text-dark fontSize22 fontWeight500 lineHeight136">Bank + Stripe Account</h4>
              </div>
              <p className="m-0 barlow fontSize18 fontWeight400 lineHeight133 bannertext-onLight">
                Analytics show the number of pages visited by the user. From here, the average visitor interest is calculated
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 padding-bottom-48 Mdcenter">
              <div className="padding-bottom-12">
                <div className="icon-box md-marginAuto">
                  <img height="24px" width="24px" src="media/Legal-Business.svg" alt="Ui Icon" />
                </div>
              </div>
              <div className="padding-bottom-12">
                <h4 className="m-0 barlow text-dark fontSize22 fontWeight500 lineHeight136">
                  Legal Business in U.S
                </h4>
              </div>
              <p className="m-0 barlow fontSize18 fontWeight400 lineHeight133 bannertext-onLight">
                Analytics calculate the number of views for each page and allow you to find out the most visited
              </p>
            </div>
          </div>
        </div>
        <div className="container padding-bottom-72">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-11 col-md-12 anim1">
                  <div className="padding-bottom-24">
                    <h2 className="m-0 fontSize44 fontWeight900 lineHeight120 Bakbak heading">
                      Operate your business in the United States.
                    </h2>
                  </div>
                  <div className="padding-bottom-44">
                    <p className="m-0 fontSize22 fontWeight400 lineHeight140 text-dark">
                      We will help you in every step of your journey from a local brand to a multinational brand
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 anim1">
                      <div className="Operate-business-card padding-bottom-48">
                        <div className="iconbox">
                          <img height="24px" width="24px" src="media/Company.svg" alt="Ui Icon" />
                        </div>
                        <div className="padding-left-20">
                          <div className="paddin-bottom-12">
                            <h4 className="m-0 barlow fontSize22 fontWeight500 lineHeight136">Company Incorporation</h4>
                          </div>
                          <p className="m-0 fontSize17 fontWeight400 lineHeight141">
                            Plan, collaborate, and launch your firm in U.S with Kangaroo Ventures
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 anim1">
                      <div className="Operate-business-card padding-bottom-48">
                        <div className="iconbox">
                          <img height="24px" width="24px" src="media/Guidance.svg" alt="Ui Icon" />
                        </div>
                        <div className="padding-left-20">
                          <div className="paddin-bottom-12">
                            <h4 className="m-0 barlow fontSize22 fontWeight500 lineHeight136">
                              Guidance + Help on every step
                            </h4>
                          </div>
                          <p className="m-0 fontSize17 fontWeight400 lineHeight141">
                            We will help you from creating your firm, opening your bank accounts and growing your startup
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 anim1">
                      <div className="Operate-business-card padding-bottom-48">
                        <div className="iconbox">
                          <img height="24px" width="24px" src="media/TaxIssues.svg" alt="Ui Icon" />
                        </div>
                        <div className="padding-left-20">
                          <div className="paddin-bottom-12">
                            <h4 className="m-0 barlow fontSize22 fontWeight500 lineHeight136">
                              No headache of Legal + Tax issues
                            </h4>
                          </div>
                          <p className="m-0 barlow fontSize17 fontWeight400 lineHeight141">
                            Legal and taxation services will help you live without any legal headaches
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 anim6">
              <picture className="lazyload w-100 heightAuto">
                <source srcset="media/Operate-business_2x.webp" media="(min-width: 960px)" />
                <source srcset="media/Operate-business_1x.webp" media="(min-width: 1000px)" />
                <img
                  alt="Operate-business pitcher"
                  height="592px"
                  width="579px"
                  className="lazy lazyload w-100 heightAuto"
                  src="media/Operate-business@1x.png"
                />
              </picture>
              <div className="text-center padding-top-12">
                <span className="imageCaption barlow fontSize15 fontWeight400">Location of Office Space</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}