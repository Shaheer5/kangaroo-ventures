import React from 'react';

export default function FAQs() {
  return (
    <section className="faqs padding-top-48 padding-bottom-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center padding-bottom-64">
              <h2 className="m-0 Bakbak fontSize44 fontWeight400 lineHeight120 heading">
                Commonly asked questions
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div>
              <div className="accordion border-0" id="accordionExample">
                <div className="">
                  <div className="accordion-item borderTop2px">
                    <div className="accordion-header padding-top-12 padding-bottom-12">
                      <button className="accordion-button barlow fontSize24 fontWeight500 lineHeight125 collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#question1" aria-expanded="true"
                        aria-controls="collapseOne">
                        What's the difference between monthly and annual plans?
                      </button>
                    </div>
                    <div id="question1" className="accordion-collapse collapse" aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body barlow fontSize17 fontWeight400 lineHeight141 padding-bottom-24 pt-0">
                        Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Tempore quisquam deserunt aliquam
                        suscipit quia neque impedit vitae exercitationem iusto voluptatum!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="accordion-item">
                    <div className="accordion-header padding-top-12 padding-bottom-12">
                      <button className="accordion-button barlow fontSize24 fontWeight500 lineHeight125 collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#question2" aria-expanded="true"
                        aria-controls="collapseOne">
                        What happens after my free trial ends?
                      </button>
                    </div>
                    <div id="question2" className="accordion-collapse collapse" aria-labelledby="question2"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body barlow fontSize17 fontWeight400 lineHeight141 padding-bottom-24 pt-0">
                        We’ll send you an email when you’re getting close to your event limit for the month. If you hit
                        the limit, you won’t be able to access your charts and dashboards for the rest of the month, but
                        we’ll still collect all your data. You’ll regain account access at the start of the next month.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="accordion-item">
                    <div className="accordion-header padding-top-12 padding-bottom-12">
                      <button className="accordion-button barlow fontSize24 fontWeight500 lineHeight125 collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#question3" aria-expanded="true"
                        aria-controls="collapseOne">
                        What happens after my free trial ends?
                      </button>
                    </div>
                    <div id="question3" className="accordion-collapse collapse" aria-labelledby="question3"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body barlow fontSize17 fontWeight400 lineHeight141 padding-bottom-24 pt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus qui blanditiis,
                        laudantium laborum odio assumenda ratione, at molestias consequuntur dignissimos maiores!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="accordion-item">
                    <div className="accordion-header padding-top-12 padding-bottom-12">
                      <button className="accordion-button barlow fontSize24 fontWeight500 lineHeight125 collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#question4" aria-expanded="true"
                        aria-controls="collapseOne">
                        What forms of payment do you accept?
                      </button>
                    </div>
                    <div id="question4" className="accordion-collapse collapse" aria-labelledby="question4"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body barlow fontSize17 fontWeight400 lineHeight141 padding-bottom-24 pt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus qui blanditiis,
                        laudantium laborum odio assumenda ratione, at molestias consequuntur dignissimos maiores!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="accordion-item borderBottom2px">
                    <div className="accordion-header padding-top-12 padding-bottom-12">
                      <button className="accordion-button barlow fontSize24 fontWeight500 lineHeight125 collapsed"
                        type="button" data-bs-toggle="collapse" data-bs-target="#question5" aria-expanded="true"
                        aria-controls="collapseOne">
                        Do you offer special pricing or discounts for startups?
                      </button>
                    </div>
                    <div id="question5" className="accordion-collapse collapse" aria-labelledby="question5"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body barlow fontSize17 fontWeight400 lineHeight141 padding-bottom-24 pt-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus qui blanditiis,
                        laudantium laborum odio assumenda ratione, at molestias consequuntur dignissimos maiores!
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
