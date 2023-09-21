import React from 'react';

export default function WhyUs() {
  return (
    <section className="why-section padding-bottom-48">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-sm-12 text-center">
            <div className="text-center">
              <h2 className="m-0 Bakbak fontSize44 fontWeight400 lineHeight120 heading">
                Why Kangaroo Ventures?
              </h2>
            </div>
            <div className="row justify-content-center padding-top-24">
              <div className="col-lg-9 col-md-12 text-center">
                <p className="m-0 barlow  fontSize22 fontWeight400 lineHeight140 heading3 padding-bottom-8 dark">
                  Because we take your headache and work for your ALL-IN-ONE solution to make your young startup grow.
                  Also, we have <a href="your-link-here" className="subHeading-link">Limited Desk Space</a>
                </p>
              </div>
            </div>
            <div className="laptopHide">
              <div className="row padding-top-24 justify-content-center padding-bottom-32">
                <div className="col-10">
                  <div className="co-working ">
                    <div className="text-center padding-bottom-8">
                      <h4 className="m-0 Bakbak fontSize36 fontWeight400 lineHeight120 coWorkingHeading">
                        Co-Working
                      </h4>
                    </div>
                    <div className="padding-bottom-20">
                      <p className="barlow  fontSize16 fontWeight700 lineHeight150 coWorkingText">
                        Starting from $200/per seat
                      </p>
                    </div>
                    <button className="coWorkingBtn barlow  fontSize16 fontWeight700 lineHeight150">
                      Book your seat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid padding-top-56 px-5 mobilePaddingNone">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                <div className="why-imageBox">
                  <picture className=" lazyload w-100 responisveImage">
                    <source data-srcset="media/why1@2x.webp" media="(min-width: 960px)" />
                    <source data-srcset="media/why1@1x.webp" media="(min-width: 1000px)" />
                    <img alt="Kangaroo pitcher" height="321px" width="586px" className=" lazy lazyload w-100 responisveImage"
                      src="media/why1@1x.png" />
                  </picture>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="why-imageBox">
                  <picture className=" lazyload  w-100 responisveImage">
                    <source data-srcset="media/why2@2x.webp" media="(min-width: 960px)" />
                    <source data-srcset="media/why2@1x.webp" media="(min-width: 1000px)" />
                    <img alt="Kangaroo pitcher" height="321px" width="356px" className=" lazy lazyload w-100 responisveImage"
                      src="media/why2@1x.png" />
                  </picture>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="why-imageBox">
                  <picture className=" lazyload  w-100 responisveImage">
                    <source data-srcset="media/why3@2x.webp" media="(min-width: 960px)" />
                    <source data-srcset="media/why3@1x.webp" media="(min-width: 1000px)" />
                    <img alt="Kangaroo pitcher" height="321px" width="395px" className=" lazy lazyload w-100 responisveImage"
                      src="media/why3@1x.png" />
                  </picture>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                <div className="why-imageBox position-relative">
                  <picture className=" lazyload  w-100 responisveImage">
                    <source data-srcset="media/why4@2x.webp" media="(min-width: 960px)" />
                    <source data-srcset="media/why4@1x.webp" media="(min-width: 1000px)" />
                    <img alt="Kangaroo pitcher" height="321px" width="547px" className=" lazy lazyload w-100 responisveImage"
                      src="media/why4@1x.png" />
                  </picture>
                  <div className="co-working  coworkingPosotion mobile-hide-box">
                    <div className="text-center padding-bottom-8">
                      <h4 className="m-0 Bakbak fontSize36 fontWeight400 lineHeight120 coWorkingHeading">
                        Co-Working
                      </h4>
                    </div>
                    <div className="padding-bottom-20">
                      <p className="barlow  fontSize16 fontWeight700 lineHeight150 coWorkingText">
                        Starting from $200/per seat
                      </p>
                    </div>
                    <button className="coWorkingBtn barlow  fontSize16 fontWeight700 lineHeight150">
                      Book your seat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-md-12 mb-3">
            <picture className=" lazyload  w-100 h-100">
              <source data-srcset="media/why5@2x.webp" media="(min-width: 960px)" />
              <source data-srcset="media/why5@1x.webp" media="(min-width: 1000px)" />
              <img alt="Kangaroo pitcher" height="395px" width="660px" className=" lazy lazyload w-100 h-100"
                src="media/why5@1x.png" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
