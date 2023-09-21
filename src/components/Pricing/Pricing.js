import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <section className="pricing padding-top-104 padding-bottom-48">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9 col-sm-12 text-center">
            <div className="text-center">
              <h2 className="m-0 Bakbak fontSize44 fontWeight400 lineHeight120 heading">
                Choose your plan that is right for you
              </h2>
            </div>
            <div className="row justify-content-center padding-top-24">
              <div className="col-lg-10 col-md-12 text-center">
                <p
                  className="m-0 barlow  fontSize22 fontWeight400 lineHeight140 heading3 padding-bottom-8 pricing-SubHeading">
                  We have two tiers and we provide 30% Discount on Yearly Plans for all our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row padding-top-32">
          <div className="col-12 text-center">
            <div className="nav nav-pills pricingTabs">
              <Link data-bs-toggle="pill" id="monthly"
                className="active barlow  fontSize16 fontWeight700 lineHeight150">Monthly</Link>
              <Link data-bs-toggle="pill" id="yearly" className="barlow  fontSize16 fontWeight700 lineHeight150">Yearly</Link>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-center padding-top-24 anim1">
              <div className="col-lg-5 col-md-6 col-sm-12 padding-bottom-48">
                <div className="row justify-content-end">
                  <div className="col-lg-11 col-md-12">
                    <div className="pricing-CardWhite">
                      <div className="padding-bottom-24">
                        <span className="Bakbak fontSize18 fontWeight400 lineHeight115 lable">
                          START TIER
                        </span>
                      </div>
                      <div className="padding-bottom-16">
                        <p className="m-0 barlow  fontSize17 fontWeight400 lineHeight141 pricing-CardWhite-text">
                          For all individuals and starters who want to start with Virtual Business.
                        </p>
                      </div>
                      <div className="monthlyPrice">
                        <div className="d-flex align-items-center padding-bottom-48">
                          <span className="pricing-CardWhite-price Bakbak fontSize56 fontWeight400 lineHeight115">
                            $23/
                          </span>
                          <span className=" barlow  fontSize22 fontWeight400 lineHeight140 text-dark">
                            per month
                          </span>
                        </div>
                      </div>
                      <div className="yearlyPrice">
                        <div className="d-flex align-items-center padding-bottom-48">
                          <span className="pricing-CardWhite-price Bakbak fontSize56 fontWeight400 lineHeight115">
                            $50/
                          </span>
                          <span className=" barlow  fontSize22 fontWeight400 lineHeight140 text-dark">
                            per year <span className="priceOff-White  fontSize15">(20% off)</span>
                          </span>
                        </div>
                      </div>
                      <hr className="pricing-divider m-0" />
                        <div className="padding-top-32 padding-bottom-48">
                          <ul className="p-0 m-0 pricingList ">
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-black.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  Real Street Address
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-black.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  Unique Suite Number
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-black.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  Online Mailbox 24/7
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-black.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  Unlimited Mails & Scans Free storage
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-black.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  Virtual Phone Number
                                </p>
                                <span className="badgeOnWhite ms-3">Coming soon</span>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/cross.svg" alt="cross" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardWhite-text">
                                  No Live Call Answering
                                </p>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button className="w-100 priceBtn barlow  fontSize15 fontWeight700 lineHeight150 text-white">
                            Start free 14-day Trial
                          </button>
                        </div>
                        <div className="text-center">
                          <span className=" barlow  fontSize15 fontWeight700 lineHeight150 credit-card-text mt-1">
                            No credit card required
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 padding-bottom-48">
                <div className="row">
                  <div className="col-lg-11 col-md-12">
                    <div className="pricing-CardBlue">
                      <div className="padding-bottom-24">
                        <span className="Bakbak fontSize18 fontWeight400 lineHeight115 lable">
                          START TIER
                        </span>
                      </div>
                      <div className="padding-bottom-16">
                        <p className="m-0 barlow  fontSize17 fontWeight400 lineHeight141 pricing-CardBlue-text">
                          For all individuals and starters who want to start with Virtual Business.
                        </p>
                      </div>
                      <div className="monthlyPrice">
                        <div className="d-flex align-items-center padding-bottom-48">
                          <span className="pricing-CardBlue-price Bakbak fontSize56 fontWeight400 lineHeight115">
                            $89/
                          </span>
                          <span className=" barlow  fontSize22 fontWeight400 lineHeight140 pricing-CardBlue-text">
                            per month
                          </span>
                        </div>
                      </div>
                      <div className="yearlyPrice">
                        <div className="d-flex align-items-center padding-bottom-48">
                          <span className="pricing-CardBlue-price Bakbak fontSize56 fontWeight400 lineHeight115">
                            $150/
                          </span>
                          <span className=" barlow  fontSize22 fontWeight400 lineHeight140 pricing-CardBlue-text">
                            per year <span className="priceOff-blue  fontSize15">(20% off)</span>
                          </span>
                        </div>
                      </div>
                      <hr className="pricing-divider m-0" />
                        <div className="padding-top-32 padding-bottom-48">
                          <ul className="p-0 m-0 pricingList ">
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  Everything in Starter Tier
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  24/7 Customer Support
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  Unlimited Mails & Scans Free storage
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  Virtual Phone Number
                                </p>
                                <span className="badgeOnBlue ms-3">Coming soon</span>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="check" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  Live Call Answering
                                </p>
                            </li>
                            <li className="d-flex align-items-center  padding-bottom-12">
                              <img height="22px" width="22px" src="media/check-white.svg" alt="cross" className="me-2" />
                                <p className="m-0 barlow  fontSize15 fontWeight400 lineHeight162 pricing-CardBlue-text">
                                  1-dedicated Phone Number
                                </p>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <button className="w-100 priceBtn barlow  fontSize15 fontWeight700 lineHeight150 text-white">
                            Start free 14-day Trial
                          </button>
                        </div>
                        <div className="text-center">
                          <span className=" barlow  fontSize15 fontWeight700 lineHeight150 credit-cardBlue-text mt-1">
                            No credit card required
                          </span>
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
  );
}
