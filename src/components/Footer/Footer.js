import React from 'react';

export default function Footer() {
  return (
    <footer className="padding-top-64 padding-bottom-32">
      <div className="container-fluid px-5 mobilePaddingNone">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-12 text-center footerLogo">
            <a href="/">
              <img height="60px" width="284px" src="media/logo.svg" alt="KANGAROO VENTURES" />
            </a>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 padding-bottom-120 Mdcenter Md-padding-bottom">
                <h5 className="m-0 barlow fontSize20 fontWeight500 lineHeight120 text-white footerList-Heading padding-bottom-16">
                  Home
                </h5>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    About us
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Contact us
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Join us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 padding-bottom-120 Mdcenter Md-padding-bottom">
                <h5 className="m-0 barlow fontSize20 fontWeight500 lineHeight120 text-white footerList-Heading padding-bottom-16">
                  Services
                </h5>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Co-Working space
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Virtual Address
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Startup Incorporation
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Start Business in U.S
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 padding-bottom-120 Mdcenter Md-padding-bottom">
                <h5 className="m-0 barlow fontSize20 fontWeight500 lineHeight120 text-white footerList-Heading padding-bottom-16">
                  Legals
                </h5>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Taxation Services
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Refund Policy
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Privacy Policy
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Hire Advisors
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 padding-bottom-120 Mdcenter Md-padding-bottom">
                <h5 className="m-0 barlow fontSize20 fontWeight500 lineHeight120 text-white footerList-Heading padding-bottom-16">
                  Blog
                </h5>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Business Stories
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Digital Store
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Learning
                  </a>
                </div>
                <div className="padding-bottom-16">
                  <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                    Social Media
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright padding-top-32">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 Mcenter ">
              <a href="/" className="footerLink barlow fontSize18 fontWeight500 lineHeight120">
                KangarooVentures © 2023
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mobilePaddingTop">
              <div className="d-flex justify-content-end M-justifyCenter">
                <a href="/" className="social-link">
                  <div>
                    <img height="24px" width="24px" src="media/Facebook.svg" alt="Facebook" />
                  </div>
                </a>
                <a href="/" className="social-link">
                  <div>
                    <img height="24px" width="24px" src="media/Instagram.svg" alt="Instagram" />
                  </div>
                </a>
                <a href="/" className="social-link">
                  <div>
                    <img height="24px" width="24px" src="media/Twitter.svg" alt="Twitter" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
