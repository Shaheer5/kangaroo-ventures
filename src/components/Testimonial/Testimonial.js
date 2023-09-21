import React from 'react'

export default function Testimonial() {
  return (
    <section className="testimonial padding-top-96 padding-bottom-96">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center padding-bottom-24">
                    <div className="testimonial-profile">
                      <img height="150px" width="150px" src="media/profile1.png" alt="Profile" className="lazy lazyload" />
                    </div>
                  </div>
                  <div className="padding-bottom-104 text-center">
                    <p className="m-0 barlow fontSize22 fontWeight400 lineHeight140 testimonial-text">
                      “We had two goals for our first review cycle - 100% completion and higher quality reviews. Launching
                      Small helped us achieve both, with employees receiving on average three and a half times the number
                      of 360 feedback submissions vs our previous review process.”
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="barlow fontSize22 fontWeight500 lineHeight136 testimonial-Name">
                      Andrzej Ogonowski
                    </h4>
                    <p className="barlow fontSize17 fontWeight400 lineHeight141 testimonial-company">
                      Co-Founder and Head of Platform, Growsari
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center padding-bottom-24">
                    <div className="testimonial-profile">
                      <img height="150px" width="150px" src="media/profile1.png" alt="Profile" className="lazy lazyload" />
                    </div>
                  </div>
                  <div className="padding-bottom-104 text-center">
                    <p className="m-0 barlow fontSize22 fontWeight400 lineHeight140 testimonial-text">
                      “We had two goals for our first review cycle - 100% completion and higher quality reviews. Launching
                      Small helped us achieve both, with employees receiving on average three and a half times the number
                      of 360 feedback submissions vs our previous review process.”
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="barlow fontSize22 fontWeight500 lineHeight136 testimonial-Name">
                      Andrzej Ogonowski
                    </h4>
                    <p className="barlow fontSize17 fontWeight400 lineHeight141 testimonial-company">
                      Co-Founder and Head of Platform, Growsari
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center padding-bottom-24">
                    <div className="testimonial-profile">
                      <img height="150px" width="150px" src="media/profile1.png" alt="Profile" className="lazy lazyload" />
                    </div>
                  </div>
                  <div className="padding-bottom-104 text-center">
                    <p className="m-0 barlow fontSize22 fontWeight400 lineHeight140 testimonial-text">
                      “We had two goals for our first review cycle - 100% completion and higher quality reviews. Launching
                      Small helped us achieve both, with employees receiving on average three and a half times the number
                      of 360 feedback submissions vs our previous review process.”
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="barlow fontSize22 fontWeight500 lineHeight136 testimonial-Name">
                      Andrzej Ogonowski
                    </h4>
                    <p className="barlow fontSize17 fontWeight400 lineHeight141 testimonial-company">
                      Co-Founder and Head of Platform, Growsari
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <hr className="transition-timer-carousel-progress-bar animate" />
              </div>
              <div className="carousel-indicators">
                <button data-bs-target="#slider" data-bs-slide-to="0" className="active"></button>
                <button data-bs-target="#slider" data-bs-slide-to="1"></button>
                <button data-bs-target="#slider" data-bs-slide-to="2"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
